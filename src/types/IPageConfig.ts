import { IRoute, IPageLayout } from './';

export interface IPageConfig<TPermission = string> {
	permissions?: TPermission[];
	routes: IRoute<TPermission>[];
	layout?: IPageLayout;
}
