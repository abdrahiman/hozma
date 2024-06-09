import { redirect } from "@sveltejs/kit";

export function load({ cookies, url, locals }) {
  let token = url.searchParams.get("token");
  if (token) {
    cookies.set("access_token", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      httpOnly: true,
    });
    redirect(302, "/");
  }

  return {};
}
