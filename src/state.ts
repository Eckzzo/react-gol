import { atom } from "recoil";
import { theme, Theme } from "styles/stitches";

interface ThemeState {
	mode: "light" | "dark";
	theme: Theme;
}

export const themeState = atom<ThemeState>({
	key: "themeState",
	default: { mode: "light", theme },
});

export const boardState = atom<number[][]>({
	key: "boardState",
	default: [],
});

export const isPlayingState = atom<boolean>({
	key: "isPlayingState",
	default: false,
});

export const speedState = atom<number>({
	key: "speedState",
	default: 5,
});

export const generationState = atom<number>({
	key: "generationState",
	default: 0,
});
