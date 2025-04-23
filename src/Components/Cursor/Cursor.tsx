import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css'

function useCursorTracker(cursorRef: React.RefObject<HTMLDivElement>) {
    useEffect(() => {
        if (!cursorRef || !cursorRef?.current) return;
    
        const cursor = cursorRef.current;
        window.document.addEventListener("mousemove", (e)=>{
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }, [cursorRef])
}

export function mouseOutInEventListener(el: HTMLElement | null) {

    const cursor = window.document.getElementById("cursor");
    if (!cursor || !el) return;
    
    const mouseoverEvent = el.addEventListener("mouseover", ()=>{
        cursor.style.top = "-30px";        
        cursor.style.left = "-30px";     
        cursor.style.height = "50px";  
        cursor.style.width = "50px";
    });

    const mouseDownEvent = el.addEventListener("mousedown", ()=>{
        cursor.style.top = "-5px";        
        cursor.style.left = "-5px";     
        cursor.style.height = "10px";  
        cursor.style.width = "10px";
    });

    const mouseUpEvent = el.addEventListener("mouseup", ()=>{
        cursor.style.top = "-30px";        
        cursor.style.left = "-30px";     
        cursor.style.height = "50px";  
        cursor.style.width = "50px";
    });


    const mouseoutEvent = el.addEventListener("mouseout", ()=>{
        cursor.style.top = "-10px";        
        cursor.style.left = "-10px";     
        cursor.style.height = "20px";  
        cursor.style.width = "20px";

    }); 

    return () => {

        el.removeEventListener("mouseout", mouseoutEvent as unknown as EventListenerOrEventListenerObject);
        el.removeEventListener("mouseover", mouseoverEvent as unknown as EventListenerOrEventListenerObject);
        el.removeEventListener("click", mouseDownEvent as unknown as EventListenerOrEventListenerObject);
        el.removeEventListener("click", mouseUpEvent as unknown as EventListenerOrEventListenerObject);

    }

}

export function Cursor() {

    const cursorRef = useRef<HTMLDivElement>(null);
    useCursorTracker(cursorRef);
    //shamelessly inspired by the amazing https://reh.at/
    return (
        <div ref={cursorRef} className={styles.cursor} id={"cursor"} />
    )

}
