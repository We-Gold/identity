import { doodles } from "../../../lib/identities"
// import { doesUserPreferenceExist, getUserPreference } from "../../../lib/store"

import Water from "../../../Sections/Water"
import Life from "../../../Sections/Life"
import Land from "../../../Sections/Land"
import { For, JSXElement, Show } from "solid-js"
import { useStore } from "../../../lib/storecontext"

interface Element {
	[key: string]: JSXElement
}

const IdentityManager = () => {
	const { isIdentityPresent } = useStore()

	const doodleElements: Element = {
		Life: <Life />,
		Water: <Water />,
		Land: <Land />,
	}

	const displayIdentity = (name: string) => isIdentityPresent(name) ?? true

	return (
		<For each={doodles}>
			{(doodle) => (
				<Show when={displayIdentity(doodle.name)}>
					{doodleElements[doodle.name]}
				</Show>
			)}
		</For>
	)
}

export default IdentityManager
