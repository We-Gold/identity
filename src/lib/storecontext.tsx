import { createContext, useContext } from "solid-js"
import { createLocalStore } from "./store"
import { SetStoreFunction, Store } from "solid-js/store"

interface StoreType {
	state: Store<StoreState>
	setState: SetStoreFunction<StoreState>
	setIdentity: Function
	isIdentityPresent: Function
}

const StoreContext = createContext<StoreType>()

interface StoreState {
	identities: {
		[key: string]: boolean
	}
}

export const StoreProvider = (props: any) => {
	const initState: StoreState = {
		identities: {},
	}

	const [state, setState] = createLocalStore(initState)

	const setIdentity = (name: string, present: boolean) => {
		setState({
			identities: {
				...state.identities,
				[name]: present,
			},
		})
	}

	const isIdentityPresent = (name: string): boolean | undefined => {
		return state.identities[name]
	}

	const value = {
		state,
		setState,
		setIdentity,
		isIdentityPresent,
	}

	return (
		<StoreContext.Provider value={value}>
			{props.children}
		</StoreContext.Provider>
	)
}

export const useStore = (): StoreType => {
	return useContext(StoreContext)!
}
