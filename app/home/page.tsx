import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Данила Мохнаткин',
  description: 'Портфолио Веб-разработчика Мохнаткина Данилы',
}

export default function Home() {
  return <InteractiveComponent />
}