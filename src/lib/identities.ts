interface Identity {
	name: string
	position: positionOption
	defaultPresent: boolean
}

type positionOption = 0 | 1 | 2 | 3 | 4

export const doodles: Identity[] = [
	{ name: "Life", position: 4, defaultPresent: true },
	{ name: "Water", position: 2, defaultPresent: true },
	{ name: "Land", position: 3, defaultPresent: true },
]
