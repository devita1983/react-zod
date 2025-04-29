
import Input from "./Input";

const CamposPessoaJuridica = ({ register, errors }) => (
  <>
    <Input label="CNPJ" name="cnpj" register={register} error={errors.cnpj} />
    <Input label="Razão Social" name="razaoSocial" register={register} error={errors.razaoSocial} />
  </>
);

export default CamposPessoaJuridica;
