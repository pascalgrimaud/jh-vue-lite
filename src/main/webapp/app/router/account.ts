import { Authority } from '@/shared/security/authority';

const Register = () => import('@/account/register/register.vue');
const Settings = () => import('@/account/settings/settings.vue');

export default [
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/account/settings',
    name: 'Settings',
    component: Settings,
    meta: { authorities: [Authority.USER] },
  },
];
