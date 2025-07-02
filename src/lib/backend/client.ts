const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const apiFetch = (url: string, options?: RequestInit) => {
  if (options?.body) {
    options.headers = {
      ...options.headers,
      "Content-Type": "application/json; charset=utf-8",
    };
  }

  return fetch(`${NEXT_PUBLIC_API_BASE_URL}${url}`, options).then((res) =>
    res.json()
  );
};