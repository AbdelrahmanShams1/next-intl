import { Controller, FieldValues, Path, Control } from "react-hook-form";
import { Input as AntInputUI, Form } from "antd";

type InputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  label: string;
  type?: string;
  control: Control<TFormValues>;
  errors?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSuccess?: string;
  onCheck?: string;
  onError?: string;
};

const AntInput = <TFormValues extends FieldValues>({
  name,
  label,
  type = "text",
  control,
  errors,
  onBlur,
  onSuccess,
  onCheck,
  onError,
}: InputProps<TFormValues>) => {
  const getHelpMessage = () => {
    if (errors) return <span style={{ color: "#ff4d4f" }}>{errors}</span>;

    if (onError) return <span style={{ color: "#ff4d4f" }}>{onError}</span>;

    if (onCheck) return <span style={{ color: "#faad14" }}>{onCheck}</span>;

    if (onSuccess) return <span style={{ color: "#52c41a" }}>{onSuccess}</span>;

    return null;
  };

  const getStatus = () => {
    if (errors || onError) return "error";
    if (onCheck) return "validating";
    if (onSuccess) return "success";
    return "";
  };

  return (
    <Form.Item
      label={label}
      validateStatus={getStatus()}
      help={getHelpMessage()}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <AntInputUI
            {...field}
            type={type}
            disabled={!!onCheck}
            onBlur={(e) => {
              field.onBlur();
              onBlur?.(e);
            }}
          />
        )}
      />
    </Form.Item>
  );
};

export default AntInput;
