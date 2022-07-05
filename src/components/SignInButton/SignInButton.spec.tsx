import { render } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { SignInButton } from '.'

jest.mock('next-auth/client')


describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([null, false]);

    const { getByText } = render(
      <SignInButton />
    )

    expect(getByText('Sign In with Github')).toBeInTheDocument();
  })

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce([
      { user: { name: 'John Doe', email: 'example@johndoe.com' }, expires: 'fake-expires' }
      , false]);

    const { getByText } = render(
      <SignInButton />
    )

    expect(getByText('John Doe')).toBeInTheDocument();
  })
})

