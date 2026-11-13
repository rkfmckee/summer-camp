"use client";
import { subscribeAction } from "@/data/actions";
import type { SubscribeProps } from "@/types";
import { useActionState } from "react";

const INITIAL_STATE = {
    zodErrors: null,
    strapiErrors: null,
    errorMessage: null,
    successMessage: null,
};

export function Subscribe({ heading, content, placeholder, buttonText }: Readonly<SubscribeProps>) {
    const [formState, formAction] = useActionState(subscribeAction, INITIAL_STATE);
    console.log(formState, "this is our form state coming from useActionState");

    const zodError = formState?.zodErrors?.email;
    const strapiError = formState?.strapiErrors?.message;
    const errorMessage = strapiError || zodError || formState?.errorMessage;
    const successMessage = formState?.successMessage;

    return (
        <section className="newsletter container">
            <div className="newsletter__info">
                <h4>{heading}</h4>
                <p className="copy">{content}</p>
            </div>
            <form className="newsletter__form" action={formAction}>
                <input
                    name="email"
                    placeholder={errorMessage || placeholder}
                    className={`newsletter__email ${errorMessage ? "newsletter__email--error" : ""}`}
                />
                <button
                    type="submit"
                    className="newsletter__subscribe btn btn--primary btn--medium"
                >
                    {buttonText}
                </button>
            </form>
        </section>
    );
}
