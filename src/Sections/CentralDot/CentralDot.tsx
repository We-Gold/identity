import { useTimestamp } from "../../lib/timestamp"
import { calculatePercentOfRange } from "../../lib/timerange"
import Dot from "../../Shapes/Dot"

const DOT_X = 50
const DOT_Y = 50
const DOT_RADIUS = 3

const CentralDot = () => {
	const timestamp = useTimestamp()

	const radius = () =>
		calculatePercentOfRange(timestamp(), 400000, 700000, {
			factor: DOT_RADIUS,
			fullLoop: true,
		})

	return <Dot x={DOT_X} y={DOT_Y} radius={radius()} />
}

export default CentralDot
