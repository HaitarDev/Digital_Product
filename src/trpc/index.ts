import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    return 4;
  }),
});

export type AppRouter = typeof appRouter;
