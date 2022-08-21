import * as Yup from "yup";

const registrationSchema = new Yup.ObjectSchema({
	name: Yup.string()
		.required("Please enter yor name")
		.min(4, "Too few characters for name")
		.max(20, "Too much caharacters for name")
		.default(""),
	email: Yup.string()
		.email("Invalid email address")
		.required("Please enter your email")
		.default(""),
	password: Yup.string()
		.required("Password is required")
		.min(8)
		.max(16)
		.default(""),
});

export const defaultValues = registrationSchema.getDefault();

export default registrationSchema;
