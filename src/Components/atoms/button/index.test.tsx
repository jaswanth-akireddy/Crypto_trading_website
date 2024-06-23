import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonComponent from './index'
test('renders button', () => {
  render(
    <ButtonComponent onClick={() => {}} textColor={'white'} label={'Button'}></ButtonComponent>
  )
  const element = screen.getByTestId('button')
  expect(element).toBeInTheDocument()
  fireEvent.click(element)
})