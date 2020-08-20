const columns = {
  state: {
    servicePrice: [
      { field: 'gasstationId', name: '', stype: 'checkbox', align: 'center', fixed: 'left', width: 50 },
      { field: 'gasstationName', stype: 'mapping', name: '加气站名称', mapping: 'gasstationName', search: { type: 'text', placeholder: '请输入加气站名称' } },
      { field: 'sumGasQty', name: '加气量汇总(公斤)' },
      { field: 'sumServiceFee', name: '服务费汇总(公斤)' },
      { field: 'useropts', stype: 'opt', ispush: false, name: '操作', fixed: 'right', width: 110, list: [{ type: 'bill', name: '对账单' }] }
    ],
    gasPrice: [
      { field: 'carrierOrgId', name: '', stype: 'checkbox', align: 'center', fixed: 'left', width: 50 },
      { field: 'carrierOrgName', stype: 'mapping', name: '公司名称', mapping: 'carrierOrgName', search: { type: 'text', placeholder: '请输入公司名称' } },
      { field: 'sumRechargeAmount', name: '充值金额汇总(元)' },
      { field: 'sumGasQty', name: '加气量(公斤)' },
      { field: 'sumAmount', name: '加气金额汇总(元)' },
      { field: 'sumDiscountAmount', name: '优惠金额汇总(元)' },
      { field: 'useropts', stype: 'opt', ispush: false, name: '操作', fixed: 'right', width: 210, list: [{ type: 'recharge', name: '充值账单' }, { type: 'filling', name: '加气账单' }, { type: 'truck', name: '卡车汇总' }] }
    ]
  }
}

export default columns
