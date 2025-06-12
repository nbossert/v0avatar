import { PrismaClient } from "@prisma/client";
const prisma =
  process.env.NEXT_PUBLIC_V0_PREVIEW === "true"
    ? ({ game: { create: async ({ data }) => ({ id: "demo123", ...data }) } } as any)
    : new PrismaClient();
export default prisma;
