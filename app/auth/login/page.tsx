import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center p-8 relative">
        <div className="absolute top-8 left-8">
          <svg
            width="32"
            height="32"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#15803d" />
                <stop offset="100%" stopColor="#022c22" />
              </linearGradient>
            </defs>
            <polygon points="50,10 90,90 10,90" fill="url(#gradient)" />
          </svg>
        </div>
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">
              Enter your credentials to access your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className=" text-sm">
                Email
              </Label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border-[1.5px] px-2 py-1 rounded-md border-gray-500 focus:ring-1 text-base"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-sm">
                Password
              </Label>
              <input
                id="password"
                type="password"
                className="border-[1.5px] px-2 py-1 rounded-md border-gray-500 focus:ring-1 text-base"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember-me" />
              <Label htmlFor="remember-me">Remember me</Label>
            </div>
            <Link href="#" className="text-sm text-[#15803d] font-medium ">
              Forgot password?
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Button className="w-full h-12 bg-[#15803d] text-base">
              Sign In
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[1px] rounded-md border-gray-400" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* change the hover color of these button to fit the code style */}
              <Button
                variant="outline"
                className="bg-gray-50 flex items-center hover:bg-gray-100"
              >
                <Image src="/google.svg" alt="google" width={20} height={20} />
                Google
              </Button>
              <Button
                variant="outline"
                className="bg-gray-50 flex items-center hover:bg-gray-100"
              >
                <Image src="/apple.svg" alt="google" width={20} height={20} />
                Apple
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-primary hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src="/Image_fx.png"
          alt="Learn"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
