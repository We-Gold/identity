import { createSignal, createContext, useContext, Accessor } from "solid-js"

interface PageList {
	[key: string]: number
}

interface PagesStore {
	page: Accessor<number>
	setPage: Function
	pages: PageList
}

// Define the available pages in the app
const pages = {
	home: 0,
	share: 1,
	add: 2,
}

const PagesContext = createContext<PagesStore>()

export const PagesProvider = (props: any) => {
	const [page, setPage] = createSignal(pages.home)

	const store = { page, setPage, pages }

	return (
		<PagesContext.Provider value={store}>
			{props.children}
		</PagesContext.Provider>
	)
}

export const usePages = (): PagesStore => {
	return useContext(PagesContext)!
}
