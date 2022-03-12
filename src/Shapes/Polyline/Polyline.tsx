import { Show } from "solid-js"

const Polyline = (props: any) => {
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
					stroke-width="3"
					fill="transparent"
				/>
			}
		>
			<polygon
				points={pointsString()}
				stroke="black"
				stroke-width="3"
				fill="transparent"
			/>
		</Show>
	)
}

export default Polyline
