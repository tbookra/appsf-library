import styles from "./edit-form.module.scss";
// import { useRef} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
interface FormValues {
   
    firstname: string;
    lastname: string;
    email: string;
    
}

export const EditForm = () => {
  const schema = yup
    .object()
    .shape({
      firstname: yup
        .string()
        .required("זהו שדה חובה")
        .min(2, "יש לספק לפחות שני תוים")
        .max(40, "מותר שם עם עד 40 תוים"),
      lastname: yup
        .string()
        .min(2, "יש לספק לפחות שני תוים")
        .max(40, "מותר שם עם עד 40 תוים")
        .required("זהו שדה חובה"),
      email: yup
        .string()
        .required("זהו שדה חובה")
        .email("נא לספק כתובת אי-מייל תקינה"),
    })
    .required();

  const {
    register,
    handleSubmit,
    
    formState: { errors  },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
    mode: "all",
  });
  const handleSubmitFn = (data: any) => {
    console.log("data", data);
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit(handleSubmitFn)}
    >
      
        <input
          type="text"
          {...register("firstname")}
          defaultValue=" "
          aria-invalid={errors.firstname ? "false" : "true"}
          aria-required={true}
          aria-describedby="firstname_described"
          aria-label="firstname"
          id="firstname"
          placeholder="firstname"
        />
    </form>
  );
};
