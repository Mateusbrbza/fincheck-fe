import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  })

  return { register, errors, handleSubmit };
}
