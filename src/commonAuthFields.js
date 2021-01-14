import { string } from "yup";

export const employeeNumberVal = string().length(
	6,
	"Employee Numbers are 6 digits long",
);

export const passwordVal = string()
	.min(6, "Password must be at least 6 characters long")
	.max(24, "Password cannot be longer than 24 characters long");
