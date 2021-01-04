import yup from "yup";
import { employeeNumberVal, passwordVal } from "./commonAuthFields";

export default yup.object({
	"employee_number": employeeNumberVal.required(
		"Employee Number is a required field"
	),
	"password": passwordVal.required("Password is a required field"),
});
