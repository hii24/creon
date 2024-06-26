import React from 'react'
import { cn } from '@/utils'

export const ProfitabilityAndGrowth = ({ active }: { active: boolean }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='100'
		height='114'
		fill='none'
		viewBox='0 0 100 114'>
		<g clipPath='url(#clip0_2018_65)'>
			<path
				stroke='url(#paint0_linear_2018_65)'
				strokeDasharray='8 8'
				d='M14.029 93.496l-7.334-4.18.248-.434-3.667-2.09A5.5 5.5 0 01.5 82.014v-4.17H0v-8.337h.5v-8.338H0v-8.338h.5v-8.338H0v-8.338h.5v-4.169a5.5 5.5 0 012.776-4.778l3.667-2.09-.248-.434 7.334-4.18.247.434 7.334-4.18-.248-.434 7.333-4.18.248.434 7.333-4.18-.247-.434 7.333-4.18.248.434 3.666-2.09a5.5 5.5 0 015.448 0l3.666 2.09.248-.434 7.333 4.18-.247.434 7.333 4.18.248-.434 7.333 4.18-.248.434 7.334 4.18.247-.434 7.334 4.18-.248.434 3.667 2.09a5.5 5.5 0 012.776 4.778v4.17h.5v8.337h-.5v8.338h.5v8.338h-.5v8.338h.5v8.338h-.5v4.169a5.5 5.5 0 01-2.776 4.778l-3.667 2.09.248.434-7.334 4.18-.247-.434-7.334 4.18.248.434-7.333 4.18-.248-.434-7.333 4.18.247.434-7.333 4.18-.248-.434-3.666 2.09a5.501 5.501 0 01-5.448 0l-3.666-2.09-.248.434-7.333-4.18.247-.434-7.333-4.18-.248.434-7.333-4.18.248-.434-7.334-4.18-.247.434z'
			/>
			<path
				fill='#FFF'
				opacity='0.1'
				d='M16 41.52a6 6 0 013.073-5.237l28-15.647a6 6 0 015.854 0l28 15.647A6 6 0 0184 41.52v30.96a6 6 0 01-3.073 5.237l-28 15.647a6 6 0 01-5.854 0l-28-15.647A6 6 0 0116 72.48V41.52z'
			/>
			<path
				fill='#FFF'
				d='M22 45.037a6 6 0 013.094-5.25l22-12.178a6 6 0 015.812 0l22 12.178A6 6 0 0178 45.037v23.926a6 6 0 01-3.094 5.25l-22 12.178a6 6 0 01-5.812 0l-22-12.178A6 6 0 0122 68.963V45.037z'
				className={cn(
					'z-50 opacity-10 duration-300 ease-in-out',
					active && 'opacity-20'
				)}
			/>
			<path
				fill='#FFF'
				d='M54.273 45v1.714h2.468l-6.286 5.645-2.864-2.571-8.311 7.463 1.35 1.212 6.96-6.251 2.864 2.571 7.637-6.857v2.217H60V45h-5.727zm0 9.428V69H60V54.428h-5.727zm-7.637 3.43V69h5.728V57.857h-5.728zM39 60.427V69h5.727v-8.572H39z'
			/>
		</g>
		<defs>
			<linearGradient
				id='paint0_linear_2018_65'
				x1='0'
				x2='100'
				y1='57'
				y2='57'
				gradientUnits='userSpaceOnUse'>
				<stop stopColor='#3D8BFF' />
				<stop offset='1' stopColor='#AB23FF' />
			</linearGradient>
			<clipPath id='clip0_2018_65'>
				<path fill='#fff' d='M0 0H100V114H0z' />
			</clipPath>
		</defs>
	</svg>
)
