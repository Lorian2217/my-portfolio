import type { Metadata } from 'next';
import InteractiveComponent from './interactive-component'

export const metadata: Metadata = {
  title: 'Список проектов',
  description: 'Список реализованных проектов по разным CMS',
}

export default function Home() {
  return <InteractiveComponent />
}