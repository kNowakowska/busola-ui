import { Routes } from "../routes/routes";

async function refreshToken() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`,
    {
      method: "POST",
      credentials: "include" as RequestCredentials,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    }
  );

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.error);
  }
  return responseData;
}

async function apiClient<T>(
  route: string,
  data: unknown = {},
  options: RequestInit = {}
): Promise<T> {
  const defaultOptions: RequestInit = {
    method: "GET",
    credentials: "include" as RequestCredentials,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...options,
    body:
      (options.method ?? "GET") !== "GET" ? JSON.stringify(data) : undefined,
  };

  let response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${route}`,
    mergedOptions
  );

  if (response.status === 401) {
    try {
      await refreshToken();
    } catch (error) {
      setTimeout(() => {
        window.location.href = Routes.signIn();
      }, 3000);
      throw new Error("Sesja wygasła. Zaloguj się ponownie");
    }
    response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${route}`,
      mergedOptions
    );
  }

  let responseData = await response.json();
  if (!response.ok) {
    if (response.status === 500)
      throw new Error("Coś poszło nie tak. Spróbuj ponownie później");

    if (response.status === 401) {
      setTimeout(() => {
        window.location.href = Routes.signIn();
      }, 3000);
      throw new Error("Sesja wygasła. Zaloguj się ponownie");
    }

    throw new Error(responseData.error);
  }

  return responseData as T;
}

export default apiClient;
