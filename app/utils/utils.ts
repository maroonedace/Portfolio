export const onLinkClick = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};


export function chunkArray<T>(arr: T[], chunks: number): T[][] {
  const perChunk = Math.ceil(arr.length / chunks);
  const result: T[][] = [];
  for (let i = 0; i < chunks; i++) {
    const start = i * perChunk;
    const end = start + perChunk;
    result.push(arr.slice(start, end));
  }
  return result;
}