import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@gmail.com" &&
          credentials?.password === "1234"
        ) {
          return { id: "1", name: "Admin" };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };