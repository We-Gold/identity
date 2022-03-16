import { Show } from "solid-js"
import { usePages } from "../../lib/pages"

const FILL_COLOR = "rgba(0,0,0,1)"

const Add = (props: any) => {
	const { page, setPage, pages } = usePages()

	return (
		<Show
			when={page() == pages.add}
			fallback={
				<a class={props.class} onClick={() => setPage(pages.add)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill={FILL_COLOR}
					>
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
					</svg>
				</a>
			}
		>
			<a class={props.class} onClick={() => setPage(pages.home)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill={FILL_COLOR}
				>
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				</svg>
			</a>
		</Show>
	)
}

export default Add
