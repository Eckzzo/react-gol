import { useEffect, useRef } from "react";

export function useInterval<Args extends readonly unknown[]>(
	callback: (...args: Args) => void,
	delay: number | null
) {
	const callbackRef = useRef(callback);

	useEffect(() => {
		function tick(...args: Args) {
			callbackRef.current(...args);
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}
