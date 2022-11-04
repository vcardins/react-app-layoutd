import { useState, useCallback } from 'react';

export function useLocalStorage<T = unknown>(
	key: string,
	initialValue?: Partial<T>,
	transform?: (value: T) => T,
) {
	// State to store our value
	// Pass initial state function to useState so logic is only executed once
	const [storedValue, setValue] = useState(() => {
		try {
			// Get from local storage by key
			let item: T | string | null = window.localStorage.getItem(key);
			if (!item) {
				return initialValue as T;
			}

			item = JSON.parse(item) as T;

			return typeof transform === 'function'
				? (transform(item) as T)
				: item;
		} catch (error) {
			// If error also return initialValue
			return initialValue as T;
		}
	});

	// Return a wrapped version of useState's setter function that ...
	// ... persists the new value to localStorage.
	const setStoredValue = useCallback(
		(value: unknown, removeIfUndefined = false) => {
			try {
				if (!value && removeIfUndefined) {
					return window.localStorage.removeItem(key);
				}
				// Allow value to be a function so we have same API as useState
				const valueToStore =
					value instanceof Function ? value(storedValue) : value;
				// Save state
				setValue(valueToStore);
				// Save to local storage
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
			} catch (error) {
				// A more advanced implementation would handle the error case
			}
		},
		[key, storedValue],
	);

	const clearStoredValue = useCallback(() => {
		window.localStorage.removeItem(key);
	}, [key]);

	return { storedValue, setStoredValue, clearStoredValue };
}
