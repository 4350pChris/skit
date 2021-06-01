import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'

export function localStore<T>(key: string, value: T): Writable<T> {
	const data = typeof localStorage != 'undefined' ? JSON.parse(localStorage.getItem(key)) : null
	const store = writable(value)
	if (data !== null) {
		store.set(data)
	}
	store.subscribe((val) => {
		if (typeof localStorage == 'undefined') {
			return
		}
		localStorage.setItem(key, JSON.stringify(val))
	})

	return store
}
