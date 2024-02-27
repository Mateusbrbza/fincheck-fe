import { NumericFormat } from 'react-number-format';
import { FieldError } from './FieldError';
import { cn } from '@/app/utils/cn';

interface InputCurrencyProps {
  error?: string;
  value?: string | number;
  onChange?(value: string): void;
}

export function InputCurrency({ error, onChange, value }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        onChange={event => onChange?.(event.target.value)}
        className={cn(
          'text-gray-800 text-[32px] font-bold tracking-[-1px] outline-none w-full',
          error && 'text-red-900',
        )}
      />

      {error && <FieldError errorMessage={error} />}
    </div>
  );
}
