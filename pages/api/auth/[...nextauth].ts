import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  secret: "Qx8Ld/zOhtfDA1iTnqYkHELe5FdLwhJ3Yy39imc2p5E=",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID?process.env.GOOGLE_ID:"",
      clientSecret: process.env.GOOGLE_SECRET?process.env.GOOGLE_SECRET:"",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
}

export default NextAuth(authOptions)