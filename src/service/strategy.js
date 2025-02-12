import R from '@/utils/request'

// 修改液源地信息
export async function $priceUpdate(data) {
  return await R({ url: 'strategy/lng_from/update', data })
}

// 添加液源地
export async function $priceAdd(data) {
  return await R({ url: 'strategy/lng_from/add', data })
}

// 查询所有液源地
export async function $lngFormList(data) {
  return await R({ url: 'strategy/lng_from/all' })
}

// 根据gasstationId更新加气站基本信息
export async function $updateGasstation(data) {
  return await R({ url: 'strategy/gasstation/edit', data })
}

// 根据gasstationId更新加气站基本信息
export async function $updateGasstationPriceConfig(data) {
  return await R({ url: 'strategy/price_config/select_harbour', data })
}

// 根据港口id,查询港口价格
export async function $configPriceList(data) {
  return await R({ url: 'strategy/carriage_price/carriagePrice/' + data, method: 'get' })
}

// 批量配置运费单价
export async function $saveConfigPriceList(data) {
  return await R({ url: 'strategy/carriage_price/save_or_update_list', data })
}

// 批量设置区域优惠金额
export async function $configAreaBenefit(data) {
  return await R({ url: 'strategy/area_benefit/set_area_benefit_list', data })
}

// 申请发布
export async function $priceRelease(data) {
  return await R({ url: 'strategy/release_manage/add', data })
}

// 审核;2-通过 3-驳回
export async function $priceReleaseAudit(data) {
  return await R({ url: 'strategy/release_manage/release_audit', data })
}

export async function $configAreaEditBenefit(data) {
  return await R({ url: 'strategy/area_benefit/update', data })
}

// 设置配置运费
export async function $configGasFreight(data) {
  return await R({ url: 'strategy/freight_config/set_freight', data })
}

// LNG提报计划-确认订单
export async function $strategyOrderConfirm(data) {
  return await R({ url: 'strategy/purchase/confirm', data })
}

// LNG提报计划-取消订单
export async function $strategyOrderCancel(data) {
  return await R({ url: 'strategy/purchase/cancel', data })
}

