"use client";
import { SessionProvider, useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

export default function SessionAuth({ children }: PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
