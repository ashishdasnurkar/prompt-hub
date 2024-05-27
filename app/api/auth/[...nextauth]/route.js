import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();

      // check if user exists

      // if not then create a new user

      // return success
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
