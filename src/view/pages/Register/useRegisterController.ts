import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

// Services
import { authService } from "../../../app/services/authService";
import { SignupParams } from "../../../app/services/authService/signup";
// Hooks
import { useAuth } from '../../../app/hooks/useAuth';

const schema = z.object({
  name: z.string()
    .nonempty('Nome é obrigatório'),
  email: z.string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um email válido'),
  password: z.string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve conter no pelo menos 8 digitos'),
});

type FormData = z.infer<typeof schema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SignupParams) => {
      return authService.signup(data);
    },
  });

  const { signin } = useAuth();

  const handleSubmit = hookFormSubmit(async (data) => {
    try{
      const { accessToken } = await mutateAsync(data);

      signin(accessToken);
    } catch {
      toast.error('Ocorreu um erro ao criar a sua conta!');
    }
  });

  console.log(isLoading);

  return { register, errors, handleSubmit, isLoading };
}
