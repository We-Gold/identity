import AddPage from "../Pages/AddPage"
import Home from "../Pages/Home"
import QR from "../Pages/QR"

import { usePages } from "../lib/pages"
import { JSXElement } from "solid-js"

interface Pages {
	[key: number]: JSXElement
}

const Page = () => {
	const { page, pages } = usePages()

	const pageElements: Pages = {}

	pageElements[pages.home] = <Home />
	pageElements[pages.share] = <QR />
	pageElements[pages.add] = <AddPage />

	return <>{pageElements[page()]}</>
}

export default Page
