import { betterAuth } from "better-auth";
import { PrismaClient } from "../generated/prisma/client";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? "",
});

const prisma = new PrismaClient({ adapter });

// api/auth
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  basePath: "",
});
