const Circle = (props: any) => {
	return (
		<circle
			cx={props.x}
			cy={props.y}
			r={props.radius}
			fill="transparent"
			stroke="black"
			stroke-width="3"
		/>
	)
}

export default Circle
