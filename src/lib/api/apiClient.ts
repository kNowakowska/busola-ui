export const apiClient = async (
  route: string,
  data?: any,
  options = {
    method: "POST",
    credentials: "include" as RequestCredentials,
  }
) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}`, {
    ...options,
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  if (!response.ok) {
    if (response.status === 500)
      throw new Error("Coś poszło nie tak. Spróbuj ponownie później");
    throw new Error(responseData.error);
  }

  return responseData;
};
