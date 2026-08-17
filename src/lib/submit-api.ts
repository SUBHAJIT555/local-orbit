type SubmitPayload = Record<string, unknown>;

type SubmitResult =
  | { success: true; data: Record<string, unknown> }
  | { success: false; error: string };

/**
 * Shared submit API for contact, newsletter, and quote forms.
 * Posts to public/api/submit.php (same-origin on production / NameHero).
 */
export function getSubmitApiUrl() {
  return process.env.NEXT_PUBLIC_SUBMIT_API_URL || "/api/submit.php";
}

export async function submitToApi(payload: SubmitPayload): Promise<SubmitResult> {
  const url = getSubmitApiUrl();
  const body: SubmitPayload = { ...payload };
  if (body.cart_items && typeof body.cart_items !== "string") {
    body.cart_items = JSON.stringify(body.cart_items);
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    let data: Record<string, unknown> = {};
    try {
      data = JSON.parse(text) as Record<string, unknown>;
    } catch {
      return {
        success: false,
        error:
          "Mailer is not reachable. Upload public/api/submit.php to public_html/api/submit.php.",
      };
    }
    if (!res.ok) {
      const error =
        (typeof data.error === "string" && data.error) ||
        (typeof data.message === "string" && data.message) ||
        "Request failed.";
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error. Please try again.",
    };
  }
}
