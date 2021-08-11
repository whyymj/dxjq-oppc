import Layout from '@/views/layout/Layout'
const inImport = process.env.NODE_ENV == 'production' ? require('./_product') : require('./_development')

export default [
  {
    path: '/setting',
    name: 'setting',
    component: Layout,
    redirect: '/setting/withdraw',
    meta: { title: '配置中心' },
    children: [
      { path: 'district', component: inImport('setting/district'), name: 'district', meta: { title: '业务区域管理', icon: 'icon-gongnengguanli', noCache: false } },
      { path: 'withdraw', component: inImport('setting/withdraw'), name: 'withdraw', meta: { title: '账户余额限定', icon: 'icon-gongnengguanli', noCache: false } }
    ]
  }
]
