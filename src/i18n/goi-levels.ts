import type { JlptLevelFilter } from "./level";

/** 語彙問題集で公開済みの級（段階的に N2〜N5 を追加） */
export const GOI_RELEASED_LEVELS: readonly JlptLevelFilter[] = [
  "N1",
  "N2",
  "N3",
  "N4",
  "N5",
];

export function isGoiLevelReleased(level: string): level is JlptLevelFilter {
  return (GOI_RELEASED_LEVELS as readonly string[]).includes(level);
}
