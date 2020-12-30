import { utilsOrderStatus, utilsPayType } from '@/utils/select'

const select = {
  order: {
    payType: utilsPayType(),
    orderStatus: utilsOrderStatus(),
    currDataSearch: [{ value: 'createDate', label: '创建时间' }, { value: 'updateDate', label: '支付时间' }],
    currFieldSearch: [{ value: 'carNumber', label: '车牌号' }, { value: 'orderId', label: '订单编号' }, { value: 'carrierOrgName', label: '物流公司' }, { value: 'driverName', label: '司机姓名' }, { value: 'gasstationName', label: '加气站' }, { value: 'cashierName', label: '收银员姓名' }]
  }
}

export default select