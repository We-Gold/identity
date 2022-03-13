import { Show } from "solid-js"

interface PolylineProps {
	points: Array<number>
	closed?: boolean
	strokeWidth?: number
	rounded?: boolean
}

const Polyline = (props: PolylineProps) => {
	const pointsString = () =>
		props.points
			.map(
				(number: number, i: number) =>
					`${number}${i % 2 == 0 ? "," : ""} `
			)
			.join("")

	return (
		<Show
			when={props.closed}
			fallback={
				<polyline
					points={pointsString()}
					stroke="black"
					stroke-width={props.strokeWidth ?? 3}
					fill="transparent"
					stroke-linejoin={props.rounded ? "round" : "miter"}
					stroke-linecap={props.rounded ? "round" : "butt"}
				/>
			}
		>
			<polygon
				points={pointsString()}
				stroke="black"
				stroke-width={props.strokeWidth ?? 3}
				fill="transparent"
				stroke-linejoin={props.rounded ? "round" : "miter"}
				stroke-linecap={props.rounded ? "round" : "butt"}
			/>
		</Show>
	)
}

export default Polyline
