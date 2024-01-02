import { z } from 'zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';

import { authService } from "../../../app/services/authService";
import { useMutation } from '@tanstack/react-query';
import { SigninParams } from '../../../app/services/authService/signin';

const schema = z.object({
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um email válido'),
  password: z.string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve conter no pelo menos 8 digitos'),
})

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try{
      await mutateAsync(data);
    } catch {
      toast.error('Credenciais inválidas!');
    }
  });

  return { handleSubmit, register, errors, isLoading };
}
