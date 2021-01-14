import { object, ref } from "yup";
import { passwordVal } from "../commonAuthFields";

export default object({
	password: passwordVal.required("Enter a new password"),
	confirm_password: passwordVal
		.required("You must confirm your new password")
		.oneOf([ref("password"), null], "Passwords must match"),
});
