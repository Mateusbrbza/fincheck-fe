import { Logo } from '@/view/components/Logo';
import { UserMenu } from '@/view/components/UserMenu';

import Fab from './components/Fab';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import { DashboardProvider } from './components/DashboardContext';
import { NewAccountModal } from './modals/NewAccountModal';
import { NewTransactionModal } from './modals/NewTransactionModal';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="h-12 flex items-center justify-between">
          <Logo className="h-6 text-colors-green-900" />
          <UserMenu />
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>

          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />
        <NewAccountModal />
        <NewTransactionModal />
      </div>
    </DashboardProvider>
  );
}
