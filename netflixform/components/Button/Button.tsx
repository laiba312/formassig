// components/Button.tsx
interface ButtonProps {
    onClick: () => void;
    label: string;
  }
  
  const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
      <button
        onClick={onClick}
        className="w-[70%] my-5 mx-16  bg-[red] text-white  py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  