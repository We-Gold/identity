import Earth from "../../Sections/Earth"
import Topography from "../../Sections/Topography"
import CentralDot from "../../Sections/CentralDot"

import styles from "./Home.module.css"
import IdentityManager from "./IdentityManager"

const Home = () => {
	return (
		<svg class={styles.mainSvg} viewBox="0 0 100 100">
			<Earth />
			<Topography />
			<CentralDot />
			<IdentityManager />
		</svg>
	)
}

export default Home
