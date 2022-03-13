/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
import App from "./App"

import { TimestampProvider } from "./lib/timestamp"

// Register the service worker for creating a PWA
if ("serviceWorker" in navigator) {
	// Use the window load event to keep the page load performant
	window.addEventListener("load", () => {
		navigator.serviceWorker.register("./sw.js", { scope: "./" })
	})
}

render(
	() => (
		<TimestampProvider>
			<App />
		</TimestampProvider>
	),
	document.getElementById("root") as HTMLElement
)
