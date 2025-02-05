"use client"; // Must be a client component

import { useEffect } from "react";
import Button from "~~/components/Button";
import { classes } from './error.styles';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>
                500: <small className={classes.subtitle}>System Failure</small>
            </h1>

            <p className={classes.errorMessage}>
                Something exploded. We're investigating. In the meantime, try not to break anything else.
            </p>

            <div className={classes.errorContainer}>
                <p>While we sweep up the digital debris, here are some possible causes:</p>
                <ul className={classes.errorList}>
                    <li>A developer pushed 'one last change' on a Friday.</li>
                    <li>The server overheated from all the awesome.</li>
                    <li>An AI tried to divide by zero.</li>
                </ul>
            </div>

            <p className={classes.errorSuggestion}>But don't panic (yet). Try one of these:</p>

            <div className={classes.errorActions}>
                <p className="text-lg lg:text-2xl font-medium m-0 space-x-4">
                    <a href="/" className={classes.actionLink}>Try Again</a> |
                    <a href="/" className={classes.actionLink}>Flee to Safety</a> |
                    <a href="/" className={classes.actionLink}>Sound the alarm</a>
                </p>
            </div>
        </div>
    );
}