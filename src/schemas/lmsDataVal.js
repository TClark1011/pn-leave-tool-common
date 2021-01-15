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

export const Frontend = object({
	file: array()
		.of(
			object({
				Name: yup.string().required("Invalid CSV file"),
			}),
		)
		.required("Please upload a file"),
	access_key: string().required("Please enter an access key"),
	depot: string().required("Please select a depot"),
});
