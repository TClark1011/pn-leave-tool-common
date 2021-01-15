import { object, string } from "yup";
import { employeeNumberVal } from "../commonAuthFields";

export default object({
	employee_number: employeeNumberVal.required(
		"Please enter your employee number",
	),
});
