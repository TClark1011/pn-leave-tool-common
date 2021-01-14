import { basesLmsDataValSchema } from "./lmsDataVal";
import { object, string } from "yup";

export default object({
	...basesLmsDataValSchema,
	access_key: string().required("Please enter an access key"),
});
