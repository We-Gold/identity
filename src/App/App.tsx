import { createEffect, createSignal } from "solid-js"

import styles from "./App.module.css"

import Circle from "../Circle"
import Line from "../Line"
import Arc from "../Arc"

import { radians } from "./angles"

const REFRESH_RATE = 10 // milliseconds

const App = () => {
	const [timestamp, setTimestamp] = createSignal(Date.now())

	setInterval(() => setTimestamp(Date.now()), REFRESH_RATE)

	const [circleX, setCircleX] = createSignal(50)
	const [circleY, setCircleY] = createSignal(50)
	const [radius, setRadius] = createSignal(15)
	const [lineLength, setLineLength] = createSignal(15)
	const [arcRadius, setArcRadius] = createSignal(10)

	const lineAngle = () => (timestamp() / 1000) % 360
	const lineAngleCos = () => Math.cos(radians(lineAngle()))
	const lineAngleSin = () => Math.sin(radians(lineAngle()))

	const lineStartX = () => circleX() + radius() * lineAngleCos()
	const lineStartY = () => circleY() - radius() * lineAngleSin()

	const lineEndX = () => lineStartX() + lineLength() * lineAngleCos()
	const lineEndY = () => lineStartY() - lineLength() * lineAngleSin()

	const arcStart = () => (90 - lineAngle()) % 360
	const arcEnd = () => (-90 - lineAngle()) % 360

	return (
		<div class={styles.mainArea}>
			<div class={styles.renderBox}>
				<svg class={styles.mainSvg} viewBox="0 0 100 100">
					<Circle x={circleX()} y={circleY()} radius={radius()} />
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
				</svg>
			</div>
		</div>
	)
}

export default App
