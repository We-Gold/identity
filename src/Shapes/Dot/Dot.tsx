interface DotProps {
	x: number
	y: number
	radius: number
	strokeWidth?: number
}

const Dot = (props: DotProps) => {
	return (
		<circle
			cx={props.x}
			cy={props.y}
			r={props.radius}
			fill="black"
			stroke="transparent"
			stroke-width={props.strokeWidth ?? 3}
		/>
	)
}

export default Dot
