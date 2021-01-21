import { object, ref, string } from "yup";
import { employeeNumberVal, passwordVal } from "../commonAuthFields";
import emailRegex from "../regex/emailRegex";

/**
 * Generate registration validation.
 *
 * @param {boolean} [isTesting=false] If it is being used in a testing environment. If true, email will accept any string.
 * @returns {yup.object} The yup validation object
 */
const getRegisterVal = (isTesting = false) =>
	object({
		"employee_number": employeeNumberVal.required(
			"You must enter your employee number"
		),
		"confirm_employee_number": employeeNumberVal
			.required("You must confirm your Employee Number")
			.test(
				"Employee Numbers match",
				"Employee Numbers do not match",
				function (value) {
					return value ? value === this.resolve(ref("employee_number")) : true;
				}
			),
		"password": passwordVal.required("You must enter a password"),
		"confirm_password": string()
			.required("You must confirm your password")
			.test("Passwords match", "Passwords do not match", function (value) {
				return value ? value === this.resolve(ref("password")) : true;
			}),
		"name": string().required("Please enter your name"),
		"depot": string().required("You must select your depot"),
		"email": string()
			.required("Please enter a valid email address")
			.matches(
				isTesting ? /.*/ : emailRegex,
				"Must use a valid Pacific National email address"
			),
	});

export default getRegisterVal();

export const testingRegisterVal = getRegisterVal(true);
