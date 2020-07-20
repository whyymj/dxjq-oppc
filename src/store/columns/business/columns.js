const columns = {
  state: {
    org: [
      { field: 'orgId', nameSpan: 10, name: '', stype: 'checkbox', align: 'center', fixed: 'left', width: 50 },
      { field: 'orgName', nameSpan: 10, name: '企业名称', show: { type: 'text', ou: 1, style: 'width: 90%;', placeholder: '请输入企业名称' }, search: { type: 'text', placeholder: '请输入企业名称' }, rules: [{ required: true, message: '请输入企业名称！', trigger: 'blur' }] },
      { field: 'contacts', nameSpan: 10, name: '联系人', hide: true, show: { type: 'text', ou: 1, style: 'width: 90%;', placeholder: '请输入联系人' }, rules: [{ required: true, message: '请输入联系人！', trigger: 'blur' }] },
      { field: 'mobile', nameSpan: 10, name: '联系电话', hide: true, show: { type: 'text', ou: 1, style: 'width: 90%;', placeholder: '请输入联系电话' }, rules: [{ required: true, message: '请输入联系电话！', trigger: 'blur' }] },
      { field: 'selectedOptions', nameSpan: 10, name: '所在地区', hide: true, show: { type: 'cascader', iType: 'string', ou: 1, obj: 'cascaderAddress', sign: '/', style: 'width: 90%;', placeholder: '请选择所在地区' }, rules: [{ required: true, message: '请选中所在地区！', trigger: 'blur' }] },
      { field: 'email', nameSpan: 10, name: '邮箱', hide: true, show: { type: 'text', ou: 1, style: 'width: 90%;', placeholder: '请输入邮箱' } },
      { field: 'addressDetail', nameSpan: 10, name: '详细地址', hide: true, show: { type: 'text', ou: 1, style: 'width: 90%;', placeholder: '请输入详细地址' }, rules: [{ required: true, message: '请输入详细地址！', trigger: 'blur' }] },
      { field: 'address', nameSpan: 10, name: '地址' },
      { field: 'createDate', nameSpan: 10, name: '创建时间' },
      { field: 'createrName', nameSpan: 10, name: '创建人' },
      { field: 'status', nameSpan: 10, name: '账号状态', formatter: 'status', width: 80, show: { type: 'radio', value: 0, ou: 1, obj: 'status', placeholder: '请选择账号状态' }, search: { type: 'select', obj: 'status', placeholder: '请选择账号状态' }, rules: [{ required: true, message: '请选择账号状态！', trigger: 'blur' }] },
      { field: 'legalperson', nameSpan: 10, name: '法人姓名', hide: true, show: { type: 'text', ou: 2, placeholder: '请输入法人姓名' }, rules: [{ required: true, message: '请输入法人姓名！', trigger: 'blur' }] },
      { field: 'idCardNo', nameSpan: 10, name: '身份证号码', hide: true, show: { type: 'text', ou: 2, placeholder: '请输入身份证号码' }, rules: [{ required: true, message: '请输入身份证号码！', trigger: 'blur' }] },
      { field: 'taxpayer', nameSpan: 10, name: '纳税人识别号', hide: true, show: { type: 'text', ou: 2, placeholder: '请输入纳税人识别号' }, rules: [{ required: true, message: '请输入纳税人识别号！', trigger: 'blur' }] },
      { field: 'bank', nameSpan: 10, name: '开户行', hide: true, show: { type: 'text', ou: 2, placeholder: '请输入开户行' }, rules: [{ required: true, message: '请输入开户行！', trigger: 'blur' }] },
      { field: 'account', nameSpan: 10, name: '银行账户', hide: true, show: { type: 'text', ou: 2, placeholder: '请输入银行账户' }, rules: [{ required: true, message: '请输入银行账户！', trigger: 'blur' }] },
      { field: 'useropts', stype: 'opt', ispush: false, name: '操作', fixed: 'right', list: [{ type: 'edit', name: '编辑' }, { type: 'detail', name: '详情' }] }
    ]
  }
}

export default columns
