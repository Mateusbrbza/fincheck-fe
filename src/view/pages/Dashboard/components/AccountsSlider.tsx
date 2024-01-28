import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useSwiper } from 'swiper/react'

export default function AccountsSlider() {
  const swiper = useSwiper()
  console.log(swiper)

  return (
    <div>
      <button
        className="py-3 pl-2.5 pr-3.5 rounded-full hover:bg-black/5 transition-colors disabled:opacity-40"
        onClick={() => swiper.slidePrev()}
      >
        <ChevronLeftIcon className="text-white w-6 h-6" />
      </button>
      <button
        className="py-3 pl-2.5 pr-3.5 rounded-full hover:bg-black/5 transition-colors"
        onClick={() => swiper.slideNext()}
      >
        <ChevronRightIcon className="text-white w-6 h-6" />
      </button>
    </div>
  )
}
