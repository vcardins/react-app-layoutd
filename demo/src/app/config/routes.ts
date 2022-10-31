import { PageKey } from '../types';

const keys = Object.keys(PageKey);
const values = Object.values(PageKey);

export const appRoutes = values.reduce((result, value) => {
	const indexOfS = values.indexOf(value as unknown as PageKey);
	const key = keys[indexOfS];
	result[key as keyof typeof PageKey] = `/${value === PageKey.Home ? '' : value}`;
	return result;
}, {} as Record<keyof typeof PageKey, string>);
