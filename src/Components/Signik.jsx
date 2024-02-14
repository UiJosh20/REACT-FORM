import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../UserScehma";


const Signik = () => {
  const URL = "http://localhost:8000/register";
  const navigate = useNavigate();



  const {handleChange, handleSubmit, values, errors} = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      axios.post(URL, values);
      navigate("/login");
    },
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="first name"
          value={values.firstName}
        />
        <span>{errors.firstName}</span>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="last name"
          value={values.lastName}
        />
        <span>{errors.lastName}</span>

        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email address"
          value={values.email}
        />
        <span>{errors.email}</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
          value={values.password}
        />
        <span>{errors.password}</span>
        <button type="submit" className="bg-danger text-danger">
          signup
        </button>
      </form>
    </div>
  );
};

export default Signik;
