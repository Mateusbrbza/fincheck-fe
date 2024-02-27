// Icons
import { BankAccountTypeIcon } from '@/view/components/icons/BankAccountTypeIcon';

// Utils
import { cn } from '@/app/utils/cn';
import { formatCurrency } from '@/app/utils/formatCurrency';

import { useDashboard } from '../DashboardContext/useDashboard';
import { BankAccount } from '@/app/entities/BankAccount';

interface AccountCardProps {
  data: BankAccount;
}

export default function AccountCard({ data }: AccountCardProps) {
  const { color, name, currentBalance, type } = data;
  const { areValuesVisible, openEditAccountModal } = useDashboard();

  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4"
      style={{ borderColor: color }}
      role="button"
      onClick={() => openEditAccountModal(data)}
    >
      <div>
        <BankAccountTypeIcon type={type} />

        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            'text-gray-800 font-medium tracking-[-0.5px] block',
            !areValuesVisible && 'blur-sm',
          )}
        >
          {formatCurrency(currentBalance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
