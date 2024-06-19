import { Label, TextInput } from "flowbite-react";
import CButton from "../common/components/CButton";

const Login = () => {
  return (
    <div className="h-dvh w-screen flex flex-col justify-center items-center px-5 md:px-10 gap-3">
      <h1 className="text-7xl mb-2">
        Re<span className=" text-pignus-500">haviour</span>
      </h1>
      <form className="flex w-full sm:w-full md:w-3/6 lg:w-1/3 flex-col gap-4">
        <div>
          <div className="block">
            <Label htmlFor="rut-input" value="Tu RUT" className="text-lg" />
          </div>
          <TextInput id="rut-input" type="text" placeholder="20.767.691-k" />
        </div>
        <div>
          <div className="block">
            <Label
              htmlFor="password-input"
              value="Tu contraseña"
              className="text-lg"
            />
          </div>
          <TextInput id="password-input" type="password" placeholder="****" />
        </div>
        <CButton type="submit" className="mt-3">Submit</CButton>
      </form>
    </div>
  );
};

export default Login;
