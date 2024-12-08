import { z } from "zod";

export const formSchema = z.object({
	messageData: z.string().min(2).max(450),
});

export type FormSchema = typeof formSchema;
