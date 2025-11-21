const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
};

export async function api<T>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", body, headers = {} } = options;

  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
}

// Typed endpoints for your features
export const endpoints = {
  voice: {
    transcribe: (data: FormData) => 
      fetch(`${API_BASE}/voice/transcribe`, { method: "POST", body: data }),
  },
  image: {
    analyze: (data: FormData) => 
      fetch(`${API_BASE}/image/analyze`, { method: "POST", body: data }),
  },
  video: {
    process: (data: FormData) => 
      fetch(`${API_BASE}/video/process`, { method: "POST", body: data }),
  },
  text: {
    generate: (prompt: string) => 
      api("/text/generate", { method: "POST", body: { prompt } }),
  },
};