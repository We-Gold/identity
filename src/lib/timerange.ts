export const calculatePercentOfRange = (
	timestamp: number,
	start: number,
	end: number,
	{ factor = 1, fullLoop = false } = {}
) => {
	let percent = 0

	if (start === 0) percent = (timestamp % end) / (end - start)
	else {
		const timestampRegion =
			timestamp % Math.pow(10, getPowerOfTen(start) + 1)

		percent =
			start <= timestampRegion && timestampRegion <= end
				? (timestampRegion - start) / (end - start)
				: 0
	}

	return fullLoop
		? (percent <= 0.5 ? percent * 2 : (1 - percent) * 2) * factor
		: percent * factor
}

const getPowerOfTen = (givenNumber: number) =>
	Math.floor(Math.log10(givenNumber))
