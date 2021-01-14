import { object, string, array } from "yup";

export const basesLmsDataValSchema = {
	file: array()
		.of(
			object({
				Name: string().required("Invalid CSV file"),
			}),
		)
		.required("Please upload a file"),
	depot: string().required("Please select a depot"),
};

export default object(basesLmsDataValSchema);
