import { memo } from 'react';
import { IProvidersProps } from 'react-app-layouts';

function ProvidersFunc({ children, navigation }: IProvidersProps) {
	return (
		children(navigation)
	);
}

export const Providers = memo(ProvidersFunc) as typeof ProvidersFunc;
