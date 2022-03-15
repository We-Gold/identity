import { Show } from "solid-js"
import { usePages } from "../../lib/pages"

const FILL_COLOR = "rgba(0,0,0,1)"

const Share = (props: any) => {
	const { page, setPage, pages } = usePages()

	return (
		<Show
			when={page() === pages.share}
			fallback={
				<a class={props.class} onClick={() => setPage(pages.share)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill={FILL_COLOR}
					>
						<path d="M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z" />
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

export default Share
