import { forwardRef } from "react"


export const Line = forwardRef<SVGSVGElement, { className?: string }>(({ className = '' }, ref) => {
    return <svg
        preserveAspectRatio="xMidYMid slice"
        ref={ref}
        className={className}
        viewBox="0 0 3 400"
        xmlns="http://www.w3.org/2000/svg"
        // force GPU rendering
        style={{transform: 'translateZ(0px)'}}
    >
        <line
            x1="0"
            y1="0"
            x2="0"
            y2="400"
            stroke="black"
            strokeWidth="30"
            shape-rendering="crispEdges"
            vectorEffect='non-scaling-stroke'
        />
    </svg>

})
Line.displayName = 'Line'
