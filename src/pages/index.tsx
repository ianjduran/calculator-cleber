import { Inter } from 'next/font/google'
import Calculator from '@/components/Calculator'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-center px-24 py-10">
      <h1 className='text-4xl mb-4 font-semibold'>Javascript Calculator</h1>
      <Calculator/>
    </main>
  )
}
