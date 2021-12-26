import React from 'react'
import { Button } from 'reactstrap'
import { colortext } from 'export'
import Ripples from 'react-ripples'

export const Submit = ({
  label = 'Submit',
  handleClick = () => {},
  disabled = false
}) => {
  return (
    <Button
      disabled={disabled}
      color="warning"
      className="button-label login-button"
      onClick={handleClick}
      style={{
        color: { colortext }
      }}
    >
      {label}
    </Button>
  )
}
export const Reset = ({
  label = 'Reset',
  handleClick = () => {},
  disabled = false
}) => {
  return (
    <Button
      color={disabled ? 'secondary' : ''}
      type={disabled ? 'reset' : ''}
      disabled={disabled}
      className="button-label register-button"
      onClick={handleClick}
    >
      {label}
    </Button>
  )
}

export const SubmitMob = ({
  label = 'Submit',
  handleClick = () => {},
  disabled = false
}) => {
  return (
    <Ripples color="var(--warning)" className="different-ripple">
      <Submit label={label} handleClick={handleClick} />
    </Ripples>
  )
}
export const ResetMob = ({
  label = 'Reset',
  handleClick = () => {},
  disabled = false
}) => {
  return (
    <Ripples color="var(--warning)" className="different-ripple">
      <Reset label={label} handleClick={handleClick} />
    </Ripples>
  )
}
