import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Explicitly set the runtime to Node.js
export const runtime = 'nodejs'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    try {
      const supabase = createRouteHandlerClient({ cookies })
      await supabase.auth.exchangeCodeForSession(code)
    } catch (error) {
      console.error('Error during auth callback:', error)
      // Still redirect to profile creation even if there's an error
    }
  }

  // Redirect to profile creation page after successful authentication
  return NextResponse.redirect(new URL('/profile-creation', requestUrl.origin))
}