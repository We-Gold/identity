import { For } from "solid-js"

import Line from "../../Shapes/Line"

import { useTimestamp } from "../../lib/timestamp"
import { calculatePercentOfRange } from "../../lib/timerange"
import { radians } from "../../lib/angles"
import { getNoise } from "../../lib/random"

const EARTH_X = 50
const EARTH_Y = 50
const START_RADIUS = 20

const START_ANGLE = 30
const ANGLE_STEP = 30
const END_ANGLE = 330

const MAX_LENGTH = 18
const MIN_LENGTH = 3

const Topography = () => {
	const timestamp = useTimestamp()

	const moonLineAngle = () =>
		calculatePercentOfRange(timestamp(), 0, 360000, { factor: 360 })

	const strokeWidth = () =>
		calculatePercentOfRange(timestamp(), 0, 3600000, {
			factor: 3,
			fullLoop: true,
		})

	const calculateLinePropsForAngle = (angle: number) => {
		// Calculate the x and y components of the lines
		const cos = Math.cos(radians(angle))
		const sin = Math.sin(radians(angle))

		const x1 = EARTH_X + START_RADIUS * cos
		const y1 = EARTH_Y - START_RADIUS * sin

		// Use a reduced timestamp for slower length variation
		const timeOffset = timestamp() / 100000

		// Calculate the length for the current line based on a 3D noise map,
		// using the current timestamp to synchronize the lengths between devices
		const length = Math.abs(
			getNoise(x1 * 0.1, y1 * 0.1, timeOffset) *
				(MAX_LENGTH - MIN_LENGTH) +
				MIN_LENGTH
		)

		const x2 = x1 + length * cos
		const y2 = y1 - length * sin

		return { x1, y1, x2, y2, strokeWidth: strokeWidth(), rounded: true }
	}

	const createLineProps = () => {
		const currentRelativeAngle = moonLineAngle()

		const lines = []

		for (let angle = START_ANGLE; angle <= END_ANGLE; angle += ANGLE_STEP) {
			lines.push(calculateLinePropsForAngle(angle + currentRelativeAngle))
		}

		return lines
	}

	return (
		<g>
			<For each={createLineProps()}>{(props) => <Line {...props} />}</For>
		</g>
	)
}

export default Topography
