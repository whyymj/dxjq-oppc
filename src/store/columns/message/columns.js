import file from '@/store/modules/file'
import { monthTimeArea } from '@/utils/tools'
import { buttonMessageManageList } from '@/utils/button'

const roleSelectRules = function(rule, value, callback) {
  if (value.length === 0) {
    callback(new Error('请选择一个接收角色'))
  } else {
    callback()
  }
}
const timeOptions = {
  disabledDate(time) {
    const _now = Date.now()
    const seven = 6 * 24 * 60 * 60 * 1000
    const sevenDays = _now + seven
    // 大于当前的禁止，小于7天前的禁止
    return time.getTime() < _now - 24 * 60 * 60 * 1000 || time.getTime() > sevenDays
  }
}
const columns = {
  message: [
    { field: 'id', hide: true, show: { type: 'hide', serial: 10, noshow: 1, parent: 'mcMessage' } },
    { field: 'createTime', name: '创建时间', fixed: 'left', stype: 'format', formatFun: 'formateTData all', show: { type: 'hide', parent: 'mcMessage' }, search: { type: 'date-picker', placeholder: '', findStyle: 'height: 50px;', style: 'width: 350px;', findField: 'createTime', dtime: ['00:00:00', '23:59:59'], value: (function() { const dateObj = monthTimeArea(new Date()); return [dateObj.start, dateObj.end] }()) }, currSearch: { type: 'select', subField: 'createDateName', hideName: true, obj: 'currDateSearch', value: 'createTime' } },
    { field: 'publishTime', name: '发布时间', formatFun: 'formateTData all', stype: 'format', show: { type: 'date-picker', serial: 8, parent: 'mcMessage', format: 'yyyy-MM-dd HH', valueFormat: 'yyyy-MM-dd HH:00:00', model: 'datetime', placeholder: '选择发布时间', timeOptions: timeOptions, className: 'onlyShowHour' }, detail: { type: 'span', isDisabled: true, serial: 3, formatFun: 'formateTData all', stype: 'format' } },
    { field: 'title', name: '标题', xs: 24, sm: 24, md: 24, lg: 24, xl: 24, nameSpan: 2, show: { type: 'text', serial: 1, style: 'width: 98%', placeholder: '请输入标题', parent: 'mcMessage' }, detail: { type: 'span', serial: 1, isDisabled: 'true' }, rules: [{ required: true, message: '请输入标题！', trigger: 'blur' }] },
    { field: 'keyword', hide: true, show: { type: 'hide', serial: 25 }, search: { type: 'text', placeholder: '请输入标题关键字' } },
    { field: 'content', name: '内容', xs: 24, sm: 24, md: 24, lg: 24, xl: 24, nameSpan: 2, hide: true, show: { type: 'ueditor', serial: 2, style: 'width: 98%', parent: 'mcMessage', placeholder: '请输入内容', config: file.state.fileUEditorConfig }, detail: { type: 'span', serial: 2, model: 'html', style: 'width: 97%;overflow: hidden;display: block;' }, rules: [{ required: true, message: '请输入内容！', trigger: 'blur' }] },
    { field: 'clientRoleTableList', stype: 'list-tag', ispush: false, action: { name: 'title' }, name: '接收角色', detail: { type: 'span', stype: 'format', formatFun: 'roleList', isDisabled: true, serail: 5, obj: 'roleList' } },
    { field: 'clientRoleList', hide: true, stype: 'list-tag', action: { name: 'title' }, name: '接收角色', show: { type: 'select', mulField: { clientId: 1, roleId: 0 }, serial: 3, multiple: true, obj: 'roleList', placeholder: '请选择要接收的角色' }, rules: [{ required: true, validator: roleSelectRules, trigger: 'focus' }] },
    { field: 'publishType', name: '发布方式', formatter: 'publishType', show: { type: 'select', value: '', serial: 4, obj: 'publishType', cascaderList: [{ value: 1, fields: ['publishTime'] }, { value: ' ', fields: ['publishTime'] }, { value: '', fields: ['publishTime'] }], parent: 'mcMessage', placeholder: '请选择发布类型' }, detail: { type: 'span', model: 'select', isDisabled: true, serail: 4, obj: 'publishType' }, search: { type: 'select', obj: 'searchPublishType', placeholder: '发布类型' } },
    { field: 'publishStatus', name: '发布状态', ispush: false, formatter: 'publishStatus', value: '', search: { type: 'select', obj: 'publishStatus', placeholder: '发布状态' } },
    { field: 'useropts', stype: 'opt', ispush: false, name: '操作', fixed: 'right', width: 160, list: item => buttonMessageManageList(item) }
  ]
}

export default columns
