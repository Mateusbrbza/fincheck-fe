import { useWindowWidth } from '@/app/hooks/useWindowWidth'
import { useState } from 'react'
import { useDashboard } from '../DashboardContext/useDashboard'

export function useAccountsController() {
  const windowWidth = useWindowWidth()
  const { areValuesVisible, toggleValuesVisibility } = useDashboard()

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  })

  return {
    windowWidth,
    sliderState,
    setSliderState,
    areValuesVisible,
    toggleValuesVisibility,
  }
}
