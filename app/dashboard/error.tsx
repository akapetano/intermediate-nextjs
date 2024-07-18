'use client'
import { Button } from '@nextui-org/react'

const HomeError = ({ error, reset }) => {
  return (
    <div>
      <h2>Something bad happened :(</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  )
}

export default HomeError
