"use server";

import z from "zod";
import { subscribeService } from "./services";

const subscribeSchema = z.object({
    email: z.email({
        message: "Please enter a valid email address",
    }),
});

export async function subscribeAction(previousState: any, formData: FormData) {
    const email = formData.get("email");

    const validatedFields = subscribeSchema.safeParse({
        email: formData.get("email"),
    });

    if (!validatedFields.success) {
        console.dir(validatedFields.error.flatten().fieldErrors, { depth: null });

        return {
            ...previousState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
        };
    }

    const responseData = await subscribeService(validatedFields.data.email);

    if (!responseData) {
        return {
            ...previousState,
            strapiErrors: null,
            zodErrors: null,
            errorMessage: "Something went wrong, please try again.",
        };
    }

    if (responseData.error) {
        return {
            ...previousState,
            strapiErrors: responseData.error,
            zodErrors: null,
            errorMessage: "Failed to subscribe.",
            successMessage: null,
        };
    }

    return {
        ...previousState,
        strapiErrors: null,
        zodErrors: null,
        errorMessage: null,
        successMessage: "Subscribed!",
    };
}
