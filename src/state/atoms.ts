import { atom } from "recoil";
import { theme, Theme } from "styles/stitches";

interface ThemeState {
	mode: "light" | "dark";
	theme: Theme;
}

interface BoardSizeState {
	width: number;
	height: number;
}

export const themeState = atom<ThemeState>({
	key: "themeState",
	default: { mode: "light", theme },
});

export const boardState = atom<number[][]>({
	key: "boardState",
	default: [],
});

export const boardSizeState = atom<BoardSizeState>({
	key: "boardSize",
	default: { width: 100, height: 100 },
});

export const isPlayingState = atom<boolean>({
	key: "isPlayingState",
	default: false,
});

export const speedState = atom<number>({
	key: "speedState",
	default: 10,
});

export const generationState = atom<number>({
	key: "generationState",
	default: 0,
});
