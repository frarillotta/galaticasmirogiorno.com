import { forwardRef } from "react"


export const Line = forwardRef<SVGSVGElement, { className?: string }>(({ className = '' }, ref) => {
    return <svg 
        preserveAspectRatio="xMidYMid slice" 
        ref={ref} 
        className={className} 
        viewBox="0 0 4 200" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <line vectorEffect={'non-scaling-stroke'} x1="0" y1="0" x2="0" y2="200" stroke="black" strokeWidth="3" />
    </svg>

})
Line.displayName = 'Line'
