import { Inter } from 'next/font/google'
import Calculator from '@/components/Calculator'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-center px-24 py-10">
      <h1 className='text-4xl font-bold'>Cleber - Calculator</h1>
      <h2 className='font-bold mb-4 text-gray-700'>Ian Javier Duran Roman</h2>
      <Calculator/>
    </main>
  )
}
