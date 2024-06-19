import { Label, TextInput } from "flowbite-react";
import CButton from "../common/components/CButton";

const Login = () => {
  return (
    <div className="h-dvh w-screen flex justify-center items-center px-5 md:px-10">
      <form className="flex w-full sm:w-full md:w-3/6 lg:w-1/3 flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="rut-input" value="Tu RUT" />
          </div>
          <TextInput id="rut-input" type="text" placeholder="20.767.691-k" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password-input" value="Tu contraseña" />
          </div>
          <TextInput id="password-input" type="password" placeholder="****" />
        </div>
        <CButton type="submit">Submit</CButton>
      </form>
    </div>
  );
};

export default Login;
