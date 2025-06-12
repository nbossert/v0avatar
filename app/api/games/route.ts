import prisma from "@/lib/prismaSafe";

export async function POST(req: Request) {
  const { pars } = await req.json();
  if (!pars || !Array.isArray(pars)) {
    return new Response("Bad request", { status: 400 });
  }
  const game = await prisma.game.create({
    data: { pars: JSON.stringify(pars) }
  });
  return Response.json({ id: game.id });
}

export async function GET() {
  const games = await prisma.game.findMany();
  return Response.json(
    games.map(g => ({ ...g, pars: JSON.parse(g.pars) }))
  );
}
