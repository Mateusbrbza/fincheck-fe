import { useForm } from 'react-hook-form';
import { z } from 'zod';

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
    handleSubmit: hookFormHandleSubmit
  } = useForm<FormData>();

  const handleSubmit = hookFormHandleSubmit((data: FormData) => {
    const parseResult = schema.safeParse(data);

    console.log(parseResult);
  })

  return { handleSubmit, register };
}
