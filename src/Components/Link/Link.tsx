import { useRef, useEffect } from "react";
import { mouseOutInEventListener } from "../Cursor/Cursor";
import NextLink from "next/link";

export const Link :React.FC<{
    href: string,
    children: React.ReactNode,
    className: string,
}> = ({href, children, className, ...delegate}) => {

    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        
        const el = ref.current;
        const eventsCleanup = mouseOutInEventListener(el);

        return eventsCleanup;

    }, [])

    return (
        <NextLink {...delegate} href={href} ref={ref} className={className}>
           {children}
        </NextLink>
    )

}
