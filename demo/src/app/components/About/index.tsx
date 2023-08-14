import { ReactNode, useState } from 'react';

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle as MuiDialogTitle,
	IconButton,
	styled,
} from '@mui/material';
import { Close as CloseIcon, Info as InfoIcon } from '@mui/icons-material';

const AboutDialog = styled(Dialog)(({ theme }) => ({
	minWidth: '300px',
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

const DialogTitle = styled(MuiDialogTitle)(({ theme }) => `
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	padding: ${theme.spacing(1)} ${theme.spacing(2)};
`);


interface DialogTitleProps {
	id: string;
	children?: ReactNode;
	onClose: () => void;
}

const AboutDialogTitle = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

export const About = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton
				aria-label="open"
				onClick={handleClickOpen}
			>
				<InfoIcon color="info" />
			</IconButton>
			<AboutDialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<AboutDialogTitle id="alert-dialog-title" onClose={handleClose}>
					About
				</AboutDialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description" sx={{  textAlign: 'center', fontSize: 12 }}>
						<div>version: 1.0</div>
						<div>Copyright ErathDaily Analytics</div>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} autoFocus>
						Cancel
					</Button>
				</DialogActions>
			</AboutDialog>
		</>
	);
};
