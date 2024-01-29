import { Swiper, SwiperSlide } from 'swiper/react'
import { ChevronDownIcon } from '@radix-ui/react-icons'
//Icons
import { FilterIcon } from '@/view/components/icons/FilterIcon'
import { TransactionsIcon } from '@/view/components/icons/TransactionsIcon'
import { CategoryIcon } from '@/view/components/icons/categories/CategoryIcon'
// Utils
import { MONTHS } from '@/app/config/constants'
import formatCurrency from '@/app/utils/formatCurrency'
// Components
import { SliderOption } from './SliderOption'
import { SliderNavigation } from './SliderNavigation'
import { useTransactionsController } from './useTransactionsController'
import { cn } from '@/app/utils/cn'

export default function Transactions() {
  const { areValuesVisible } = useTransactionsController()

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      <header>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900 " />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6">
          <Swiper slidesPerView={3} centeredSlides>
            <SliderNavigation />

            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="expense" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">
                {' '}
                Al'moco
              </strong>
              <span className="text-sm text-gray-600">12/12/23</span>
            </div>
          </div>

          <span
            className={cn(
              'text-red-700 tracking-[-0.5px] font-medium',
              !areValuesVisible && 'blur-sm',
            )}
          >
            - {formatCurrency(123)}
          </span>
        </div>
      </div>
    </div>
  )
}
