import 'react'
import { Button } from '@/components/ui/button'

export function App() {
  return (
    <>
      <h1>link button</h1>
      <Button as={'a'} variant={'primary'} href={'/link'} />

      <h1>classic button</h1>
      <Button variant={'primary'} as={'button'} />
    </>
  )
}
