export const employeeNumber_valid = "123456";
export const password_valid = "1aoi28_!90";
export const name_valid = "A name";
export const depot_valid = "Depot_Name";
export const email_valid = "good_email@pacificnational.com.au";

export const employeeNumber_invalid = "12345";
export const password_invalid = "@!a_b";
export const name_invalid = "";
export const depot_invalid = "";
export const email_invalid = "not an email";

export const registration_valid = {
	"employee_number": employeeNumber_valid,
	"confirm_employee_number": employeeNumber_valid,
	"password": password_valid,
	"confirm_password": password_valid,
	"name": name_valid,
	"depot": depot_valid,
	"email": email_valid,
};

export const registration_invalid = {
	"employee_number": employeeNumber_invalid,
	"confirm_employee_number": employeeNumber_invalid,
	"password": password_invalid,
	"confirm_password": password_invalid,
	"name": name_invalid,
	"depot": depot_invalid,
	"email": email_invalid,
};
