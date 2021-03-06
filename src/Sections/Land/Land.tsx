import { useTimestamp } from "../../lib/timestamp"
import { calculatePercentOfRange } from "../../lib/timerange"

import styles from "./Land.module.css"
import { Show } from "solid-js"

const Land = () => {
	const timestamp = useTimestamp()

	const displayPercent = () =>
		calculatePercentOfRange(timestamp(), 10000, 50000, {
			factor: 0.7,
			fullLoop: true,
		})

	const display = () => displayPercent() > 0

	return (
		<Show when={display()} fallback={<></>}>
			<g fill="transparent">
				<path
					d="M11.6146 93.3943C14.2865 94.1138 19.5068 93.9339 19.0136 87.4577"
					stroke="black"
					stroke-opacity={displayPercent()}
					stroke-linecap="round"
					class={styles.path4}
				/>
				<path
					d="M29.3209 87.2063C23.1551 87.5661 19.1326 87.2063 8.03413 87.2063C-3.06433 87.2063 16.6663 74.7936 9.26729 73.7142C1.86832 72.6348 12.5557 91.8836 12.3502 98"
					stroke="black"
					stroke-opacity={displayPercent()}
					stroke-linecap="round"
					class={styles.path5}
				/>
				<path
					d="M12.9216 76.9097L9.7632 80.9444C9.70455 81.0193 9.7068 81.1252 9.7686 81.1975L12.927 84.896C13.0477 85.0374 13.2791 84.952 13.2791 84.7661V77.033C13.2791 76.8428 13.0388 76.76 12.9216 76.9097Z"
					stroke="black"
					stroke-opacity={displayPercent()}
					stroke-linecap="round"
					class={styles.path6}
				/>
				<path
					d="M13.2791 80.7737C14.6639 82.1712 17.7463 84.1276 18.9975 80.7737C20.5615 76.5813 15.6251 76.3246 15.6251 78.8914C15.6251 81.4582 15.7392 84.8092 15.6251 87.1478"
					stroke="black"
					stroke-opacity={displayPercent()}
					stroke-linecap="round"
					class={styles.path7}
				/>
			</g>
		</Show>
	)
}

export default Land
