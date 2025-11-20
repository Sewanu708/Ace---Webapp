import { LoginSchema, RegisterSchema } from "./schema";

type Options = {
  method: string;
  headers?: Record<string, string>;
  body?: string | Record<string, string>;
  id?: string;
};


export class APIClientError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

class DrillEndPoints {
  #baseurl = process.env.NEXT_PUBLIC_CLIENT;
  #defaultHeaders = {
    "Content-Type": "application/json",
  };

  async #request(url: string, options: Options) {
    const {
      method = "GET",
      headers = {},
      body,
      id = "",
      //   filters = {},
    } = options;

    // const queryParams =
    //   Object.keys(filters).length > 0 ? handleQueryParams(filters) : "";

    const cctURL = this.#baseurl
      ? `http://localhost:3000${this.#baseurl}/${url}`
      : `http://localhost:3000/api/proxy/${url}`;

    const config: RequestInit = {
      method,
      headers: {
        ...headers,
        ...this.#defaultHeaders,
        id,
        // queryParams,
      },
      credentials: "include",
      signal: AbortSignal.timeout(10000),
      //   next: {
      //     tags: [tag],
      //   },
    };

    if (body)
      config.body = typeof body === "string" ? body : JSON.stringify(body);
    try {
      const response = await fetch(cctURL, config);
      if (!response.ok)
        throw new APIClientError(response.statusText, response.status);
      const data = await response.json();
      if (!data.success) {
        throw new APIClientError(data.error.message, data.error.status);
      }
      return data;
    } catch (error) {
      console.error(
        error instanceof APIClientError
          ? `${error.message} - ${error.status}`
          : error
      );
      if (error instanceof APIClientError) throw error;

      throw new APIClientError(
        "A network or unexpected error occurred. Please try again.",
        500
      );
    }
  }

  async login(payload: LoginSchema) {
    return this.#request("?action=login", {
      method: "POST",
      body: {
        ...payload,
      },
    });
  }

async register(payload: RegisterSchema) {
    return this.#request("?action=register", {
      method: "POST",
      body: {
        ...payload,
      },
    });
  }
}

export const apiClient = new DrillEndPoints();
