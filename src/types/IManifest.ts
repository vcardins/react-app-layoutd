export interface IManifest {
	$schema: string;
	theme_color: string;
	background_color: string;
	display: string;
	scope: string;
	start_url: string;
	name: string;
	short_name: string;
	description: string;
	icons: Icon[];
}

export interface Icon {
	src: string;
	sizes: string;
	type: string;
}
