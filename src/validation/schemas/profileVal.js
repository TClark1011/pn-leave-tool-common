import { string, object } from "yup";

/**
 * Generates profile validation
 *
 * @param {string[]} depots The list of valid depots
 * @returns {yup.schema} The yup schema that can be used to validate profile edits
 */
const getProfileVal = (depots) =>
	object({
		"name": string().required("Name cannot be blank"),
		"depot": string()
			.oneOf(
				depots.map((item) => item._id),
				"Selected depot is invalid"
			)
			.required("You must select a depot"),
	});

export default getProfileVal;
