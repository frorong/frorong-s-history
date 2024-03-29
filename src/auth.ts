import { SvelteKitAuth } from '@auth/sveltekit'
import GitHub from '@auth/sveltekit/providers/github'
import {
  GITHUB_ID,
  GITHUB_SECRET,
  AUTH_SECRET,
  AUTH_TRUST_HOST,
} from '$env/static/private'

export const {
  handle,
  signIn,
  signOut,
} = SvelteKitAuth({
  providers: [
    GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    }),
  ],
  secret: AUTH_SECRET,
  trustHost: Boolean(AUTH_TRUST_HOST),
})
