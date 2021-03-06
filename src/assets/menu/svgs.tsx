import { JSXElement } from "solid-js"

interface svgObject {
	[key: string]: JSXElement
}

export const svgs: svgObject = {
	Water: (
		<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.92169 5.638C3.25444 6.09836 3.33355 6.62259 3.66956 7.10259C3.73906 7.20175 3.77672 7.32304 3.85656 7.41422C3.89064 7.45333 3.94215 7.4735 3.98114 7.50763C4.09025 7.55791 4.11668 7.68356 4.19931 7.75692C4.34356 7.88508 4.43206 7.89452 4.60441 7.97503C4.97722 8.149 5.35988 8.36007 5.7574 8.4736C5.81813 8.49092 5.88366 8.48699 5.94433 8.50488C6.02964 8.52947 6.10753 8.57684 6.19362 8.59829C6.67358 8.7183 7.17296 8.6997 7.6582 8.78529C8.34364 8.90619 9.155 9.12586 9.74604 9.502C9.92337 9.6148 10.0663 9.79106 10.2134 9.93828C10.5042 10.2291 10.7313 10.5598 10.9925 10.8731C11.0704 10.9667 11.1211 10.9745 11.1794 11.0912C11.209 11.1501 11.2124 11.2194 11.2418 11.2782C11.3067 11.4082 11.441 11.4761 11.5223 11.5898C11.6646 11.789 11.7034 11.8021 11.865 11.9637C11.912 12.0107 11.9403 12.075 11.9896 12.1196C12.4453 12.5296 13.2299 12.8554 13.8282 12.9609C13.9 12.9743 14.2141 13.0045 14.2956 13.0233C14.3596 13.0379 14.4177 13.0758 14.4825 13.0857C14.5544 13.0963 14.6281 13.0813 14.7007 13.0857C15.1577 13.1159 15.6127 13.117 16.0718 13.117"
				stroke="black"
				stroke-width="2.53795"
				stroke-linecap="round"
			/>
			<path
				d="M6.15771 1.20581C6.45878 1.62232 6.53035 2.09663 6.83436 2.53091C6.89724 2.62064 6.93131 2.73037 7.00354 2.81287C7.03438 2.84825 7.08098 2.8665 7.11627 2.89738C7.21499 2.94288 7.2389 3.05656 7.31365 3.12293C7.44417 3.23888 7.52424 3.24742 7.68017 3.32026C8.01748 3.47767 8.3637 3.66864 8.72335 3.77135C8.7783 3.78702 8.83759 3.78347 8.89248 3.79966C8.96967 3.8219 9.04014 3.86476 9.11803 3.88417C9.55228 3.99275 10.0041 3.97592 10.4431 4.05335C11.0633 4.16274 11.7974 4.36149 12.3321 4.70181C12.4926 4.80387 12.6219 4.96334 12.755 5.09654C13.0181 5.35964 13.2236 5.65885 13.4599 5.94236C13.5303 6.02702 13.5762 6.0341 13.629 6.13969C13.6558 6.19292 13.6588 6.25565 13.6855 6.30888C13.7441 6.42645 13.8657 6.48787 13.9392 6.59078C14.068 6.77104 14.103 6.78281 14.2493 6.9291C14.2918 6.97156 14.3174 7.02979 14.362 7.07008C14.7743 7.4411 15.4842 7.7358 16.0255 7.83131C16.0905 7.84345 16.3747 7.87074 16.4484 7.88777C16.5063 7.90092 16.5589 7.93529 16.6175 7.94423C16.6825 7.95383 16.7493 7.94024 16.8149 7.94423C17.2284 7.97153 17.64 7.97255 18.0554 7.97255"
				stroke="black"
				stroke-width="2.29624"
				stroke-linecap="round"
			/>
			<path
				d="M1.40771 11.6558C1.70878 12.0723 1.78035 12.5466 2.08436 12.9809C2.14724 13.0706 2.18131 13.1804 2.25354 13.2629C2.28438 13.2983 2.33098 13.3165 2.36627 13.3474C2.46499 13.3929 2.4889 13.5066 2.56365 13.5729C2.69417 13.6889 2.77424 13.6974 2.93017 13.7703C3.26748 13.9277 3.6137 14.1186 3.97335 14.2214C4.0283 14.237 4.08759 14.2335 4.14248 14.2497C4.21967 14.2719 4.29014 14.3148 4.36803 14.3342C4.80228 14.4428 5.2541 14.4259 5.69313 14.5034C6.31328 14.6128 7.04738 14.8115 7.58213 15.1518C7.74257 15.2539 7.87187 15.4134 8.00501 15.5465C8.26811 15.8097 8.47359 16.1089 8.70986 16.3924C8.78032 16.477 8.82622 16.4841 8.87899 16.5897C8.90578 16.6429 8.90882 16.7057 8.93545 16.7589C8.99414 16.8765 9.11566 16.9379 9.1892 17.0408C9.318 17.221 9.35303 17.2328 9.49931 17.3791C9.54177 17.4216 9.5674 17.4798 9.61203 17.5201C10.0243 17.8911 10.7342 18.1858 11.2755 18.2813C11.3405 18.2935 11.6247 18.3208 11.6984 18.3378C11.7563 18.3509 11.8089 18.3853 11.8675 18.3942C11.9325 18.4038 11.9993 18.3903 12.0649 18.3942C12.4784 18.4215 12.89 18.4226 13.3054 18.4226"
				stroke="black"
				stroke-width="2.29624"
				stroke-linecap="round"
			/>
		</svg>
	),
	Life: (
		<svg viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M1.96509 22.4008H21.9651"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M21.9651 22.4008V2.40085"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M1.96509 22.4009L7.77461 8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 8.21039L21.9651 22.4009"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M21.9651 22.4009L7.7746 8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 8.21037L21.9651 2.40085"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M1.96509 22.4009L7.77461 17.7342"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 17.7342V8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 8.21039V17.7342"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 17.7342L21.9651 22.4009"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M21.9651 22.4009L17.2984 8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M17.2984 8.21039H7.7746"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 8.21039H17.2984"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M17.2984 8.21037L21.9651 2.40085"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M1.96509 22.4008L1.01724 10.9768"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M1.01724 10.9768L7.77461 17.7342"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.77461 17.7342L1.01724 10.9768"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M1.01724 10.9768L7.77461 8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 8.21039L10.541 10.9768"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M10.541 10.9768L7.7746 17.7342"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 17.7342L10.541 10.9768"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M10.541 10.9768L21.9651 22.4008"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M21.9651 22.4008L10.541 10.9768"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M10.541 10.9768L17.2984 8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M17.2984 8.21039L10.541 10.9768"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M10.541 10.9768L7.7746 8.21039"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M7.7746 8.21037L10.541 1.453"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M10.541 1.453L17.2984 8.21037"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M17.2984 8.21037L10.541 1.453"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
			<path
				d="M10.541 1.453L21.9651 2.40085"
				stroke="black"
				stroke-opacity="0.4"
				stroke-linecap="round"
			/>
		</svg>
	),
	Land: (
		<svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M7.61462 20.3943C10.2865 21.1138 15.5068 20.9339 15.0136 14.4577"
				stroke="black"
				stroke-opacity="0.7"
				stroke-linecap="round"
			/>
			<path
				d="M25.3209 14.2063C19.1551 14.5661 15.1326 14.2063 4.03413 14.2063C-7.06433 14.2063 12.6663 1.79358 5.26729 0.714195C-2.13168 -0.36519 8.55573 18.8836 8.3502 25"
				stroke="black"
				stroke-opacity="0.7"
				stroke-linecap="round"
			/>
			<path
				d="M8.92162 3.90967L5.7632 7.94437C5.70455 8.0193 5.7068 8.12517 5.7686 8.19753L8.92702 11.896C9.04772 12.0374 9.27911 11.952 9.27911 11.7661V4.03295C9.27911 3.84284 9.03881 3.75997 8.92162 3.90967Z"
				stroke="black"
				stroke-opacity="0.7"
				stroke-linecap="round"
			/>
			<path
				d="M9.27911 7.7737C10.6639 9.17116 13.7463 11.1276 14.9975 7.7737C16.5615 3.58132 11.6251 3.32465 11.6251 5.8914C11.6251 8.45816 11.7392 11.8092 11.6251 14.1478"
				stroke="black"
				stroke-opacity="0.7"
				stroke-linecap="round"
			/>
		</svg>
	),
}
