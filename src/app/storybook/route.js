export async function GET() {
  return Response.redirect(new URL('/storybook/index.html', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'));
}