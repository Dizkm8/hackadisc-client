import { Label } from "flowbite-react";
import CButton from "../common/components/CButton";
import { SubmitHandler, useForm } from "react-hook-form";
import CTextInput from "../common/components/CTextInput";
import { useNavigate } from "react-router-dom";

type LoginInputs = {
  rutInput: string;
  passwordInput: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
    navigate("/home");
  };

  return (
    <div className="h-dvh w-screen flex justify-center items-center">
      <div className="h-full sm:h-min w-full sm:w-[500px] flex flex-col justify-center items-center bg-gray-100 p-5 sm:p-10 gap-3 rounded-xl drop-shadow-2xl">
        <h1 className="text-7xl mb-2">
          Re<span className=" text-pignus-500">haviour</span>
        </h1>
        <img src="/logo-pignus.webp" alt="Logo Pignus" className="w-[180px]" />
        <form
          className="flex flex-col w-full gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="block">
              <Label htmlFor="rut-input" value="Tu RUT" className="text-lg" />
            </div>
            <CTextInput
              id="rut-input"
              type="text"
              placeholder="20.767.691-k"
              registerFunc={register("rutInput", {
                required: "Debes ingresar tu RUT",
                minLength: {
                  value: 11,
                  message: "El RUT debe tener al menos 11 caracteres",
                },
                maxLength: {
                  value: 12,
                  message: "El RUT debe tener máximo 12 caracteres",
                },
              })}
              color={errors.rutInput?.message ? "failure" : "normal"}
              errorText={errors.rutInput?.message}
            />
          </div>
          <div>
            <div className="block">
              <Label
                htmlFor="password-input"
                value="Tu Contraseña"
                className="text-lg"
              />
            </div>
            <CTextInput
              id="password-input"
              type="password"
              placeholder="******"
              registerFunc={register("passwordInput", {
                required: "Debes ingresar tu contraseña",
              })}
              color={errors.passwordInput?.message ? "failure" : "normal"}
              errorText={errors.passwordInput?.message}
            />
          </div>
          <CButton type="submit" className="mt-3">
            Iniciar Sesión
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
