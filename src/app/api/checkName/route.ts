import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const urlParams = new URLSearchParams(request.url.split("?")[1]);
  const name = urlParams.get("name");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(
          JSON.stringify({
            name,
          }),
        ),
      );
    }, 5000);
  });
}
