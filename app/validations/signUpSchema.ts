import * as yup from "yup";
import type { InferType } from "yup";
 
 const RegisterSchema = yup.object({
    firstName: yup
      .string()
      .required("First name is required")
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be at most 50 characters"),

    lastName: yup
      .string()
      .required("Last name is required")
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be at most 50 characters"),

    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email address"),

    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be at most 100 characters").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  type SignUpSchemaType = InferType<typeof RegisterSchema>;

 export { RegisterSchema, type SignUpSchemaType };