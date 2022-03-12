interface CircleProps {
	x: number
	y: number
	radius: number
	strokeWidth?: number
}

const Circle = (props: CircleProps) => {
	return (
		<circle
			cx={props.x}
			cy={props.y}
			r={props.radius}
			fill="transparent"
			stroke="black"
			stroke-width={props.strokeWidth ?? 3}
		/>
	)
}

export default Circle
