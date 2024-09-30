import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
    const cookieStore = cookies();
    const authToken = cookieStore.get("auth_token");
    if (!authToken) {
        if (!request.url.includes("/login")) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
    } else if (request.url.includes("/login")) {
        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)"],
};