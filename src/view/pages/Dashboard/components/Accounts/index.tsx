import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

// Components
import AccountCard from './AccountCard'
import AccountsSlider from './AccountsSlider'
import { EyeIcon } from '@/view/components/icons/EyeIcon'

// Hooks
import { useAccountsController } from './useAccountsController'
import formatCurrency from '@/app/utils/formatCurrency'
import { cn } from '@/app/utils/cn'

export default function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
  } = useAccountsController()

  return (
    <div className="bg-emerald-700 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong
            className={cn(
              'text-2xl tracking-[-1px] text-white',
              !areValuesVisible && 'blur-md',
            )}
          >
            {formatCurrency(1000)}
          </strong>

          <button
            className="w-8 h-8 flex items-center justify-center"
            onClick={toggleValuesVisibility}
          >
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
        <div>
          <Swiper
            spaceBetween={16}
            // @ts-ignore
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
            onSlideChange={swiper => {
              setSliderState({
                isBeginning: swiper.isBeginning,
                isEnd: swiper.isEnd,
              })
            }}
          >
            <div
              className="flex items-center justify-between mb-4"
              slot="container-start"
            >
              <strong className="text-white tracking-[-1px] text-lg">
                Minhas Contas
              </strong>

              <div>
                <AccountsSlider
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
              </div>
            </div>

            <SwiperSlide>
              <AccountCard
                color="#7950f2"
                name="Nubank"
                balance={1000}
                type="CASH"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                color="#000"
                name="XP"
                balance={1230}
                type="INVESTMENT"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard
                color="#0f0"
                name="Carteira"
                balance={663.25}
                type="CASH"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
