export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const text = searchParams.get("text") || "default";

  return Response.json([{ text }]);
}
