import { createSignal, createContext, useContext, Accessor } from "solid-js"

const TimestampContext = createContext<Accessor<number>>()

export const TimestampProvider = (props: any) => {
	const [timestamp, setTimestamp] = createSignal(Date.now())

	const updateTimestamp = () => {
		setTimestamp(Date.now())

		requestAnimationFrame(updateTimestamp)
	}

	requestAnimationFrame(updateTimestamp)

	return (
		<TimestampContext.Provider value={timestamp}>
			{props.children}
		</TimestampContext.Provider>
	)
}

export const useTimestamp = (): Accessor<number> => {
	return useContext(TimestampContext)!
}
