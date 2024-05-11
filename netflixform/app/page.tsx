"use client"
import { useState } from "react";
import InputField from "@/components/InputField/InputField";
import Button from "@/components/Button/Button";
 function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = () => {
    console.log('Submitting login form with:', { email, password });
    // Add your login logic here
  };

  return (

    <div className="   w-[100%] h-[76vh] sm:h-[130vh]  custom-img bg-cover  ">

      <div className="flex items-center justify-center w-[100%] h-[76vh] sm:h-[130vh] bg-[hsla(240,38%,14%,0.2)] bg-cover bg-center">
        <div className="bg-[rgba(0,0,0,0.7)] h-[90vh]   w-[440px] sm:w-[31]  ">
          <div className="py-8 ">
           <h1 className="text-4xl font-bold mb-4 pt-8 pl-14 text-white">Sign In</h1>
          
           <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
             />
           <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
             />
          
           <Button onClick={handleSubmit} label="Sign In" />
          </div>

        </div>

      </div>
     </div>
  
  );
};

export default Home;