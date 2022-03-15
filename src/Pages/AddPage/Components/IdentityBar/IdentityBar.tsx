import { JSXElement } from "solid-js"
import styles from "./IdentityBar.module.css"
import PositionButton from "./PositionButton"

type positionOption = 0 | 1 | 2 | 3 | 4

interface IdentityBarProps {
	svg: JSXElement
	name: string
	position: positionOption // goes counterclockwise from top right to bottom right
	defaultPresent: boolean
}

const IdentityBar = (props: IdentityBarProps) => {
	return (
		<div class={styles.barBody}>
			<div class={`${styles.barSvg} ${styles.centerChild}`}>
				{props.svg}
			</div>
			<p>{props.name}</p>
			<PositionButton
				name={props.name}
				position={props.position}
				defaultPresent={props.defaultPresent}
			/>
		</div>
	)
}

export default IdentityBar
