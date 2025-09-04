import { z } from "zod";

const singleQuestionValidationSchema = z.object({
  answer: z.string(),
  uuid: z.string(),
});

export const quizValidationSchema = z.object({
  questions: z.array(singleQuestionValidationSchema),
});

export type QuizFormValues = z.infer<typeof quizValidationSchema>;
