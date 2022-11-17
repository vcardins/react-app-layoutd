import { IRoute, IPageLayout } from './';

export interface IPageConfig {
	permissions?: (string | number)[];
	routes: IRoute[];
	layout?: IPageLayout;
}
