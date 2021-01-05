import { object } from "yup";
import { employeeNumberVal, passwordVal } from "./commonAuthFields";

export default object({
	"employee_number": employeeNumberVal.required(
		"Employee Number is a required field"
	),
	"password": passwordVal.required("Password is a required field"),
});
