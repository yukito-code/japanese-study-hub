/** 語彙クイズ等で共有する JLPT レベル（localStorage）。既定は N1。 */
export const JLPT_LEVEL_STORAGE_KEY = "jlpt-level";

export const JLPT_LEVEL_CHANGE = "jlpt-level-change";

export type JlptLevelFilter = "N1" | "N2" | "N3" | "N4" | "N5";

const DEFAULT_LEVEL: JlptLevelFilter = "N1";

export function getStoredJlptLevel(): JlptLevelFilter {
  if (typeof window === "undefined") return DEFAULT_LEVEL;
  const raw = localStorage.getItem(JLPT_LEVEL_STORAGE_KEY);
  if (raw == null || raw === "" || raw === "all" || !["N1", "N2", "N3", "N4", "N5"].includes(raw)) {
    localStorage.setItem(JLPT_LEVEL_STORAGE_KEY, DEFAULT_LEVEL);
    return DEFAULT_LEVEL;
  }
  return raw as JlptLevelFilter;
}

export function setStoredJlptLevel(level: JlptLevelFilter): void {
  localStorage.setItem(JLPT_LEVEL_STORAGE_KEY, level);
  window.dispatchEvent(
    new CustomEvent(JLPT_LEVEL_CHANGE, { detail: { level } }),
  );
}
