import { createSignal } from "solid-js"
import { registerSW } from "virtual:pwa-register"

import styles from "./App.module.css"

import Share from "../Buttons/Share"
import Refresh from "../Buttons/Refresh"
import Add from "../Buttons/Add"
import Page from "../Page"

const App = () => {
	const [needsRefresh, setNeedsRefresh] = createSignal(false)

	const updateSW = registerSW({
		onNeedRefresh() {
			setNeedsRefresh(true)
		},
		onOfflineReady() {},
	})

	return (
		<>
			<Refresh
				needsRefresh={needsRefresh}
				setNeedsRefresh={setNeedsRefresh}
				updateSW={updateSW}
			/>
			<div class={styles.mainArea}>
				<Share class={styles.share} svgClass={styles.mainSvg} />
				<Add class={styles.add} />
				<div class={styles.renderBox}>
					<Page />
				</div>
			</div>
		</>
	)
}

export default App
