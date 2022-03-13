import { makeNoise3D } from "fast-simplex-noise"
import Rand from "rand-seed"

// Make a 3D simplex noise generator to sync noise by timestamp between devices
const randomNumberGenerator = new Rand("identity")
const getRandom = () => randomNumberGenerator.next()
const noiseGenerator = makeNoise3D(getRandom)

// Create a wrapper for the global noise generator
export const getNoise = (x: number, y: number, time: number) =>
	noiseGenerator(x, y, time)
