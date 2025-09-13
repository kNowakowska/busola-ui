const HomeRoutes = {
  home: "/",
};

const AuthRoutes = {
  signIn: "/auth/sign-in",
  resetPassword: "/auth/reset-password",
  resetPasswordVerifyCode: "/auth/reset-password/verify-code",
  resetPasswordConfirm: "/auth/reset-password/confirm",
  resetInitialPassword: "/auth/reset-initial-password",
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

export const Routes: Record<string, (...args: string[]) => string> = {
  // Website
  ...createRoutes(HomeRoutes),

  // Auth
  ...createRoutes(AuthRoutes),

  // Portal
  ...PortalRoutes,
};
