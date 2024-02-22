import { useState } from 'react';
// Utils
import { cn } from '@/app/utils/cn';
import { formatDate } from '@/app/utils/formatDate';
// Components
import { Popover } from './Popover';
import { FieldError } from './FieldError';
import { DatePicker } from './DatePicker';

interface DatePickerInputProps {
  error?: string;
  className?: string;
}

export function DatePickerInput({ className, error }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={cn(
              'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-700 focus:border-gray-800 transition-all outline-none text-left relative pt-4',
              error && '!border-red-900',
              className,
            )}
          >
            <span className="absolute text-gray-700 text-xs left-[13px] top-2 pointer-events-none">
              Data
            </span>
            <span>{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker
            value={selectedDate}
            onChange={date => setSelectedDate(date)}
          />
        </Popover.Content>
      </Popover.Root>

      {error && <FieldError errorMessage={error} />}
    </div>
  );
}
