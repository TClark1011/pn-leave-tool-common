import { object, string, array } from "yup";

export const fileField = array()
	.of(
		object({
			Name: string().required("Invalid CSV file"),
		}),
	)
	.required("Please upload a file");

export const depotField = string().required("Please select a depot");

export default object({ file: fileField, depot: depotField });
