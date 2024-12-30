export async function GET() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        new Response(
          JSON.stringify({
            name: "John Doe",
          }),
        ),
      );
    }, 5000);
  });
}
