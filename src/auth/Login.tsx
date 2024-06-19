import { Label, TextInput } from "flowbite-react";
import CButton from "../common/components/CButton";
import { SubmitHandler, useForm } from "react-hook-form";

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
  const onSubmit: SubmitHandler<LoginInputs> = (data) => console.log(data);

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
            <TextInput
              id="rut-input"
              type="text"
              placeholder="20.767.691-k"
              {...register("rutInput", {
                required: "Debes ingresar tu RUT",
                minLength: 8,
                maxLength: 20,
              })}
              color={errors.rutInput?.message ? "failure" : "gray"}
              helperText={
                errors.rutInput && (
                  <span className="font-medium">{errors.rutInput.message}</span>
                )
              }
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

            <TextInput
              id="password-input"
              type="password"
              placeholder="****"
              {...register("passwordInput", {
                required: "Debes ingresar tu contraseña",
                minLength: 8,
                maxLength: 20,
              })}
              color={errors.passwordInput?.message ? "failure" : "gray"}
              helperText={
                errors.passwordInput && (
                  <span className="font-medium">
                    {errors.passwordInput.message}
                  </span>
                )
              }
            />
          </div>
          <CButton type="submit" className="mt-3">
            Submit
          </CButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
