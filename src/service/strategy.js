import R from '@/utils/request'

// 修改液源地信息
export async function $priceUpdate (data) {
  return await R({ url: 'strategy/lng_from/update', data })
}

// 添加液源地
export async function $priceAdd (data) {
  return await R({ url: 'strategy/lng_from/add', data })
}

// 查询所有液源地
export async function $lngFormList (data) {
  return await R({ url: 'strategy/lng_from/all' })
}

// 根据gasstationId更新加气站基本信息
export async function $updateGasstation (data) {
  return await R({ url: 'strategy/gasstation/edit', data })
}

// 根据港口id,查询港口价格
export async function $configPriceList (data) {
  return await R({ url: 'strategy/carriage_price/carriagePrice/' + data, method: 'get' })
}

// 批量配置运费单价
export async function $saveConfigPriceList (data) {
  return await R({ url: 'strategy/carriage_price/save_or_update_list', data })
}

// 批量设置区域优惠金额
export async function $configAreaBenefit (data) {
  return await R({ url: 'strategy/area_benefit/set_area_benefit_list', data })
}

// 申请发布
export async function $priceRelease (data) {
  return await R({ url: 'strategy/release_manage/add', data })
}

// 审核;2-通过 3-驳回
export async function $priceReleaseAudit (data) {
  return await R({ url: 'strategy/release_manage/release_audit', data })
}

export async function $configAreaEditBenefit (data) {
  return await R({ url: 'strategy/area_benefit/update', data })
}

// 设置配置运费
export async function $configGasFreight (data) {
  return await R({ url: 'strategy/freight_config/set_freight', data })
}

// LNG提报计划-确认订单
export async function $orderConfirm (data) {
  return await R({ url: 'strategy/purchase/confirm', data })
}

// LNG提报计划-取消订单
export async function $orderCancel (data) {
  return await R({ url: 'strategy/purchase/cancel', data })
}

// LNG提报计划-订单出港
export async function $purchaseLeave(data) {
  return await R({ url: 'strategy/purchase/leave', data })
}

// LNG提报计划-订单完成
export async function $purchaseComplete(data) {
  return await R({ url: 'strategy/purchase/complete', data })
}

// 获取返利优惠列表
export async function $configRebateList(data) {
  return await R({ url: 'strategy/rebate_config/list', data })
}

// 批量配置返利优惠
export async function $saveConfigRebateList(data) {
  return await R({ url: 'strategy/rebate_config/save_or_update_list', data })
}

// 设置加气站服务费、平台服务费
export async function $configGasProfit(data) {
  return await R({ url: 'strategy/gasstation/set_profit_quota', data })
}

// 平台挂牌价计算
export async function $listingPriceAlg(data) {
  return await R({ url: 'strategy/price_config/add', data })
}

// 加气站库存调整
export async function $updateStock(data) {
  return await R({ url: 'strategy/gasstation/eidt_stock', params: data })
}
