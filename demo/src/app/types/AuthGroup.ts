import { UserRoles } from './UserRoles';

export const AuthGroups = {
	Admin: [UserRoles.Admin],
	Editor: [UserRoles.Admin, UserRoles.Editor],
	User: [UserRoles.Admin, UserRoles.User],
	Guest: [] as UserRoles[],
};
