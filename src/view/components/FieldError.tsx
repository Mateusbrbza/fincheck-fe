import { CrossCircledIcon } from '@radix-ui/react-icons';

interface FieldErrorProps {
  errorMessage: string;
}

export function FieldError({ errorMessage }: FieldErrorProps) {
  return (
    <div className="flex gap-2 items-center mt-2 text-red-900">
      <CrossCircledIcon />

      <span className="text-xs">{errorMessage}</span>
    </div>
  );
}
