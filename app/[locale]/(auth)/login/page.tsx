"use client";

import AntInput from "@/app/components/form/Input";
import Input from "@/app/components/form/Input";
import { SignInSchema, SignInSchemaType } from "@/app/validations/signInSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

const page = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    mode: "onBlur",
    resolver: yupResolver(SignInSchema),
  });

  const onSubmit: SubmitHandler<SignInSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login
          </h2>

          {/* Email */}
          <AntInput
            name="email"
            label="Email"
            type="email"
            control={control}
            errors={errors.email?.message?.toString()}
          />

          {/* Password */}
          <AntInput
            name="password"
            label="Password"
            type="password"
            control={control}
            errors={errors.password?.message?.toString()}
          />

          {/* Confirm Password */}

          <button
            type="submit"
            className="w-full mt-4 rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default page;
