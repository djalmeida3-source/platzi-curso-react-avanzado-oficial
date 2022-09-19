import React from 'react'
import { Button } from './styles'
import PropTypes from 'prop-types'

export const SubmitButton = ({ children, disbled, onClick }) => {
  return <Button onClick={onClick} disabled={disbled}>{children}</Button>
}

SubmitButton.propTypes = {
  disabled: PropTypes.bool,
  onclick: PropTypes.func,
  children: PropTypes.node.isRequired
}
