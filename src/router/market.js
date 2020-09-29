import Layout from '@/views/layout/Layout'
const _import = process.env.NODE_ENV == 'prod' ? require('./_product') : require('./_development')

export default [
  {
    path: '/market',
    name: 'market',
    component: Layout,
    redirect: '/market/index',
    meta: { title: '营销管理' },
    children: [
      { path: 'index', component: _import('market/index'), name: 'market', meta: { title: '专项优惠配置', icon: 'icon-gongnengguanli', noCache: false } },
      { path: 'cost', component: _import('market/cost'), name: 'cost', meta: { title: '长城奥扬费用', icon: 'icon-gongnengguanli', noCache: false } },
      { path: 'profit', component: _import('market/profit'), name: 'profit', meta: { title: '加气站利润', icon: 'icon-gongnengguanli', noCache: false } },
      { path: 'marketingManager', component: _import('market/marketingManager'), name: 'marketingManager', meta: { title: '营销合作经理配置', icon: 'icon-gongnengguanli', noCache: false } },
      { path: 'sourceConfig', component: _import('market/sourceConfig'), name: 'sourceConfig', meta: { title: '液源地配置', icon: 'icon-gongnengguanli', noCache: false } }
    ]
  }
]
