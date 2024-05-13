import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard"]);

export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc).(.*)"],
};
/**
 * "/((?!.+\\.[\\w]+$|_next).*)": This pattern is a regular expression that matches any URL except for those ending with a file extension (e.g., .html, .css, .js) or containing the string _next. The (?!.+\\.[\\w]+$|_next) part is a negative lookahead assertion that excludes URLs matching the specified conditions.

"/": This pattern is a simple string that matches the root URL ("/").

"/(api|trpc).(.*)": This pattern is a regular expression that matches URLs starting with either "api" or "trpc" followed by any character (except newline) zero or more times. It captures the rest of the URL after "api" or "trpc".
 */
