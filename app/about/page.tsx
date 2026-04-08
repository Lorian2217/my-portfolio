import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Подробнее обо мне',
  description: 'Описание моего пути в it-индустрию',
}

export default function Home() {
  return <InteractiveComponent />
}