const Arc = (props: any) => {
	return (
		<path
			d={describeArc(
				props.x,
				props.y,
				props.radius,
				props.startAngle,
				props.endAngle
			)}
			fill="transparent"
			stroke="black"
			stroke-width="3"
		/>
	)
}

export default Arc

// Source: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
const polarToCartesian = (
	centerX: number,
	centerY: number,
	radius: number,
	angleInDegrees: number
) => {
	const angleInRadians = (angleInDegrees * Math.PI) / 180.0

	return {
		x: centerX + radius * Math.cos(angleInRadians),
		y: centerY + radius * Math.sin(angleInRadians),
	}
}

const describeArc = (
	x: number,
	y: number,
	radius: number,
	startAngle: number,
	endAngle: number
) => {
	const start = polarToCartesian(x, y, radius, endAngle)
	const end = polarToCartesian(x, y, radius, startAngle)

	const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

	const d = [
		"M",
		start.x,
		start.y,
		"A",
		radius,
		radius,
		0,
		largeArcFlag,
		0,
		end.x,
		end.y,
	].join(" ")

	return d
}
