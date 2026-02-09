import Elysia from "elysia";
import { auth } from "./lib/auth";

export const authModule = new Elysia({ prefix: "/auth" }).mount(auth.handler);
