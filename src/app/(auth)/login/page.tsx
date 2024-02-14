"use client";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupUserSchema, SignupType } from "@/validator/auth";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Signup() {
  const [error, setError] = useState<String>("");
  const [loading, setIsLoading] = useState<boolean>(false);

  const session = useSession();
  const router = useRouter();

  console.log(session);

  const form = useForm<SignupType>({
    resolver: zodResolver(signupUserSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  if (session.status === "authenticated") {
    router.push("/");
    return null;
  }

  const onSubmit = async (values: SignupType) => {
    setIsLoading(true);
    setError("");

    signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    if (session.status === "unauthenticated")
      return setError("Invalid credentials");

    setIsLoading(false);
    setError("");
  };

  const sessionStatus: string = "asd";
  return (
    sessionStatus !== "authenticated" && (
      <div className="w-full h-full flex items-center justify-center mt-28">
        <Card
          className={`  flex w-[80%] sm:w-[50%] lg:w-[40%]
          xl:w-[30%] justify-center   ${
            loading ? "opacity-50" : "opacity-100"
          } `}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader className="space-y-1">
                <CardTitle className="text-3xl">
                  Login to your account
                </CardTitle>
                <CardDescription>
                  Enter your email below to login
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between gap-2 lg:gap-4">
                <div className="grid grid-cols-1">
                  <Button
                    // onClick={handleGoogleLogin}
                    disabled={loading}
                    variant="outline"
                  >
                    <FaGoogle className="mr-2 h-4 w-4" />
                    Google
                  </Button>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="m@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          type="password"
                          placeholder="**********"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <p className="text-red-500 text-sm">{error ? error : null}</p>
                <div className="flex justify-between items-center">
                  <Button
                    disabled={loading}
                    variant={"link"}
                    className="text-red-500"
                  >
                    Forgot Password ?
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button disabled={loading} className="w-full ">
                  {loading ? "Loading..." : "Create account"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    )
  );
}
