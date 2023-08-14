import { useEffect, useState } from 'react';

import { Wrapper, Message } from './styles';
import { Progress } from '../Progress/Progress';
import { IPageLoadingProps } from './types';

export * from './types';

export const PageLoading = ({ id, delay = 10, opacity = 1, offset, message, type }: IPageLoadingProps) => {
	const [showLoading, setShowLoading] = useState(delay <= 0);

	useEffect(() => {
		const timer1 = setTimeout(() => setShowLoading(true), delay);

		// this will clear Timeout
		// when component unmount like in willComponentUnmount
		// and show will not change to true
		return () => {
			clearTimeout(timer1);
		};
	}, [delay]);

	if (!showLoading || !type) {
		return null;
	}

	return (
		<Wrapper
			opacity={opacity}
			display={!!type}
		>
			<Progress
				id={id}
				type={type}
				offset={offset}
			/>
			{message ? <Message id={`${id}-message`}>{message}</Message> : null}
		</Wrapper>
	);
};
