import { cn } from '@/app/utils/cn'
import { useSwiper } from 'swiper/react'

interface SilderOptionProps {
  isActive: boolean
  month: string
  index: number
}

export function SliderOption({ isActive, month, index }: SilderOptionProps) {
  const swiper = useSwiper()

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5px] font-medium',
        isActive && 'bg-white',
      )}
    >
      {month}
    </button>
  )
}
