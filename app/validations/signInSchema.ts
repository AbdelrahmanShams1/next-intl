import * as yup from "yup";
import type { InferType } from "yup";
 
 const SignInSchema = yup.object({
   
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email address"),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
   
  });

  type SignInSchemaType = InferType<typeof SignInSchema>;

 export { SignInSchema, type SignInSchemaType };