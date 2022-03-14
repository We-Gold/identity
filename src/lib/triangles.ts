const DEFAULT_AVERAGE_DIVISOR = 2

interface Point {
	x: number
	y: number
}

// Corners 1 and 3 form the hypotenuse
export interface Triangle {
	corner1: Point
	corner2: Point
	corner3: Point
}

export const makeTriangle = (
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x3: number,
	y3: number
): Triangle => {
	return {
		corner1: { x: x1, y: y1 },
		corner2: { x: x2, y: y2 },
		corner3: { x: x3, y: y3 },
	}
}

export const copyTriangle = (triangle: Triangle) => {
	return makeTriangle(
		triangle.corner1.x,
		triangle.corner1.y,
		triangle.corner2.x,
		triangle.corner2.y,
		triangle.corner3.x,
		triangle.corner3.y
	)
}

const getHypotenuseMidpoint = (
	triangle: Triangle,
	averageDivisor = DEFAULT_AVERAGE_DIVISOR
): Point => ({
	x: average(triangle.corner1.x, triangle.corner3.x, averageDivisor),
	y: average(triangle.corner1.y, triangle.corner3.y, averageDivisor),
})

export const lerp = (point1: Point, point2: Point, percent: number) => {
	return {
		x: lerp1D(point1.x, point2.x, percent),
		y: lerp1D(point1.y, point2.y, percent),
	}
}

const lerp1D = (x1: number, x2: number, percent: number) =>
	x1 + (x2 - x1) * percent

const average = (
	x1: number,
	x2: number,
	averageDivisor = DEFAULT_AVERAGE_DIVISOR
) => (x1 + x2) / averageDivisor

export const splitTriangle = (
	triangle: Triangle,
	averageDivisor = DEFAULT_AVERAGE_DIVISOR
) => {
	const midpoint = getHypotenuseMidpoint(triangle, averageDivisor)

	const triangle1 = {
		corner1: triangle.corner1,
		corner2: midpoint,
		corner3: triangle.corner2,
	}

	const triangle2 = {
		corner1: triangle.corner2,
		corner2: midpoint,
		corner3: triangle.corner3,
	}

	return [triangle1, triangle2]
}
