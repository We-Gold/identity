import Circle from "../../Shapes/Circle"
import Line from "../../Shapes/Line"
import Arc from "../../Shapes/Arc"

import { calculatePercentOfRange } from "../../lib/timerange"
import { radians } from "../../lib/angles"
import { useTimestamp } from "../../lib/timestamp"

const CIRCLE_X = 50
const CIRCLE_Y = 50
const CIRCLE_RADIUS = 15
const LINE_LENGTH = 15
const ARC_RADIUS = 10

const Earth = () => {
	const timestamp = useTimestamp()

	const scaleRange = () =>
		calculatePercentOfRange(timestamp(), 0, 80000, { fullLoop: true })

	const circleState = () => ({
		x: CIRCLE_X,
		y: CIRCLE_Y,
		radius: CIRCLE_RADIUS * scaleRange(),
	})

	const arcState = () => {
		const radius = ARC_RADIUS * scaleRange()

		return {
			radius,
			x: lineEndX() + radius * lineAngleCos(),
			y: lineEndY() - radius * lineAngleSin(),
			startAngle: 90 - lineAngle(),
			endAngle: -90 - lineAngle(),
		}
	}

	const lineLength = () => LINE_LENGTH * scaleRange()

	const lineAngle = () =>
		calculatePercentOfRange(timestamp(), 0, 360000, { factor: 360 })

	const lineAngleCos = () => Math.cos(radians(lineAngle()))
	const lineAngleSin = () => Math.sin(radians(lineAngle()))

	const lineStartX = () =>
		circleState().x + circleState().radius * lineAngleCos()
	const lineStartY = () =>
		circleState().y - circleState().radius * lineAngleSin()

	const lineEndX = () => lineStartX() + lineLength() * lineAngleCos()
	const lineEndY = () => lineStartY() - lineLength() * lineAngleSin()

	return (
		<g>
			<Circle {...circleState()} />
			<Line
				x1={lineStartX()}
				y1={lineStartY()}
				x2={lineEndX()}
				y2={lineEndY()}
			/>
			<Arc {...arcState()} />
		</g>
	)
}

export default Earth
