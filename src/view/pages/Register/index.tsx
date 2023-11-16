import React from 'react';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking[-1px]">
          Crie sua conta
        </h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-tighter-[-0.5px]">
            Já possui uma conta?
          </span>

          <Link
            to="/login"
            className="tracking-tighter-[-0.5px] font-medium text-teal-700"
          >
            Fazer Login
          </Link>
        </p>
      </header>

      <form className="mt-[60px] flex flex-col gap-4">
        <Input
          placeholder="Nome"
          name="nome"
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
        />

        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </>
  );
}
