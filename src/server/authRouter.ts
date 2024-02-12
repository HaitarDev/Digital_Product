import { signupUserSchema } from "@/validator/auth";
import { publicProcedure, router } from "./trpc";

export const authRouter = router({
  createUser: publicProcedure.input(signupUserSchema).mutation(({ input }) => {
    const { email, password } = input;

    // check if already a user
  }),
});
