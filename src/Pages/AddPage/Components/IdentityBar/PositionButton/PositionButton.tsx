import styles from "../IdentityBar.module.css"
import { useStore } from "../../../../../lib/storecontext"

type positionOption = 0 | 1 | 2 | 3 | 4

const svgPositions = {
	0: { x: 0.8, y: 0.8 },
	1: { x: 7, y: 0 },
	2: { x: 0, y: 0 },
	3: { x: 0, y: 7 },
	4: { x: 7, y: 7 },
}

interface PositionButtonProps {
	name: string
	position: positionOption // goes counterclockwise from top right to bottom right
	defaultPresent: boolean
}

const PositionButton = (props: PositionButtonProps) => {
	const { isIdentityPresent, setIdentity } = useStore()

	const isPresent = () =>
		isIdentityPresent(props.name) ?? props.defaultPresent

	const positionX = svgPositions[props.position].x
	const positionY = svgPositions[props.position].y

	const width = props.position != 0 ? 10 : 16

	const showPlus = () => !isPresent()
	const showMinus = () => isPresent()

	// Update the preference for the identity in local storage
	const updatePresent = () => setIdentity(props.name, !isPresent())

	return (
		<div class={`${styles.positionSvg} ${styles.centerChild}`}>
			<svg
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				onClick={() => updatePresent()}
				class={styles.toggleButton}
			>
				<rect width="16" height="16" rx="1" fill="#C4C4C4" />
				<svg
					x={positionX}
					y={positionY}
					width={width}
					height={width}
					viewBox="0 0 11 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_5_174)">
						<rect
							x="1"
							y="1"
							width="8"
							height="8"
							rx="1"
							fill="white"
						/>
						<svg
							id="minus"
							x="3"
							y="4"
							display={showMinus() ? "block" : "none"}
							width="4"
							height="2"
							viewBox="0 0 4 2"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 1.28571H2.28571H1.71429H0V0.714279H1.71429H2.28571H4V1.28571Z"
								fill="black"
							/>
						</svg>

						<svg
							display={showPlus() ? "block" : "none"}
							id="plus"
							x="3"
							y="3"
							width="4"
							height="4"
							viewBox="0 0 4 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 2.28571H2.28571V4H1.71429V2.28571H0V1.71429H1.71429V0H2.28571V1.71429H4V2.28571Z"
								fill="black"
							/>
						</svg>
					</g>
					<defs>
						<filter
							id="filter0_d_5_174"
							x="0.1"
							y="0.1"
							width="10"
							height="10"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood
								flood-opacity="0"
								result="BackgroundImageFix"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
								result="hardAlpha"
							/>
							<feOffset dx="0.1" dy="0.1" />
							<feGaussianBlur stdDeviation="0.5" />
							<feComposite in2="hardAlpha" operator="out" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow_5_174"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow_5_174"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</svg>
		</div>
	)
}

export default PositionButton
