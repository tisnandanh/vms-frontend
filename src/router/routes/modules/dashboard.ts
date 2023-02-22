import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard',
  meta: {
    orderNo: 11,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
};

export default dashboard;
