/* @refresh reload */
import { render } from "solid-js/web"

import "./index.css"
import App from "./App"

import { TimestampProvider } from "./lib/timestamp"
import { PagesProvider } from "./lib/pages"
import { StoreProvider } from "./lib/storecontext"

render(
	() => (
		<PagesProvider>
			<TimestampProvider>
				<StoreProvider>
					<App />
				</StoreProvider>
			</TimestampProvider>
		</PagesProvider>
	),
	document.getElementById("root") as HTMLElement
)
