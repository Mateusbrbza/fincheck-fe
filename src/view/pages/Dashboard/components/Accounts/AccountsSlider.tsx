import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useSwiper } from 'swiper/react'

interface AccountsSliderProps {
  isBeginning: boolean
  isEnd: boolean
}

export default function AccountsSlider({
  isBeginning,
  isEnd,
}: AccountsSliderProps) {
  const swiper = useSwiper()

  return (
    <div>
      <button
        className="py-3 pl-2.5 pr-3.5 rounded-full hover:bg-black/5 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        className="py-3 pl-2.5 pr-3.5 rounded-full hover:bg-black/5 transition-colors"
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  )
}
