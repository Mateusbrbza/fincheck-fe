import { z } from 'zod';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
// Components
import { useDashboard } from '../../components/DashboardContext/useDashboard';
// Services
import { bankAccountsService } from '@/app/services/bankAccountsService';
import { currencyStringToNumber } from '@/app/utils/currencyStringToNumber';
import { useState } from 'react';

const schema = z.object({
  initialBalance: z.union([
    z.string().nonempty('Saldo inicial é obrigatório'),
    z.number(),
  ]),
  name: z.string().nonempty('Nome da Conta é obrigatório'),
  type: z.enum(['CHECKING', 'INVESTMENT', 'CASH']),
  color: z.string().nonempty('Cor é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function useEditAccountModalController() {
  const queryClient = useQueryClient();
  const { isEditAccountModalOpen, closeEditAccountModal, accountBeingEdited } =
    useDashboard();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      color: accountBeingEdited?.color,
      name: accountBeingEdited?.name,
      type: accountBeingEdited?.type,
      initialBalance: accountBeingEdited?.initialBalance,
    },
  });

  const { isLoading, mutateAsync: updateAccount } = useMutation(
    bankAccountsService.update,
  );
  const { isLoading: isLoadingDelete, mutateAsync: removeAccount } =
    useMutation(bankAccountsService.deleteAccount);

  const handleSubmit = hookFormSubmit(async (data: any) => {
    try {
      await updateAccount({
        ...data,
        initialBalance: currencyStringToNumber(data.initialBalance),
        id: accountBeingEdited!.id,
      });

      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success('Conta editada com sucesso!');
      closeEditAccountModal();
    } catch {
      toast.error('Erro ao salvar as alterações!');
    }
  });

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  async function handleDeleteAccount() {
    try {
      await removeAccount(accountBeingEdited!.id);

      queryClient.invalidateQueries({ queryKey: ['bankAccounts'] });
      toast.success('Conta foi deletada com sucesso!');
      closeEditAccountModal();
    } catch {
      toast.error('Erro ao deletar a conta!');
    }
  }

  return {
    closeEditAccountModal,
    isEditAccountModalOpen,
    register,
    errors,
    handleSubmit,
    control,
    isLoading,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteAccount,
    isLoadingDelete,
  };
}
