import { Show, createSignal } from "solid-js"

import styles from "./App.module.css"

import Earth from "../Sections/Earth"
import Topography from "../Sections/Topography"
import Share from "../Share"
import QR from "../QR"

const App = () => {
	const [sharing, setSharing] = createSignal(false)

	return (
		<div class={styles.mainArea}>
			<Share
				class={styles.download}
				svgClass={styles.mainSvg}
				setSharing={setSharing}
				sharing={sharing}
			/>
			<div class={styles.renderBox}>
				<Show
					when={sharing()}
					fallback={
						<svg class={styles.mainSvg} viewBox="0 0 100 100">
							<Earth />
							<Topography />
						</svg>
					}
				>
					<QR />
				</Show>
			</div>
		</div>
	)
}

export default App
