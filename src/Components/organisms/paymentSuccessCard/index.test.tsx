import React from 'react'
import { render, screen } from '@testing-library/react'
import PaymentSuccessCard from '.'
import '@testing-library/jest-dom'
it('should render the Success buy card', async () => {
  render(<PaymentSuccessCard price="" successType="sell" />)
  const wrapper = screen.getByTestId('transaction-success-container')
  expect(wrapper).toBeInTheDocument()
})
it('should render the Success sell card', async () => {
  render(<PaymentSuccessCard price="" successType="buy" />)
  const wrapper = screen.getByTestId('transaction-success-container')
  expect(wrapper).toBeInTheDocument()
})