import { memo } from 'react';
import { IProvidersProps } from 'react-app-layouts';

const ProvidersFunc = ({ children, navigation }: IProvidersProps) => (
	children(navigation)
);

export const Providers = memo(ProvidersFunc) as typeof ProvidersFunc;
