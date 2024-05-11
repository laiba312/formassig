// components/InputField.tsx
interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
  }
  
  const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border-[1px] h-[47px]  sm:h-[58px] mx-16 text-slate-100 w-[70%] mt-4  pl-4 sm:pl-4 rounded-md border-[#8d8686] bg-[rgba(41,38,38,0.47)]"
      />
    );
  };
  
  export default InputField;
  