import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";

const BASE_URL = process.env.DRILL_BASE;
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  const queryParams = req.headers.get("queryParams");
  const id = req.headers.get("id");

  const session = await getServerSession(authOptions);
  if (!action)
    return NextResponse.json(
      { error: "Action parameter is required" },
      { status: 400 }
    );

  if (!endpointMapper(action))
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });

  const cctURL =
    id && id?.length > 0
      ? `${BASE_URL}/${endpointMapper(action, id)}?${queryParams}`
      : `${BASE_URL}/${endpointMapper(action)}?${queryParams}`;

  try {
    const response = await axios.get(cctURL, {
      headers: {
        Authorization:
          session?.user.userToken ?? req.headers.get("Authorization") ?? "",
      },
    });
    const result = await response.data;
    return NextResponse.json({
      data: result,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");
  const session = await getServerSession(authOptions);
  const body = await req.json();

  if (!action)
    return NextResponse.json(
      { error: "Action parameter is required" },
      { status: 400 }
    );
  if (!endpointMapper(action))
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  const id = req.headers.get("id");
  const cctURL =
    id && id?.length > 0
      ? `${BASE_URL}/${endpointMapper(action, id)}`
      : `${BASE_URL}/${endpointMapper(action)}`;

  console.log("url", cctURL);
  try {
    const response = await axios.post(cctURL, body, {
      headers: {
        Authorization:
          session?.user.userToken ?? req.headers.get("Authorization") ?? "",
      },
    });

    const result = await response.data;
    return NextResponse.json({
      data: result,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Handles DELETE requests to the proxy endpoint
 * @param req NextRequest object containing the request details
 * @returns NextResponse with the API response data or error
 */
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");
  const session = await getServerSession(authOptions);

  const queryParams = req.headers.get("queryParams");
  const id = req.headers.get("id");

  if (!action)
    return NextResponse.json(
      { error: "Action parameter is required" },
      { status: 400 }
    );

  if (!endpointMapper(action))
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });

  const cctURL =
    id && id?.length > 0
      ? `${BASE_URL}/${endpointMapper(action, id)}?${queryParams}`
      : `${BASE_URL}/${endpointMapper(action)}?${queryParams}`;

  const auth = session?.user.userToken ?? req.headers.get("Authorization");
  console.log(auth, cctURL);
  try {
    const response = await axios.delete(cctURL, {
      headers: {
        Authorization: auth,
      },
    });
    const result = await response.data;
    return NextResponse.json({
      data: result,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export function endpointMapper(action: string, id?: string): string {
  const actionsMap: Record<string, string> = {
    register: "auth/register",
    login: "auth/login",
  };
  return actionsMap[action] || "";
}
