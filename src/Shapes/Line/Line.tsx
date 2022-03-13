interface LineProps {
	x1: number
	x2: number
	y1: number
	y2: number
	strokeWidth?: number
	rounded?: boolean
	alpha?: number
}

const Line = (props: LineProps) => {
	return (
		<line
			x1={props.x1}
			y1={props.y1}
			x2={props.x2}
			y2={props.y2}
			stroke={`rgba(0,0,0,${props.alpha ?? 1})`}
			stroke-width={props.strokeWidth ?? 3}
			stroke-linecap={props.rounded ? "round" : "butt"}
		/>
	)
}

export default Line
