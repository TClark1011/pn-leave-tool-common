import { startOfToday, addWeeks, differenceInDays } from "date-fns";
import { object, date, ref } from "yup";
import { leaveLength } from "../../leaveParams";
import { employeeNumberVal } from "../commonAuthFields";

export default object({
	"user": employeeNumberVal.required("Employee Number is required"),
	"dates": object({
		"start": date().required().min(addWeeks(startOfToday(), 2)),
		"end": date()
			.required()
			.test(
				"ahead of start",
				"end date must be later than start date",
				function (value) {
					return new Date(value) > new Date(this.resolve(ref("start")));
				}
			)
			.test(
				"length within maximum",
				"Leave length must be within maximum",
				function (value) {
					return (
						differenceInDays(
							new Date(value),
							new Date(this.resolve(ref("start")))
						) <= leaveLength.max
					);
				}
			)
			.test(
				"length meets minimum",
				"Leave length must be equal to or above minimum",
				function (value) {
					return (
						differenceInDays(
							new Date(value),
							new Date(this.resolve(ref("start")))
						) >= leaveLength.min
					);
				}
			),
	}),
});
