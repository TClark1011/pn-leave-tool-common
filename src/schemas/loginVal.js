import { object } from "yup";
import { employeeNumberVal, passwordVal } from "../commonAuthFields";

export default object({
	employee_number: employeeNumberVal.required(
		"You must enter your employee number",
	),
	password: passwordVal.required("You must enter your password"),
});
