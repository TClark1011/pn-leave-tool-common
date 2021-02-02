import {
	maxValidLeave,
	minValidLeave,
	oneDayOverMax,
} from "../../fixtures/validation_fixtures/leave_fixtures";
import { leaveVal } from "../../src";

describe("Validates allowed values", () => {
	it("Allows minimum values", async () => {
		expect(await leaveVal.isValid(minValidLeave)).toBeTruthy();
	});
	it("Allows maximum values", async () => {
		expect(await leaveVal.isValid(maxValidLeave)).toBeTruthy();
	});
});

describe("Invalidates disallowed values", () => {
	it("Does not allow length to be over maximum", async () => {
		expect(await leaveVal.isValid(oneDayOverMax)).toBeFalsy();
	});
	it("Does not allow leave to start early", async () => {
		expect(await leaveVal.isValid(oneDayOverMax)).toBeFalsy();
	});
});
