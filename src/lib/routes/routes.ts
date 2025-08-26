const HomeRoutes = {
  home: "/",
};

const AuthRoutes = {
  signIn: "/sign-in",
  resetPassword: "/reset-password",
  resetPasswordVerifyCode: "/reset-password/verify-code",
  resetPasswordConfirm: "/reset-password/confirm",
  resetInitialPassword: "/reset-initial-password",
};

const PortalRoutes = {
  dashboard: () => "/dashboard",
  course: (courseId: string) => `/dashboard/course/${courseId}`,
  lesson: (courseId: string, lessonId: string) =>
    `/dashboard/course/${courseId}/lesson/${lessonId}`,
};

function createRoutes(routes: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(routes).map(([key, value]) => [key, () => value])
  );
}

export const Routes: Record<string, (...args: any[]) => string> = {
  // Website
  ...createRoutes(HomeRoutes),

  // Auth
  ...createRoutes(AuthRoutes),

  // Portal
  ...PortalRoutes,
};
