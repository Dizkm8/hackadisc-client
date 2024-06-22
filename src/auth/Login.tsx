import { Alert, Label } from "flowbite-react";
import CButton from "../common/components/CButton";
import { SubmitHandler, useForm } from "react-hook-form";
import CTextInput from "../common/components/CTextInput";
import { useNavigate } from "react-router-dom";
import { homePath } from "../common/router/routes-paths";
import agent from "../api/agent";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";
import CSpinner from "../common/components/CSpinner";
import useLogin from "./hooks/useLogin";

type LoginInputs = {
  rutInput: string;
  passwordInput: string;
};

const rutPlaceholder = "12123123-k";
const passwordPlaceholder = "******";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [isUnAuth, setIsUnAuth] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();
  const navigate = useNavigate();
  const { setToken } = useLogin();

  const disableInput = () => {
    setLoading(true);
  };

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    const { rutInput: rut, passwordInput: password } = data;
    disableInput();
    agent.Auth.login({ rut, password })
      .then((response) => {
        const { access } = response;
        setToken(access);
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
        <div className="w-full">
          <h1 className="text-7xl text-center">
            Re<span className=" text-pignus-500">haviour</span>
          </h1>
          <h2 className="text-6xl mb-2 font-extrabold uppercase text-center">
            <span className=" text-pignus-500">TZ</span>m
          </h2>
        </div>
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
              placeholder={rutPlaceholder}
              registerFunc={register("rutInput", {
                required: "Debes ingresar tu RUT",
                minLength: {
                  value: 9,
                  message: "El RUT no debe tener puntos, pero si guión",
                },
                maxLength: {
                  value: 10,
                  message: "El RUT no debe tener puntos, pero si guión",
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
              placeholder={passwordPlaceholder}
              registerFunc={register("passwordInput", {
                required: "Debes ingresar tu contraseña",
              })}
              color={errors.passwordInput?.message ? "failure" : "normal"}
              errorText={errors.passwordInput?.message}
            />
          </div>
          <CButton type="submit" className="mt-3 py-1" disabled={loading}>
            {loading ? <CSpinner /> : "Iniciar Sesión"}
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
