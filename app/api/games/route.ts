import prisma from "@/lib/prismaSafe";

export async function POST(req: Request) {
  const { pars } = await req.json();
  if (!pars || !Array.isArray(pars)) {
    return new Response("Bad request", { status: 400 });
  }
  const game = await prisma.game.create({ data: { pars } });
  return Response.json({ id: game.id });
}
