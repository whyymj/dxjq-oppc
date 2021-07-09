import { buttonDistrictManagerList } from '@/utils/button'

/* eslint-disable */
const columns = {
  district: [
    { field: 'districtId', name: 'id', hide: true, nameSpan: 6, show: { type: 'hide' } },
    { field: 'parentId', name: '', hide: true, nameSpan: 6, show: { type: 'hide', value: 0 } },
    { field: 'districtName', name: '业务区域', nameSpan: 6, fixed: 'left', width: 150,
      show: { type: 'text', placeholder: '请输入区域名称' },
      rules: [{ required: true, message: '请输入区域名称', trigger: 'blur' }] },
    { field: 'areaParams', name: '行政区域', stype: 'format',
      formatFun: function(areaList, row) {
        if (row.districtId) {
          const areaName = []

          areaList && areaList.forEach(item => {
            areaName.push(item.areaName)
          })

          return '"' + areaName.join(' / ') + '"'
        } else {
          return '"共 ' + row.areaCount + ' 个区域"'
        }
      }, ispush: false },
    { field: 'userCount', name: '授权账号', width: 80, stype: 'link', ispush: false },
    { field: 'gasCount', name: '加气站', width: 80, stype: 'link', ispush: false },
    { field: 'carrierCount', name: '物流客户', width: 80, stype: 'link', ispush: false },
    { field: 'contactInfo', name: '联系人', nameSpan: 6,  stype: 'mapping', mapping: 'contactName', show: { type: 'select', obj: 'userList', mulField: { contactId: 0, contactName: 1, contactMobile: 2 }, placeholder: '请选择联系人' } },
    { field: 'useropts', stype: 'opt', ispush: false, name: '操作', fixed: 'right', width: 460, list: params => buttonDistrictManagerList(params) }
  ],
  districtLog: [
    { field: 'user', name: '操作账号', fixed: 'left' },
    { field: 'district', name: '操作业务区域' },
    { field: 'logTypeName', name: '操作类型' },
    { field: 'result', name: '操作结果' },
    { field: 'createTime', name: '操作时间' }
  ],
  districtParent: [
    { field: 'parentName', hide: true, nameSpan: 6, name: '所属父业务区域',  width: 150,
      show: { type: 'span', placeholder: '请输入父业务区域' } }
  ],
  withdraw: [
    { field: 'orgTypeName', name: '账户类型', fixed: 'left' },
    { field: 'currentQuota', name: '现行余额限定(元)' },
    { field: 'note', name: '修改说明', hide: true },
    { field: 'useropts', stype: 'opt', ispush: false, name: '操作', fixed: 'right', width: 160, list: [{ type: 'config', name: '修改' }, { type: 'list', name: '变更记录' }] }
  ],
  withdrawLog: [
    { field: 'updateDate', name: '修改时间', fixed: 'left', stype: 'format', formatFun: 'formateTData all', width: 140 },
    { field: 'updaterName', name: '修改人' },
    { field: 'updateQuota', name: '修改后(元)' },
    { field: 'note', name: '备注' }
  ]
}

export default columns
