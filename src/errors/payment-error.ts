import { ApplicationError } from "@/protocols";

export function paymentError(): ApplicationError {
	return {
		name: "PaymentRequiredError",
		message: "Payment Required",
	};
}
