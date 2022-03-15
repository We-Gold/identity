import { createEffect } from "solid-js"
import { createStore, SetStoreFunction, Store } from "solid-js/store"

export const createLocalStore = <T>(
	initState: T
): [Store<T>, SetStoreFunction<T>] => {
	const [state, setState] = createStore(initState)
	if (localStorage.preferences) setState(JSON.parse(localStorage.preferences))
	createEffect(() => (localStorage.preferences = JSON.stringify(state)))
	return [state, setState]
}
