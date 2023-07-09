import { getServerSession } from "next-auth/next";

import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { User } from "@prisma/client";
import { SafeUser } from "../types";

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            }
        });

        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified:
                currentUser.emailVerified?.toISOString() || null,
        } as SafeUser;
    } catch (error: any) {
        return null;
    }
}

