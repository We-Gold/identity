import { Show, createSignal } from "solid-js"
import { registerSW } from "virtual:pwa-register"

import styles from "./App.module.css"

import Earth from "../Sections/Earth"
import Topography from "../Sections/Topography"
import Waves from "../Sections/Waves"
import CentralDot from "../Sections/CentralDot"
import RecursiveTriangle from "../Sections/RecursiveTriangle"

import Share from "../Share"
import QR from "../QR"
import Refresh from "../Refresh"

const App = () => {
	const [needsRefresh, setNeedsRefresh] = createSignal(false)

	const updateSW = registerSW({
		onNeedRefresh() {
			setNeedsRefresh(true)
		},
		onOfflineReady() {},
	})

	const [sharing, setSharing] = createSignal(false)

	return (
		<>
			<Refresh
				needsRefresh={needsRefresh}
				setNeedsRefresh={setNeedsRefresh}
				updateSW={updateSW}
			/>
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
								<Waves />
								<CentralDot />
								<RecursiveTriangle />
							</svg>
						}
					>
						<QR />
					</Show>
				</div>
			</div>
		</>
	)
}

export default App
