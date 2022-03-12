import Circle from "../../Shapes/Circle"
import Line from "../../Shapes/Line"
import Arc from "../../Shapes/Arc"

import { calculatePercentOfRange } from "../../lib/timerange"
import { radians } from "../../lib/angles"
import { useTimestamp } from "../../lib/timestamp"

import { createSignal } from "solid-js"

const CIRCLE_X = 50
const CIRCLE_Y = 50
const CIRCLE_RADIUS = 15
const LINE_LENGTH = 15
const ARC_RADIUS = 10

const Earth = () => {
	const timestamp = useTimestamp()

	const scaleRange = () =>
		calculatePercentOfRange(timestamp(), 0, 80000, { fullLoop: true })

	const circleX = () => CIRCLE_X
	const circleY = () => CIRCLE_Y
	const circleRadius = () => CIRCLE_RADIUS * scaleRange()
	const lineLength = () => LINE_LENGTH * scaleRange()
	const arcRadius = () => ARC_RADIUS * scaleRange()

	const lineAngle = () =>
		calculatePercentOfRange(timestamp(), 0, 36000, { factor: 360 })

	const lineAngleCos = () => Math.cos(radians(lineAngle()))
	const lineAngleSin = () => Math.sin(radians(lineAngle()))

	const lineStartX = () => circleX() + circleRadius() * lineAngleCos()
	const lineStartY = () => circleY() - circleRadius() * lineAngleSin()

	const lineEndX = () => lineStartX() + lineLength() * lineAngleCos()
	const lineEndY = () => lineStartY() - lineLength() * lineAngleSin()

	const arcStart = () => 90 - lineAngle()
	const arcEnd = () => -90 - lineAngle()

	return (
		<g>
			<Circle x={circleX()} y={circleY()} radius={circleRadius()} />
			<Line
				x1={lineStartX()}
				y1={lineStartY()}
				x2={lineEndX()}
				y2={lineEndY()}
			/>
			<Arc
				x={lineEndX() + arcRadius() * lineAngleCos()}
				y={lineEndY() - arcRadius() * lineAngleSin()}
				radius={arcRadius()}
				startAngle={arcStart()}
				endAngle={arcEnd()}
			/>
		</g>
	)
}

export default Earth
