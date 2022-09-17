import React from 'react'
import { Button } from './styles'

export const SubmitButton = ({ children, disbled, onClick }) => {
  return <Button onClick={onClick} disabled={disbled}>{children}</Button>
}
