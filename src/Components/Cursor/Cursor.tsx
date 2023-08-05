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
    console.log(cursor, el)
    if (!cursor || !el) return;
    
    const mouseoverEvent = el.addEventListener("mouseover", ()=>{
        cursor.style.top = "-40px";        
        cursor.style.left = "-40px";     
        cursor.style.height = "80px";  
        cursor.style.width = "80px";
    });

    const clickEvent = el.addEventListener("click", ()=>{
        
        cursor.style.top = "-20px";        
        cursor.style.left = "-20px";     
        cursor.style.height = "40px";  
        cursor.style.width = "40px";
        
    });

    const mouseoutEvent = el.addEventListener("mouseout", ()=>{
        
        cursor.style.top = "-20px";        
        cursor.style.left = "-20px";     
        cursor.style.height = "40px";  
        cursor.style.width = "40px";
        
    }); 

    return () => {

        el.removeEventListener("mouseout", mouseoutEvent as unknown as EventListenerOrEventListenerObject);
        el.removeEventListener("mouseover", mouseoverEvent as unknown as EventListenerOrEventListenerObject);
        el.removeEventListener("click", clickEvent as unknown as EventListenerOrEventListenerObject);
    
    }

}

export function Cursor() {

    const cursorRef = useRef<HTMLDivElement>(null);
    useCursorTracker(cursorRef);
    //shamelessly inspired by the amazing https://reh.at/
    return (
        <div ref={cursorRef} className={styles.cursor} id={"cursor"}/>
    )

}
