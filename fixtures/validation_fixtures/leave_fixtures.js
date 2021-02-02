import { addDays, isDate, subDays } from "date-fns";
import { leaveLength, leaveStartMinOffset } from "../../src";

export const earliestStartDate = addDays(new Date(), leaveStartMinOffset);

/**
 * Generate a leave fixture
 *
 * @param {number} length The desired length of the leave
 * @param {Date | number} [start=earliestStartDate] Depending on
 * provided type:
 *  - Date: The date the leave should start on
 *  - number: How many days from today the leave should start
 * @param {string} [user="111111"] The employee number string
 * provided as the user field
 * @returns {object} An object in the shape expected by the yup
 * leave validation object.
 */
const getLeaveFixture = (
	length,
	start = earliestStartDate,
	user = "111111"
) => {
	let startDate;
	if (isDate(start)) {
		startDate = start;
	} else if (typeof start === "number") {
		startDate = addDays(new Date(), start);
	}
	return { user, "dates": { "start": startDate, "end": addDays(startDate, length) } };
};

export const minValidLeave = getLeaveFixture(leaveLength.min);
export const maxValidLeave = getLeaveFixture(leaveLength.max);

export const oneDayOverMax = getLeaveFixture(leaveLength.max + 1);
export const startsTooEarly = getLeaveFixture(
	leaveLength.min,
	subDays(earliestStartDate, 1)
);
