import { useState } from 'react'

const useLogin = () => {
  const [url, setUrl] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [isLoading, setLoading] = useState<false>(false);

  const getLoginUrl = () => {

  }

  const login = () => {

  }

  return {url, isLoading}
}

export default useLogin