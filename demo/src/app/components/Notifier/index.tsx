import { ReactNode, FC } from 'react';
import { useSnackbar, VariantType, WithSnackbarProps, OptionsObject, SnackbarAction } from 'notistack';
import { Button } from '@mui/material';

interface IProps {
	setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

const InnerSnackbarConfigurator: FC<IProps> = (props: IProps) => {
	props.setUseSnackbarRef(useSnackbar());
	return null;
};

let useSnackbarRef: WithSnackbarProps;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
	useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarConfigurator = () => (
	<InnerSnackbarConfigurator setUseSnackbarRef={setUseSnackbarRef} />
);

export type NotifierOptions = OptionsObject & {
	actions?: SnackbarAction[];
	messageId?: string;
	dismissId?: string;
};

const messenger = (variant: VariantType = 'default') =>
	(msg: string | string[] | ReactNode, options?: NotifierOptions) => {
		let action = options?.action;

		if (!action && options?.persist) {
			action = (key) => (
				<Button
					id={options?.dismissId}
					size="small"
					onClick={() => useSnackbarRef.closeSnackbar(key)}
				>
					Dismiss
				</Button>
			);
		}

		const getWrapper = (message: ReactNode | string[]) => {
			const props = Object.assign(
				{ id: options?.messageId },
				Array.isArray(message) ? { style: { display: 'flex', flexDirection: 'column' } } : {},
			) as any;
			const content = !Array.isArray(msg)
				? msg
				: (msg as string[]).map((m) => <span key={m}>{m}</span>);

			return (
				<div {...props}>{content}</div>
			);
		};

		useSnackbarRef.enqueueSnackbar(getWrapper(msg),
			{
				...options,
				variant,
				action,
			},
		);
	};

export const notifier = {
	info: messenger('info'),
	success: messenger('success'),
	warning: messenger('warning'),
	error: messenger('error'),
	toast: messenger,
};
