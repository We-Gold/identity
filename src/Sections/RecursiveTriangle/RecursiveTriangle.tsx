import { For } from "solid-js"

import { useTimestamp } from "../../lib/timestamp"
import { calculatePercentOfRange } from "../../lib/timerange"
import { getNoise } from "../../lib/random"
import {
	splitTriangle,
	makeTriangle,
	Triangle,
	copyTriangle,
	lerp,
} from "../../lib/triangles"

import Line from "../../Shapes/Line"

const SIDE_LENGTH = 20
const CORNER_X = 98
const CORNER_Y = 98
const LINE_WIDTH = 1
const MAX_ALPHA = 0.4

const MIN_LAYERS = 2
const MAX_LAYERS = 4

// Creates an interesting recursive effect
const AVERAGE_DIVISOR = 2.1

const RecursiveTriangle = () => {
	const timestamp = useTimestamp()

	const strokeWidth = () =>
		calculatePercentOfRange(timestamp(), 20000, 70000, {
			fullLoop: true,
			factor: LINE_WIDTH,
		})

	const alpha = () => (strokeWidth() / LINE_WIDTH) * MAX_ALPHA

	const calculateLayers = () => {
		// Use a reduced timestamp for slower length variation
		const timeOffset = timestamp() / (100000 / 3)

		const numberOfLayers =
			Math.abs(getNoise(1, 1, timeOffset)) * (MAX_LAYERS - MIN_LAYERS) +
			MIN_LAYERS

		return numberOfLayers
	}

	const mainTriangle = makeTriangle(
		CORNER_X - SIDE_LENGTH,
		CORNER_Y,
		CORNER_X,
		CORNER_Y,
		CORNER_X,
		CORNER_Y - SIDE_LENGTH
	)

	const layers = [[mainTriangle]]

	// Generate the all of the potential layers
	for (let i = 1; i < MAX_LAYERS; i++) {
		const triangles: Triangle[] = []

		// Split each triangle in the previous layer
		for (let j = 0; j < layers[i - 1].length; j++) {
			triangles.push(...splitTriangle(layers[i - 1][j], AVERAGE_DIVISOR))
		}

		layers.push(triangles)
	}

	const triangles = () => {
		const currentLayers = calculateLayers()

		// Add all of the triangles that are complete
		const completeLayers = layers.slice(0, Math.floor(currentLayers)).flat()

		// Find the percent progress towards the next layer of recursive triangles
		const partialLayerPercent = partialTriangles()

		// Create partial triangles to match the current progress of the next layer
		const partialLayer =
			currentLayers <= MIN_LAYERS || currentLayers >= MAX_LAYERS
				? []
				: layers[Math.ceil(currentLayers) - 1].map((triangle) => {
						const copy = copyTriangle(triangle)

						// Interpolate the side lengths to match the
						// where we are between the two current layers
						copy.corner1 = lerp(
							copy.corner2,
							copy.corner1,
							partialLayerPercent
						)
						copy.corner3 = lerp(
							copy.corner2,
							copy.corner3,
							partialLayerPercent
						)

						return copy
				  })

		return [...completeLayers, ...partialLayer]
	}

	const partialTriangles = () => {
		// Calculate the percent between the current layer and the next layer from 0 to 1
		// Ex: currentLayers = 5.323 => partialLayer = 5.323 - 5 = 0.323
		const currentLayers = calculateLayers()
		const partialLayer = currentLayers - Math.floor(currentLayers)

		return partialLayer
	}

	return (
		<g>
			<For each={triangles()}>
				{(triangle) => (
					<>
						<Line
							rounded={true}
							strokeWidth={LINE_WIDTH}
							alpha={alpha()}
							x1={triangle.corner1.x}
							y1={triangle.corner1.y}
							x2={triangle.corner2.x}
							y2={triangle.corner2.y}
						/>
						<Line
							rounded={true}
							strokeWidth={LINE_WIDTH}
							alpha={alpha()}
							x1={triangle.corner2.x}
							y1={triangle.corner2.y}
							x2={triangle.corner3.x}
							y2={triangle.corner3.y}
						/>
					</>
				)}
			</For>
		</g>
	)
}

export default RecursiveTriangle
