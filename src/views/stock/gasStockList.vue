<template>
  <div class="template-main">
    <nt-text-info :dataList="dataList" :rowData="totalInfo" :headerStyle="'top: 108px;'"></nt-text-info>
    <em-table-list :tableListName="'gasStockList'" ref="tables" :authButtonList="authButtonList" :axios="axios" :buttonsList="buttonsList" :queryCustURL="queryCustURL" :responseSuccess="response_success" :queryParam="queryParams" :mode_list="mode_list" :page_status="page_status" :page_column="page_column" :select_list="select_list" @onListEvent="onListEvent" @onReqParams="onReqParams"></em-table-list>
    <el-dialog title="库存记录" :visible.sync="dialogRecordVisible" width="80%" :append-to-body="true">
      <em-table-list v-if="dialogRecordVisible" :tableListName="'gasRecordList'" :custTableTitle="'库存记录'" ref="recordList" :buttonsList="buttonsListRecord" :axios="axios" :queryCustURL="queryCustURLRecord" :responseSuccess="response_success" :queryParam="queryParams" :mode_list="mode_list" :page_status="page_status" :page_column="page_column_record" :select_list="select_list" @onListEvent="onListEvent" @onReqParams="onReqParamsRecords"></em-table-list>
    </el-dialog>
    <el-dialog title="库存调整" :visible.sync="dialogUpdateStockVisible" width="80%" :append-to-body="true">
      <nt-form ref="stock" v-if="dialogUpdateStockVisible" :rowData="updateRow" :modeList="{}" :pageColumn="page_column_update" :selectList="select_list" :axios="axios" :queryURL="queryCustURL" :responseSuccess="response_success" @onListEvent="onFormEvent"></nt-form>
    </el-dialog>
    <el-dialog title="提报限制" :visible.sync="dialogSubmitLimitVisible" width="80%" :append-to-body="true">
      <nt-form ref="submitLimit" v-if="dialogSubmitLimitVisible" :rowData="submitRow" :modeList="{}" :pageColumn="page_column_gasStationSubmitLimit" :selectList="select_list_gasStationSubmitLimit" :axios="axios" :queryURL="queryCustURL" :responseSuccess="response_success" @onListEvent="onslFormEvent"></nt-form>
    </el-dialog>
    <el-dialog title="限制记录" :visible.sync="dialogLimitVisible" width="80%" :append-to-body="true">
      <em-table-list v-if="dialogLimitVisible" :tableListName="'gasLimitList'" :custTableTitle="'库存记录'" ref="limitList" :axios="axios" :queryCustURL="queryCustURLLimit" :responseSuccess="response_success" :queryParam="queryParamsLimit" :mode_list="mode_list" :page_status="page_status" :page_column="page_column_limit" :select_list="select_list_limit" @onReqParams="onReqParams"></em-table-list>
    </el-dialog>
    <el-dialog title="库存详情" :visible.sync="dialogStockDetailVisible" width="80%" :append-to-body="true">
      <nt-form ref="stockDetail" v-if="dialogStockDetailVisible" :rowData="stockDetailRow" :modeList="{}" :pageColumn="page_column_stock_detail" :selectList="select_list" :axios="axios" :queryURL="queryCustURL" :responseSuccess="response_success" @onListEvent="onStockDetailFormEvent"></nt-form>
    </el-dialog>
  </div>
</template>
<script>
import { initVueDataOptions, queryDefaultParams, custFormBtnList, formateTData, isTypeof, callbackPagesInfo, exportBlobToFiles } from '@/utils/tools'
import { $updateStock, $strategyGasstationLimitStatusLogAdd, $strategyGasstationLimitStatusLogGetLatest, $strategyGasstoredsum, $strategyStockLogDownload } from '@/service/strategy'
import { $gasstationWeekAverageQtyFind } from '@/service/settle'
import { mapGetters } from 'vuex'

