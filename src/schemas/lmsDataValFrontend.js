import { fileField, depotField } from "./lmsDataVal";
import { object, string } from "yup";

export default object({
	file: fileField,
	depot: depotField,
	access_key: string().required("Please enter an access key"),
});
