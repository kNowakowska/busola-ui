export const Routes = {
  // Website
  home: () => "/",

  // Auth
  signIn: () => "/sign-in",
  resetPassword: () => "/reset-password",
  resetPasswordVerifyCode: () => "/reset-password/verify-code",
  resetPasswordConfirm: () => "/reset-password/confirm",
  resetInitialPassword: () => "/reset-initial-password",

  // Portal
  dashboard: () => "/dashboard",
  course: (courseId: string) => `/dashboard/course/${courseId}`,
  lesson: (courseId: string, lessonId: string) =>
    `/dashboard/course/${courseId}/lesson/${lessonId}`,
} as const;