export default {
  name: 'gasStockList',
  data() {
    return initVueDataOptions(this, {
      queryCustURL: {
        list: {
          url: 'strategy/gasstation/gasstation_store_list_final',
          method: 'post',
          parse: {
            tableData: ['data', 'records'],
            totalCount: ['data', 'total']
          }
        },
        name: '加气站库存查询'
      },
      queryCustURLRecord: {
        list: {
          url: 'strategy/stock_log/page_list_download',
          method: 'post',
          parse: {
            tableData: ['data', 'records'],
            totalCount: ['data', 'total']
          }
        },
        name: '入库记录'
      },
      queryCustURLLimit: {
        list: {
          url: 'strategy/gasstation_limit_status_log/page_list',
          method: 'post',
          parse: {
            tableData: ['data', 'records'],
            totalCount: ['data', 'total']
          }
        },
        name: '限制记录'
      },
      buttonsList: [{ type: 'primary', icon: '', event: 'configPlanLimit', name: '配置计划提报限制' }, { type: 'primary', icon: '', event: 'configGasFillLimit', name: '配置加气限制' }],
      buttonsListRecord: [{ type: 'primary', icon: '', event: 'exportRecord', name: '导出' }],
      queryParams: Function,
      recordRow: '',
      dialogRecordVisible: false,
      updateRow: {},
      dialogUpdateStockVisible: false,
      dialogSubmitLimitVisible: false,
      submitRow: {},
      dialogLimitVisible: false,
      dialogStockDetailVisible: false,
      stockDetailRow: {},
      dataList: [{
        name: '加气站数量：',
        field: 'gasStationSize',
        unit: ' 个'
      }, {
        name: '库存总量：',
        field: 'stockSum',
        unit: ' 公斤'
      }],
      totalInfo: { gasStationSize: 0, stockSum: 0 },
      recordParams: {}
    })
  },
  computed: {
    ...mapGetters({
      mode_list: 'filler_gasStockList_mode_list',
      page_status: 'filler_gasStockList_page_status',
      page_column: 'filler_gasStockList_column',
      page_column_record: 'filler_gasStockListRecord_column',
      page_column_limit: 'limitList_column',
      page_column_stock_detail: 'stockDetail_column',
      select_list_limit: 'limitList_select_list',
      page_column_update: 'filler_gas_update_stock_column',
      select_list: 'filler_gasStockList_select_list',
      page_column_gasStationSubmitLimit: 'gasStationSubmitLimit_column',
      select_list_gasStationSubmitLimit: 'gasStationSubmitLimit_select_list',
      add_edit_dialog: 'dialog_table',
      del_dialog: 'del_dialog_form',
      response_success: 'response_success'
    })
  },
  created: function () {},
  methods: {
    onListEvent(type, row) {
      if (type === 'list') {
        this.recordRow = row
        this.dialogRecordVisible = true
      } else if (type == 'configPlanLimit') {
        this.$router.push('./fillerGasStockList/planSubmitLimitConfig')
      } else if (type == 'configGasFillLimit') {
        this.$router.push('./fillerGasStockList/gasLimitConfig')
      } else if (type == 'update') {
        row._btn = custFormBtnList()
        this.updateRow = row
        this.dialogUpdateStockVisible = true
      } else if (type == 'submitLimit') {
        row._btn = custFormBtnList()
        this.submitRow = row
        this.getLastedLimit(row)
        this.dialogSubmitLimitVisible = true
      } else if (type == 'limitList') {
        this.queryParamsLimit = queryDefaultParams(this, { type: 2, key: 'param', value: { gasstationId: row.gasstationId } })
        this.dialogLimitVisible = true
      } else if (type == 'statusStock') {
        this.stockDetailRow._btn = custFormBtnList(2)
        this.stockDetailRow.nickName = row.nickName
        this.stockDetailFind(row)
      } else if (type == 'exportRecord') {
        this.exportRecordFun()
      }
    },
    exportRecordFun() {
      this.$confirm('确定下载吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        $strategyStockLogDownload({ ...this.recordParams.param }).then(res => {
          const fileName = '库存记录_' + Date.parse(new Date()) + '.xlsx'
          exportBlobToFiles(res, fileName)
        })
      })
    },
    onFormEvent(btnObj, row) {
      if (btnObj.type == 'ok') {
        this.$refs.stock.$children[0].validate(valid => {
          if (valid) {
            const params = {
              gasstationId: row.gasstationId,
              increase: Number(row.increase),
              note: row.note
            }

            $updateStock(params).then(res => {
              this.$message.success('成功！')

              this.$refs.tables.initDataList()
            })
          }
        })
      }
      this.dialogUpdateStockVisible = false
    },
    onslFormEvent(btnObj, row) {
      // 提报限制
      if (btnObj.type == 'ok') {
        this.$refs.submitLimit.$children[0].validate(valid => {
          if (valid) {
            const params = {
              gasstationId: row.gasstationId,
              note: row.note,
              status: row.status
            }

            $strategyGasstationLimitStatusLogAdd(params).then(res => {
              this.$message.success('成功！')
              this.$refs.tables.initDataList()
              this.dialogSubmitLimitVisible = false
            })
          }
        })
      } else {
        this.dialogSubmitLimitVisible = false
      }
    },
    onStockDetailFormEvent() {
      this.dialogStockDetailVisible = false
    },
    getLastedLimit(row) {
      // 获取单个加气站最新提报限制
      const params = { gasstationId: row.gasstationId }
      $strategyGasstationLimitStatusLogGetLatest(params).then(res => {
        if (res.data) {
          res.data.status = res.data.status.toString()
          Object.assign(this.submitRow, res.data)
        }
      })
    },
    stockDetailFind(row) {
      // 获取加气站日均销量存量详情
      const params = { gasstationId: row.gasstationId, curDate: formateTData(Date.now(), 'date') }
      $gasstationWeekAverageQtyFind(params).then(res => {
        if (res.data) {
          this.dialogStockDetailVisible = true
          Object.assign(this.stockDetailRow, res.data)
        }
      })
    },
    initTotalData(param) {
      $strategyGasstoredsum(param).then(res => {
        this.totalInfo = res.data
      })
    },
    onReqParams(type, _this, callback) {
      const params = Object.assign({}, callbackPagesInfo(_this), { param: {} })
      if (isTypeof(_this.finds) === 'object') {
        for (var [k, v] of Object.entries(_this.finds)) {
          if (v !== '') params.param[k] = v
        }
      }
      // eslint-disable-next-line standard/no-callback-literal
      callback(params)
      this.initTotalData(params.param)
    },
    onReqParamsRecords(type, _this, callback) {
      const params = Object.assign({}, callbackPagesInfo(_this), { param: { createDateFrom: '', createDateTo: '', gasstationId: this.recordRow.gasstationId } })
      this.recordParams = params
      if (isTypeof(_this.finds) === 'object') {
        for (var [k, v] of Object.entries(_this.finds)) {
          if (k == 'createDate') {
            if (_this.finds.createDate === null) {
              params.param.createDateFrom = ''
              params.param.createDateTo = ''
            } else {
              params.param.createDateFrom = v[0]
              params.param.createDateTo = v[1]
            }
          } else {
            if (v !== '') params.param[k] = v
          }
        }
      }
      // eslint-disable-next-line standard/no-callback-literal
      callback(params)
      this.initTotalData(params.param)
    }
  }
}
</script>
