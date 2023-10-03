import { Space_Grotesk as spaceGrotesk } from 'next/font/google'

export const font = spaceGrotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-grotesk' //de esta forma se puede usar como variable en css
})
