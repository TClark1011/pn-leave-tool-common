import {
	registration_valid,
	registration_invalid,
	email_invalid,
} from "../../fixtures/validation_fixtures/registration_fixtures";
import { registerVal, testingRegisterVal } from "../../src";

describe("Regular Registration Validation - General", () => {
	it("Passes with valid input", (done) => {
		registerVal.validate(registration_valid).then((result) => {
			expect(result.errors).toBeFalsy();
			done();
		});
	});

	it("Fails with all fields invalid", async (done) => {
		expect(await registerVal.isValid(registration_invalid)).toBeFalsy();
		done();
	});
});

describe("Specific fields", () => {
	for (const field of Object.keys(registration_invalid)) {
		const input = JSON.parse(JSON.stringify(registration_valid));
		input[field] = registration_invalid[field];
		it(`Fails with invalid ${field}`, async (done) => {
			expect(await registerVal.isValid(input)).toBeFalsy();
			done();
		});
	}
});

describe("Testing Registration Validation", () => {
	it("Allows invalid email when testing", async (done) => {
		expect(
			await testingRegisterVal.isValid({
				...registration_valid,
				"email": email_invalid,
			})
		).toBeTruthy();
		done();
	});
});
