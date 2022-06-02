export const setStore = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStore = (key: string) => {
  const val = localStorage.getItem(key)
  if (val) {
    return JSON.parse(val)
  }
  return null
}

export const removeStore = (key: string): void => {
  localStorage.removeItem(key)
}

// token
export const TOKEN_KEY = 'token'

export const setToken = (token: string): void => {
  setStore(TOKEN_KEY, token)
}

export const getToken = () => {
  return getStore(TOKEN_KEY)
}

export const removeToken = () => {
  removeStore(TOKEN_KEY)
}