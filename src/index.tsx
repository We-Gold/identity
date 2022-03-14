/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
import App from "./App"

import { TimestampProvider } from "./lib/timestamp"

render(
	() => (
		<TimestampProvider>
			<App />
		</TimestampProvider>
	),
	document.getElementById("root") as HTMLElement
)
