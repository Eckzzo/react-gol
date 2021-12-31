export function debounce<Args extends readonly unknown[]>(
	fn: (...args: Args) => void,
	time: number
) {
	let timeoutId: NodeJS.Timeout | null;

	function cancel() {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
	}

	function wrapper(...args: Args) {
		cancel();
		timeoutId = setTimeout(() => {
			timeoutId = null;
			fn(...args);
		}, time);
	}

	wrapper.cancel = cancel;

	return wrapper;
}
