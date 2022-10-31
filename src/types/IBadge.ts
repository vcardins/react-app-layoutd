import { CSSProperties } from 'react';

export interface IBadge {
	label: string | number;
	backgroundColor?: CSSProperties['backgroundColor'];
	color?: CSSProperties['color'];
}
