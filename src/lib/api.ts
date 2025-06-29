export type ApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export async function apiRequest<T = any>(
  endpoint: string,
  method: ApiMethod = "GET",
  body?: any,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  };

  if (body) {
    fetchOptions.body = JSON.stringify(body);
  }

  const res = await fetch(url, fetchOptions);

if (!res.ok) {

  let errorMessage = "API request failed";
  try {
    const errorData = await res.json();
    if (typeof errorData.message === "string") {
      errorMessage = errorData.message;
    } else if (typeof errorData.message === "object") {
      errorMessage = JSON.stringify(errorData.message);
    }
  } catch {
    
    const text = await res.text();
    if (text) errorMessage = text;
  }
  throw new Error(errorMessage);
}

  return res.json();
}