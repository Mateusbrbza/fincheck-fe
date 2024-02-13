import { Swiper, SwiperSlide } from 'swiper/react';
//Icons
import { Spinner } from '@/view/components/Spinner';
import { FilterIcon } from '@/view/components/icons/FilterIcon';
import { CategoryIcon } from '@/view/components/icons/categories/CategoryIcon';
import emptyStateImage from '../../../../../assets/empty-state.svg';
// Utils
import { cn } from '@/app/utils/cn';
import { MONTHS } from '@/app/config/constants';
import formatCurrency from '@/app/utils/formatCurrency';
// Components
import { FiltersModal } from './FiltersModal';
import { SliderOption } from './SliderOption';
import { SliderNavigation } from './SliderNavigation';
import TransactionTypeDropdown from './TransactionTypeDropdown';
import { useTransactionsController } from './useTransactionsController';

export default function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    handleCloseFiltersModal,
    handleOpenFiltersModal,
    isFiltersModalOpen,
  } = useTransactionsController();

  const hasTransactions = transactions.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="w-12 h-12" />
        </div>
      )}
      {!isInitialLoading && (
        <>
          <FiltersModal
            open={isFiltersModalOpen}
            onClose={handleCloseFiltersModal}
          />

          <header>
            <div className="flex items-center justify-between">
              <TransactionTypeDropdown />

              <button onClick={handleOpenFiltersModal}>
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
            {isLoading && (
              <div className="flex items-center flex-col h-full justify-center">
                <Spinner className="w-12 h-12" />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex items-center flex-col h-full justify-center">
                <img src={emptyStateImage} alt="Empty State" />
                <p className="text-gray-700">
                  Não encontramos nenhuma transação!
                </p>
              </div>
            )}

            {hasTransactions && !isLoading && (
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
            )}
          </div>
        </>
      )}
    </div>
  );
}
