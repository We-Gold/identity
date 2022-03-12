import { useTimestamp } from "../lib/timestamp"

const Download = (props: any) => {
	const timestamp = useTimestamp()

	return (
		<a
			class={props.class}
			onClick={() => downloadSVG(`.${props.svgClass}`, timestamp())}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="black"
			>
				<path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z" />
			</svg>
		</a>
	)
}

const downloadSVG = (selector: string, timestamp: number) => {
	// Create an empty svg if the element has been mistakenly removed from the page
	const svgElement =
		document.querySelector(selector) ?? document.createElement("svg")

	// Create a downloadable blob from the given svg
	const svgData = svgElement.outerHTML
	const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
	const svgUrl = URL.createObjectURL(svgBlob)
	const downloadLink = document.createElement("a")

	// Download the svg image
	downloadLink.href = svgUrl
	downloadLink.download = `identity-${timestamp}.svg`
	document.body.appendChild(downloadLink)
	downloadLink.click()
	document.body.removeChild(downloadLink)
}

export default Download
