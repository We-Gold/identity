const Dot = (props: any) => {
	return (
		<circle
			cx={props.x}
			cy={props.y}
			r={props.radius}
			fill="black"
			stroke="transparent"
			stroke-width="3"
		/>
	)
}

export default Dot
