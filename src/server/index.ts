import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  hello: publicProcedure.query(async () => {
    return [10, 4, 10];
  }),
});

export type AppRouter = typeof appRouter;
