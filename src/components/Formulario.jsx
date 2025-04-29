
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import Input from "./Input";
import SelectTipoPessoa from "./SelectTipoPessoa";
import CamposPessoaFisica from "./CamposPessoaFisica";
import CamposPessoaJuridica from "./CamposPessoaJuridica";

const schema = z.object({
  nome: z.string().min(1, "Nome obrigatório"),
  email: z.string().email("Email inválido"),
  tipo: z.string().min(1, "Selecione o tipo"),
  cpf: z.string().optional(),
  rg: z.string().optional(),
  cnpj: z.string().optional(),
  razaoSocial: z.string().optional(),
});

const Formulario = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const tipoPessoa = watch("tipo");

  const onSubmit = (data) => {
    console.log("Dados:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-md w-full max-w-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">Cadastro</h2>

      <Input label="Nome" name="nome" register={register} error={errors.nome} />
      <Input label="Email" name="email" register={register} error={errors.email} />
      <SelectTipoPessoa register={register} />

      {tipoPessoa === "fisica" && <CamposPessoaFisica register={register} errors={errors} />}
      {tipoPessoa === "juridica" && <CamposPessoaJuridica register={register} errors={errors} />}

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Enviar
      </button>
    </form>
  );
};

export default Formulario;
