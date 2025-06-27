export type ApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
export async function apiRequest<T = any>(
  endpoint: string,
  method: ApiMethod = "GET",
  body?: any,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
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
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "API request failed");
  }

  return res.json();
}