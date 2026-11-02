export const toEmbedUrl = (link: string) => {
  const url = new URL(link);
  url.searchParams.set("embed_domain", window.location.hostname);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("background_color", "151515");
  url.searchParams.set("text_color", "f5f5f5");
  return url.href;
};