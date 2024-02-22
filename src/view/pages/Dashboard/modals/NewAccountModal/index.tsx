import { Modal } from '@/view/components/Modal';
import { useNewAccountModalController } from './useNewAccountModalController';
import { InputCurrency } from '@/view/components/InputCurrency';
import { Input } from '@/view/components/Input';
import { Select } from '@/view/components/Select';
import { ColorsDropdownInput } from '@/view/components/ColorsDropdownInput';
import { Button } from '@/view/components/Button';

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountModalController();

  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form>
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-xs">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <Input
            type="text"
            name="initialBalance"
            placeholder="Nome da Conta"
          />

          <Select
            placeholder="Tipo"
            options={[
              {
                value: 'CHECKING',
                label: 'Dinheiro Físico',
              },
              {
                value: 'INVESTMENT',
                label: 'Investimento',
              },
              {
                value: 'CASH',
                label: 'Conta Corrente',
              },
            ]}
          />

          <ColorsDropdownInput />
        </div>

        <Button type="submit" className="w-full mt-6">
          Criar
        </Button>
      </form>
    </Modal>
  );
}
