import { NextResponse } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers';
export async function proxy(request) {

    // console.log("proxy");
    const session = await auth.api.getSession(
        {
            headers: await headers()
        }
    );
    // console.log(session);
    if(!session){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
export const config = {
  matcher: [
    '/my-profile/:path*',
    '/my-products/:path*',
  ],
}