import { createSignal, createContext, useContext, Accessor } from "solid-js"

const TimestampContext = createContext<Accessor<number>>()

const REFRESH_RATE = 10 // milliseconds

export const TimestampProvider = (props: any) => {
	const [timestamp, setTimestamp] = createSignal(Date.now())

	setInterval(() => setTimestamp(Date.now()), REFRESH_RATE)

	return (
		<TimestampContext.Provider value={timestamp}>
			{props.children}
		</TimestampContext.Provider>
	)
}

export const useTimestamp = (): Accessor<number> => {
	return useContext(TimestampContext)!
}
