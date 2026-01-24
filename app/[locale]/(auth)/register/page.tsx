"use client";

import AntInput from "@/app/components/form/Input";
import Input from "@/app/components/form/Input";
import useCheckEmailAvailability from "@/app/hooks/useCheckEmailAvailability";
import {
  RegisterSchema,
  SignUpSchemaType,
} from "@/app/validations/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

const page = () => {
  const {
    control,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    mode: "onBlur",
    resolver: yupResolver(RegisterSchema),
  });

  const { isAvailable, perEmail, checkEmail, resetStatus } =
    useCheckEmailAvailability();

  const onBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    await trigger("email");
    const { isDirty, invalid } = getFieldState("email");
    if (isDirty && !invalid && value !== perEmail) {
      checkEmail(value);
    } else if (isDirty && invalid && perEmail) {
      resetStatus();
    }
  };

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* First Name */}
        <AntInput
          name="firstName"
          label="First Name"
          control={control}
          errors={errors.firstName?.message?.toString()}
        />

        {/* Last Name */}
        <AntInput
          name="lastName"
          label="Last Name"
          control={control}
          errors={errors.lastName?.message?.toString()}
        />

        {/* Email */}
        <AntInput<SignUpSchemaType>
          name="email"
          label="Email"
          control={control}
          errors={errors.email?.message}
          onBlur={onBlurHandler}
          onSuccess={isAvailable === "available" ? "Email is available" : ""}
          onCheck={
            isAvailable === "checking"
              ? "We're currently checking the availability of this email."
              : ""
          }
          onError={
            isAvailable === "Unavailable"
              ? "Email is already taken"
              : isAvailable === "failed"
                ? "Error checking email"
                : ""
          }
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
        <AntInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          control={control}
          errors={errors.confirmPassword?.message?.toString()}
        />

        <button
          type="submit"
          className="w-full mt-4 rounded-lg bg-blue-600 py-2 text-white font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default page;
