export const getNavId = (key: string, suffix?: string) => `nav-item-${key}${suffix ? `-${suffix}` : ''}`;
