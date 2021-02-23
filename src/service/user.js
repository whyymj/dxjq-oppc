import R from '@/utils/request'

export async function $resetPassword (data) {
  return await R({ url: 'user/user/reset_password', data })
}

export async function $editPassword (data) {
  return await R({ url: 'user/user/edit_password', data })
}

export async function $userFind (data) {
  return await R({ url: '/user/user/find', data })
}

export async function $userOrgAdd (data) {
  return await R({ url: 'user/org/add', data })
}

export async function $userOrgEdit (data) {
  return await R({ url: 'user/org/edit', data })
}

export async function $userEdit (data) {
  return await R({ url: '/user/user/edit', data })
}
export async function $userRoleList (data) {
  return await R({ url: '/user/role/list', data })
}

export async function $userUserList (data) {
  return await R({ url: 'user/user/list', data })
}
export async function $userOrgFind (data) {
  return await R({ url: 'user/org/find', data })
}

export async function $importCarrierDownloadFile (data) {
  return await R({ url: 'user/import/download_user_tpl', method: 'get', params: data, responseType: 'blob' })
}

export async function $exportCarrierUserFile (data) {
  return await R({ url: 'user/import/import_user', method: 'POST', data: data.file })
}

export async function $userOrgList (data) {
  return await R({ url: 'user/org/list', method: 'POST', data })
}

export async function $userOrgPicList (data) {
  return await R({ url: 'user/org_pic/find_org_pic_list', method: 'POST', data })
}

export async function $userOrgAddPic (data) {
  return await R({ url: 'user/org_pic/add', method: 'POST', data })
}

export async function $userOrgDeletePic (data) {
  return await R({ url: 'user/org_pic/delete_org_pic', method: 'POST', data })
}

export async function $userRegisterExport (data) {
  return await R({ url: 'user/register_manage/export', method: 'POST', data, responseType: 'blob' })
}

// 菜单树
export async function $menuTree (data) {
  return await R({ url: 'user/menu/menu_tree', method: 'POST', data })
}

// 菜单树
export async function $menuListTree (data) {
  return await R({ url: 'user/menu/menu_list', method: 'POST', data })
}

// 菜单增加
export async function $menuAdd (data) {
  return await R({ url: 'user/menu/add', method: 'POST', data })
}

// 按钮增加
export async function $buttonAdd (data) {
  return await R({ url: 'user/button/add', method: 'POST', data })
}

// 根据菜单获取button列表
export async function $menuToButtonList (data) {
  return await R({ url: 'user/button/button_list', method: 'POST', data })
}

// 根据角色配置权限
export async function $roleToMenuList (data) {
  return await R({ url: 'user/role_menu/add_list', method: 'POST', data })
}
