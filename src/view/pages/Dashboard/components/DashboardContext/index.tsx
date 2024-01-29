import { createContext, useCallback, useState } from 'react'

interface DashboardContextProps {
  areValuesVisible: boolean
  toggleValuesVisibility(): void
}

export const DashboardContext = createContext({} as DashboardContextProps)

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true)

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible(prevState => !prevState)
  }, [])

  return (
    <DashboardContext.Provider
      value={{ areValuesVisible, toggleValuesVisibility }}
    >
      {children}
    </DashboardContext.Provider>
  )
}
