
const Input = ({ label, register, name, error, ...rest }) => (
    <div className="space-y-1">
      <label className="block text-gray-600">{label}</label>
      <input
        {...register(name)}
        {...rest}
        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
      />
      {error && <p className="text-red-600 text-sm">{error.message}</p>}
    </div>
  );
  
  export default Input;
  