import { useRef, useEffect } from "react";
import { mouseOutInEventListener } from "../Cursor/Cursor";
import NextLink from "next/link";

export const Link :React.FC<{
    href: string,
    children: React.ReactNode,
    ariaLabel: string,
    className?: string,
}> = ({href, children, className, ariaLabel, ...delegate}) => {

    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        
        const el = ref.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;

    }, [])

    return (
        <NextLink aria-label={ariaLabel} {...delegate} href={href} ref={ref} className={className}>
           {children}
        </NextLink>
    )

}
