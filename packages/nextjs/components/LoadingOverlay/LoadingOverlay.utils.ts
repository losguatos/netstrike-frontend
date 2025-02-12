import { LOADING_LINES } from "./LoadingOverlay.data";

export const generateRandomLoadingLines = (): string[] => {
  const randomLines: string[] = [];
  while (randomLines.length < 3) {
    const randomIndex = Math.floor(Math.random() * LOADING_LINES.length);
    const randomLine = LOADING_LINES[randomIndex];
    if (!randomLines.includes(randomLine)) {
      randomLines.push(randomLine);
    }
  }
  return ["Booting system... ", ...randomLines];
};
