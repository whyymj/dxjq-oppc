import Layout from '@/views/layout/Layout'
const _import = process.env.NODE_ENV == 'prod' ? require('./_product') : require('./_development')

export default [
  {
    path: '/mine',
    name: 'mine',
    component: Layout,
    redirect: '/mine/index',
    meta: { title: '个人中心' },
    children: [
      { path: 'index', component: _import('mine/index'), name: 'mine', meta: { title: '个人信息', icon: 'icon-gongnengguanli', noCache: false } },
      { path: 'editPassword', component: _import('mine/editPassword'), name: 'editPassword', meta: { title: '修改密码', icon: 'icon-gongnengguanli', noCache: false } }
    ]
  }
]
