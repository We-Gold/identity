import { svgs } from "../../assets/menu/svgs"
import styles from "./AddPage.module.css"
import IdentityBar from "./Components/IdentityBar"

import { doodles } from "../../lib/identities"
import { For } from "solid-js"

const AddPage = () => {
	return (
		<div class={styles.parent}>
			<div class={styles.page}>
				{/* Identity header: Doodles */}
				<For each={doodles} fallback={<></>}>
					{(doodle) => (
						<IdentityBar
							svg={svgs[doodle.name]}
							name={doodle.name}
							position={doodle.position}
							defaultPresent={doodle.defaultPresent}
						/>
					)}
				</For>
			</div>
		</div>
	)
}

export default AddPage
