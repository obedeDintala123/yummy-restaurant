import { getCookie } from "cookies-next"; // ou outro método que você use

export type ApiMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export async function apiRequest<T = any>(
  endpoint: string,
  method: ApiMethod = "GET",
  body?: any,
  options?: RequestInit
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = endpoint.startsWith("http") ? endpoint : `${baseUrl}${endpoint}`;

  // 🟡 Pega o token do cookie
  const tokenData = getCookie("auth-token");
  let token = "";
  if (typeof tokenData === "string") {
    try {
      const parsed = JSON.parse(tokenData);
      token = parsed.token;
    } catch {}
  }

  const fetchOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }), // ✅ Adiciona o token ao header
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
