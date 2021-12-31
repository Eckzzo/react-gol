import { useRef, useLayoutEffect, useMemo } from "react";
import { debounce } from "utils/debounce";

export function useDebounce<Args extends readonly unknown[]>(
	callback: (...args: Args) => void,
	delay: number
) {
	const callbackRef = useRef(callback);

	useLayoutEffect(() => {
		callbackRef.current = callback;
	});

	return useMemo(
		() => debounce((...args: Args) => callbackRef.current(...args), delay),
		[delay]
	);
}
