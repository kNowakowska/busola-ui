export const apiClient = async (
  route: string,
  data: unknown = {},
  options: RequestInit = {}
) => {
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

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${route}`,
    mergedOptions
  );

  const responseData = await response.json();
  if (!response.ok) {
    if (response.status === 500)
      throw new Error("Coś poszło nie tak. Spróbuj ponownie później");
    throw new Error(responseData.error);
  }

  return responseData;
};
