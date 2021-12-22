import { Authority } from '@/shared/security/authority';

const Settings = () => import('@/account/settings/settings.vue');

export default [
  {
    path: '/account/settings',
    name: 'Settings',
    component: Settings,
    meta: { authorities: [Authority.USER] },
  },
];
