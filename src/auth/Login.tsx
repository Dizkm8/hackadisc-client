import { Alert, Label } from "flowbite-react";
import CButton from "../common/components/CButton";
import { SubmitHandler, useForm } from "react-hook-form";
import CTextInput from "../common/components/CTextInput";
import { useNavigate } from "react-router-dom";
import { homePath } from "../common/router/routes-paths";
import agent from "../api/agent";
import { useState } from "react";
import useTokenStore from "./hooks/useTokenStore";
import { HiInformationCircle } from "react-icons/hi";
import CSpinner from "../common/components/CSpinner";

type LoginInputs = {
  rutInput: string;
  passwordInput: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isUnAuth, setIsUnAuth] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const { setToken } = useTokenStore();

  const disableInput = () => {
    setLoading(true);
  };

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const { rutInput: username, passwordInput: password } = data;
    agent.Auth.login({ username, password })
      .then((response) => {
        const { access } = response;
        setToken(access);
        disableInput();
        navigate(homePath);
      })
      .catch((error) => {
        console.error(error);
        setIsUnAuth(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="h-dvh w-screen flex justify-center items-center">
      <div className="h-full sm:h-min w-full sm:w-[500px] flex flex-col justify-center items-center bg-gray-100 p-5 sm:p-10 gap-3 rounded-xl drop-shadow-2xl">
        <h1 className="text-7xl mb-2">
          Re<span className=" text-pignus-500">haviour</span>
        </h1>
        <img src="/logo-pignus.webp" alt="Logo Pignus" className="w-[180px]" />
        {isUnAuth && (
          <Alert color="failure" className="w-full" icon={HiInformationCircle}>
            Credenciales inválidas
          </Alert>
        )}
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
          <CButton type="submit" className="mt-3" disabled={loading}>
            {loading ? <CSpinner /> : "Iniciar Sesión"}
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
