import 'react'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <>
      <h1>link button</h1>
      <Button as={'a'} variant={'link'} href={'/link'}>
        текст
      </Button>

      <h1>classic button</h1>
      <Button variant={'primary'} as={'button'}>
        текст
      </Button>

      <h1>typography large</h1>
      <Typography as={'span'} variant={'large'}>
        test
      </Typography>

      <h1>typography link</h1>
      <Typography as={'a'} variant={'link1'}>
        test
      </Typography>
    </>
  )
}
