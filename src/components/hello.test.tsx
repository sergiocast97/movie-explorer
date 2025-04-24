import { render, screen } from '@testing-library/react'
import Hello from './hello'

describe('App tests', () => {
  it('should render the title', () => {
    render(<Hello />)
    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Hello')
  })
})
