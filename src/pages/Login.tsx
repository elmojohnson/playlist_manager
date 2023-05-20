import React from 'react'
import useLogin from '../hooks/useLogin'

const Login = () => {
  const {url, isLoading} = useLogin();

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <a href={url}>Login</a>
    </div>
  )
}

export default Login