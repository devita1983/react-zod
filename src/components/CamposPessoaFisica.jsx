
import Input from "./Input";

const CamposPessoaFisica = ({ register, errors }) => (
  <>
    <Input label="CPF" name="cpf" register={register} error={errors.cpf} />
    <Input label="RG" name="rg" register={register} error={errors.rg} />
  </>
);

export default CamposPessoaFisica;
