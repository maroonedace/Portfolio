export const onLinkClick = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