// LNG提报计划-订单出港
export async function $strategyPurchaseLeave(data) {
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

// 增加卡车
export async function $strategyTruckAdd(data) {
  return await R({ url: 'strategy/truck/add', data })
}

// 获取卡车信息
export async function $strategyTruckInfo(data) {
  return await R({ url: 'strategy/truck/find', data })
}

// 获取绑定卡车的司机list
export async function $strategyDriverList(data) {
  return await R({ url: 'strategy/driver/list_all', data })
}

// 卡车增加司机
export async function $strategyTruckDriverAdd(data) {
  return await R({ url: 'strategy/truck_driver/add', data })
}

// 卡车删除司机
export async function $strategyTruckDriverDel(data) {
  return await R({ url: 'strategy/truck_driver/del', data })
}

// 下载卡车信息list
export async function $importDownloadFile(data) {
  return await R({ url: 'strategy/import/download_truck_tpl', method: 'get', params: data, responseType: 'blob' })
}

// 导入卡车数据
export async function $exportDataFile(data) {
  return await R({ url: 'strategy/import/import_truck', method: 'POST', data: data.file })
}

// 设置气价调节
export async function $gasstationUpdatePrice(data) {
  return await R({ url: 'strategy/gasstation/gas_price_edit', method: 'POST', data })
}

// LNG变更处理
export async function $strategyModifyPurchase(data) {
  return await R({ url: 'strategy/purchase/modify_handle', method: 'POST', data })
}

// LNG变更处理
export async function $strategyDuplicatePurchase(data) {
  return await R({ url: 'strategy/purchase_duplicate/find', method: 'POST', data })
}

// LNG核对
export async function $strategyCheckReachPurchase(data) {
  return await R({ url: 'strategy/purchase/check_reach', method: 'POST', data })
}

// LNG异常处理
export async function $strategyExceptionPurchase(data) {
  return await R({ url: 'strategy/purchase_exception/exception_handle', method: 'POST', data })
}

// LNG获取异常订单信息
export async function $strategyExceptionFindPurchase(data) {
  return await R({ url: 'strategy/purchase_exception/find', method: 'POST', data })
}

// LNG详情信息
export async function $strategyPurchaseFind(data) {
  return await R({ url: 'strategy/purchase/find', method: 'POST', data })
}

// LNG下载入库明细
export async function $strategyPurchaseExport(data) {
  return await R({ url: 'strategy/purchase/download_lng', method: 'POST', data, responseType: 'blob' })
}

// 某个账期下加气站入库明细汇总
export async function $strategyPurchaseStockTotal(data) {
  return await R({ url: 'strategy/stock_log/get_store_total', data })
}
// 下载某个账期的入库明细
export async function $strategyPurchaseDownloadStock(data) {
  return await R({ url: 'strategy/purchase/download_store_list', data, responseType: 'blob' })
}
// 实时发布接口
export async function $strategyPublishPrice(data) {
  return await R({ url: 'strategy/release_manage/publish', data })
}

// 获取加气站经纬度信息
export async function $strategyGasstationDistrictList(data) {
  return await R({ url: 'strategy/gasstation/get_district_gasstation_list', data })
}

// 获取物流公司信息
export async function $strategyCarrierInfo(data) {
  return await R({ url: 'strategy/carrier/find', data })
}

// lng配置计划提报限制列表
export async function $strategyPurchaseLimitConfigList(data) {
  return await R({ url: 'strategy/purchase_limit_config/list', data })
}

// lng配置计划提报限制修改
export async function $strategyGasstationLimitStatusLogAdd(data) {
  return await R({ url: 'strategy/gasstation_limit_status_log/add', data })
}

// 获取单个加气站最新提报限制
export async function $strategyGasstationLimitStatusLogGetLatest(data) {
  return await R({ url: 'strategy/gasstation_limit_status_log/get_latest', data })
}

// lng 计划提报详情
export async function $purchaseProposeDetailFind(data) {
  return await R({ url: 'strategy/purchase_propose_detail/find', data })
}

// lng 计划提报详情
export async function $plcSaveOrUpdateList(data) {
  return await R({ url: 'strategy/purchase_limit_config/save_or_update_list', data })
}

// 关闭预警
export async function $strategyCarrierWarnClose (data) {
  return await R({ url: 'strategy/carrier/warn/close', data })
}

// 配置预警
export async function $strategyCarrierWarnConfig (data) {
  return await R({ url: 'strategy/carrier/warn/config', data })
}
// 加气站列表
export async function $strategyGasstationStoreList (data) {
  return await R({ url: 'strategy/gasstation/gasstation_store_list_final', data })
}
// 批量配置
export async function $strategyGasLimitAdd (data) {
  return await R({ url: 'strategy/gas_limit_config_log/add', data })
}
// 加气站数量库存总和
export async function $strategyGasstoredsum (data) {
  return await R({ url: 'strategy/gasstation/gasstation_store_list_sum', data })
}
// 返现开关查询
export async function $strategyCashbackStatus (data) {
  return await R({ url: 'strategy/system_config/find_cashback_switch', data })
}
// 返现开关修改
export async function $strategyCashbackUpdateStatus (data) {
  return await R({ url: 'strategy/system_config/update_by_Name', data })
}
// 查询返现规则
export async function $strategyCashbackRulesList (data) {
  return await R({ url: 'strategy/cashback_config/list', data })
}
// 修改返现规则
export async function $strategyCashbackUpdateRules (data) {
  return await R({ url: 'strategy/cashback_config/batch_update', data })
}
// 获取物流公司下加气站数量
export async function $strategyCarrierRebateGasNum (data) {
  return await R({ url: 'strategy/carrier_gasstation_rebate/carrier_gasstation_num', data })
}
// 获取物流公司专享优惠列表
export async function $strategyCarrierRebateCarrierPage (data) {
  return await R({ url: 'strategy/carrier_rebate/carrier_page', data })
}
// 添加物流公司专项优惠
export async function $strategyCarrierRebateAddCarriers (data) {
  return await R({ url: 'strategy/carrier_rebate/add_carriers', data })
}
// 关闭物流公司专项优惠
export async function $strategyCarrierRebateUpdate (data) {
  return await R({ url: 'strategy/carrier_rebate/update', data })
}
// 添加物流公司在多个加气站的专项优惠
export async function $strategyCarrierRebateAddGasstations (data) {
  return await R({ url: 'strategy/carrier_gasstation_rebate/add_gasstations', data })
}
// 关闭物流公司在加气站的专项优惠
export async function $strategyCarrierGasstationRebateDelete (data) {
  return await R({ url: 'strategy/carrier_gasstation_rebate/delete', data })
}
// 修改物流公司在加气站的专项优惠
export async function $strategyCarrierGasstationRebateUpdate (data) {
  return await R({ url: '/strategy/carrier_gasstation_rebate/update', data })
}
// 下载库存变动日志列表,财务导出专用
export async function $strategyStockLogDownload (data) {
  return await R({ url: 'strategy/stock_log/download_stock_log', method: 'POST', data, responseType: 'blob' })
}
// 中石化 | 长城奥扬调价
export async function $priceConfigPlan (url, data) {
  return await R({ url, data })
}

// 获取大象科技利润
export async function $getPlatformProfit (url) {
  return await R({ url })
}

// 订单查询
export async function $getMarketStander (data) {
  return await R({ url: 'strategy/price_config_market/list_all', data })
}


export async function $getMarketSale (data) {
  return await R({ url: 'strategy/price_config_market/list', data })
}

export async function $saleAuditType (data) {
  return await R({ url: 'strategy/price_config_market/edit_audit_type', data })
}

export async function $saleAuditExcute (data) {
  return await R({ url: 'strategy/price_config_market/audit', data })
}


export async function $getMarketLog (data) {
  return await R({ url: 'strategy/price_config_market/list_log', data })
}

export async function $getMarketDiffStander (data) {
  return await R({ url: 'strategy/price_config_market_diff/list', data })
}
export async function $getMarketDiffStanderLog (data) {
  return await R({ url: 'strategy/price_config_market_diff/list_log', data })
}

export async function $getMarketDiff (data) {
  return await R({ url: 'strategy/price_config_market_undiff/list', data })
}
export async function $getMarketDiffLog (data) {
  return await R({ url: 'strategy/price_config_market_undiff/list_log', data })
}
export async function $getMarketUnDiffUpdate (data) {
  return await R({ url: 'strategy/price_config_market_undiff/update', data })
}


export async function $getMarketDiffDel (data) {
  return await R({ url: 'strategy/price_config_market_undiff/remove', data })
}
export async function $getMarketDiffAdd (data) {
  return await R({ url: 'strategy/price_config_market_undiff/add', data })
}

export async function $getMarketPriceUpdate (data) {
  return await R({ url: 'strategy/price_config_market_diff/update', data })
}

// 下载加注机卡模版文件
export async function $strategyDownloadCardFile (data) {
  return await R({ url: 'strategy/inventory_card/download_tpl', method: 'get', params: data, responseType: 'blob' })
}

// 下载加注机卡确认导入
export async function $strategyCardConfirmImport (data) {
  return await R({ url: 'strategy/inventory_card/confirm_import', data })
}

// 盈亏数据总和
export async function $strategyInventorySum (data) {
  return await R({ url: 'strategy/inventory_adjust/sum', data })
}

// 盈亏数据模版文件
export async function $strategyDownloadLossFile (data) {
  return await R({ url: 'strategy/inventory_adjust/download_tpl', method: 'get', params: data, responseType: 'blob' })
}

// 盈亏数据确认导入
export async function $strategyLossConfirmImport (data) {
  return await R({ url: 'strategy/inventory_adjust/confirm_import', data })
}

// 盈亏数据模版文件
export async function $strategyDownloadStevedoreFile (data) {
  return await R({ url: 'strategy/inventory_truck_in/download_truckin_tpl', method: 'get', params: data, responseType: 'blob' })
}

// 盈亏数据确认导入
export async function $strategyStevedoreConfirmImport (data) {
  return await R({ url: 'strategy/inventory_truck_in/upload_confirm', data })
}

// 获取加气站列表
export async function $strategyGetStationList (data) {
  return await R({ url: 'strategy/inventory_data/get_station', method: 'get', params: data })
}

// 加注机全量模版文件
export async function $strategyDownloadOutFile (data) {
  return await R({ url: 'strategy/inventory_out_all/download_out_all_tpl', method: 'get', params: data, responseType: 'blob' })
}

// 加注机全量数据确认导入
export async function $strategyOutConfirmImport (data) {
  return await R({ url: 'strategy/inventory_out_all/upload_confirm', data })
}

// 三方模版文件
export async function $strategyDownloadSFFile (data) {
  return await R({ url: 'strategy/inventory_out_third/download_out_third_tpl', method: 'get', params: data, responseType: 'blob' })
}

// 三方数据确认导入
export async function $strategySFConfirmImport (data) {
  return await R({ url: 'strategy/inventory_out_third/upload_confirm', data })
}

// 动态数据统计
export async function $strategyDyncDayStatisticsData (data) {
  return await R({ url: 'strategy/inventory_day_statistics/get_month_data', data })
}

// 动态数据统计-数据导出
export async function $strategyDyncDayExportData (data) {
  return await R({ url: 'strategy/inventory_day_statistics/export_data', data, responseType: 'blob' })
}

// 动态数据单日统计
export async function $strategyDyncDayStatisticsItemData (data) {
  return await R({ url: 'strategy/inventory_day_statistics/get_daily_data', data })
}

// 查询站的运营监控汇总
export async function $strategyFlagMonitorSum (data) {
  return await R({ url: 'strategy/flag/monitor/sum', data })
}

// 加气站当日时段销量
export async function $strategyCurrentSales(data) {
  return await R({ url: 'strategy/flag_smart_data/daytime_sales', data })
}

// 智慧数据经营趋势
export async function $strategySmartOperate(data) {
  return await R({ url: 'strategy/flag_smart_data/get_smart_operate', data })
}

// 查询站的气价监控信息,站id必传
export async function $strategyPriceInfo(data) {
  return await R({ url: 'strategy/flag/price/get_price_info', data })
}

// 重新计算盘盈亏,站id必传
export async function $strategyCalInfo(data) {
  return await R({ url: 'strategy/flag/adjust/cal', data })
}

// 智慧数据加气站当日时段销量
export async function $strategyDaytimeSales(data) {
  return await R({ url: 'strategy/flag_smart_data/daytime_sales', data })
}

// 智慧数据动态库存
export async function $strategySmartInventory(data) {
  return await R({ url: 'strategy/flag_smart_data/get_smart_inventory', data })
}

// 查询站的设备监控列表,站id必传
export async function $strategyMonitorInfo(data) {
  return await R({ url: 'strategy/flag/device/get_monitor_list', data })
}

export async function $excelOrderDownload (data) {
  return await R({ url: 'strategy/flag_order/export_order', data, responseType: 'blob' })
}

// 查询站的当日概况信息,只传站id即可
export async function $strategyCurrentStationInfo(data) {
  return await R({ url: 'strategy/flag_station_info/get_overview', data })
}

// 查询站的信息，站名、对接码、交班时间、站康分,只传站id即可
export async function $strategyStationInfo(data) {
  return await R({ url: 'strategy/flag_station_info/get_station_info', data })
}
