import { useWindowWidth } from '@/app/hooks/useWindowWidth';
import { useMemo, useState } from 'react';
import { useDashboard } from '../DashboardContext/useDashboard';
import { useBankAccounts } from '@/app/hooks/useBankAccounts';

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility, openNewAccountModal } =
    useDashboard();

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });

  const { accounts, isFetching } = useBankAccounts();

  const currentBalance = useMemo(() => {
    return accounts.reduce(
      (total, account) => total + account.currentBalance,
      0,
    );
  }, [accounts]);

  return {
    windowWidth,
    sliderState,
    setSliderState,
    areValuesVisible,
    toggleValuesVisibility,
    openNewAccountModal,
    isLoading: isFetching,
    accounts: accounts,
    currentBalance,
  };
}
