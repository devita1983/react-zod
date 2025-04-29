
const SelectTipoPessoa = ({ register }) => (
    <div>
      <label className="block text-gray-600 mb-1">Tipo de Pessoa</label>
      <select
        {...register("tipo")}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      >
        <option value="">Selecione</option>
        <option value="fisica">Pessoa Física</option>
        <option value="juridica">Pessoa Jurídica</option>
      </select>
    </div>
  );
  
  export default SelectTipoPessoa;
  