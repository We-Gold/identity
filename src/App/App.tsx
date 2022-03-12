import styles from "./App.module.css"

import Earth from "../Sections/Earth"
import Topography from "../Sections/Topography"

const App = () => {
	return (
		<div class={styles.mainArea}>
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
