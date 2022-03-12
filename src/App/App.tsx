import styles from "./App.module.css"

import Earth from "../Sections/Earth"
import Topography from "../Sections/Topography"
import Download from "../Download"

const App = () => {
	return (
		<div class={styles.mainArea}>
			<Download class={styles.download} svgClass={styles.mainSvg} />
			<div class={styles.renderBox}>
				<svg class={styles.mainSvg} viewBox="0 0 100 100">
					<Earth />
					<Topography />
				</svg>
			</div>
		</div>
	)
}

export default App
