import { forwardRef } from "react"


export const Line = forwardRef<SVGSVGElement, { className?: string }>(({ className = '' }, ref) => {
    return <svg ref={ref} className={className} viewBox="0 0 4 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="0" y2="100" stroke="black" stroke-width="3" />
    </svg>

})
Line.displayName = 'Line'
