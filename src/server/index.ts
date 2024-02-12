import { signupUserSchema } from "@/validator/auth";
import { publicProcedure, router } from "./trpc";
import { authRouter } from "./authRouter";

export const appRouter = router({
  auth: authRouter,
});

export type AppRouter = typeof appRouter;
