<template>
  <div class="template-main">
    <em-table-list :tableListName="'list'" :authButtonList="authButtonList" :axios="axios" :queryCustURL="queryCustURL" :responseSuccess="response_success" :queryParam="queryParams" :mode_list="mode_list" ref="tables" :page_status="page_status" :buttonsList="buttonsList" :page_column="page_column" :select_list="select_list" @onListEvent="onListEvent" @onReqParams="onReqParams"></em-table-list>
    <el-dialog title="添加名单" :visible.sync="dialogAddVisible" width="80%" :append-to-body="true" @close="dialogClose">
      <nt-infinite-transfer v-if="dialogAddVisible"
                            :dataList="fillerList"
                            :selectedList="selectedList"
                            :primary="'orgId'"
                            :fields="'orgName'"
                            :dataTotal="fillerTotal"
                            @onload="onload"
                            @remote="remote "></nt-infinite-transfer>
       <!-- 按钮 -->
      <div class="el-del-btn-item">
        <div class="btn-item-footer">
          <el-button v-for="(btnItem, index) in formBtnList.list" :key="index" :type="btnItem.bType"
                     size="small"
                     :icon="btnItem.icon" @click="btnClickEvent(btnItem)">{{btnItem.label}}
          </el-button>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="操作日志" :visible.sync="dialogLogVisible" :width="add_edit_dialog" :append-to-body="true">
      <em-table-list v-if="dialogLogVisible" :tableListName="'logList'" :authButtonList="authButtonList" :axios="axios" :queryCustURL="queryCustURLLog" :responseSuccess="response_success" :queryParam="queryParams" :mode_list="filler_log_mode_list" ref="tablesLog" :page_status="filler_log_page_status" :page_column="filler_log_page_column" :select_list="filler_log_select_list" @onReqParams="onReqParamsLog"></em-table-list>
    </el-dialog>
  </div>
</template>
<script>
import { initVueDataOptions, custFormBtnList, callbackPagesInfo, isTypeof } from '@/utils/tools'
import { $userOrgRemoveDsFiller, $userOrgList, $userOrgAddDsFiller } from '@/service/user'
import { mapGetters } from 'vuex'
export default {
  data() {
    return initVueDataOptions(this, {
      queryCustURL: {
        list: {
          url: 'user/org/list',
          method: 'post',
          parse: {
            tableData: ['data', 'records'],
            totalCount: ['data', 'total']
          }
        },
        name: '加气站直销加气列表'
      },
      queryCustURLLog: {
        list: {
          url: 'user/direct_sales_gasstation_log/list',
          method: 'post',
          parse: {
            tableData: ['data', 'records'],
            totalCount: ['data', 'total']
          }
        },
        name: '操作日志列表'
      },
      buttonsList: [{ type: 'primary', icon: '', event: 'configLog', name: '操作日志' }, { type: 'primary', icon: '', event: 'addList', name: '添加名单' }],
      formBtnList: custFormBtnList(),
      dialogAddVisible: false,
      fillerList: [],
      fillerTotal: 0,
      selectedList: [],
      pages: {
        page: 1,
        size: 10
      },
      dialogLogVisible: false
    })
  },
  components: { },
  computed: {
    ...mapGetters({
      mode_list: 'filler_ds_mode_list',
      page_status: 'filler_ds_page_status',
      page_column: 'filler_ds_column',
      select_list: 'filler_ds_select_list',
      filler_log_mode_list: 'filler_log_mode_list',
      filler_log_page_status: 'filler_log_page_status',
      filler_log_page_column: 'filler_log_column',
      filler_log_select_list: 'filler_log_select_list',
      add_edit_dialog: 'add_edit_dialog_form',
      del_dialog: 'del_dialog_form',
      response_success: 'response_success'
    })
  },
  methods: {
    onListEvent(type, row) {
      if (type == 'remove') {
        // 移除名单
        this.removeList(row)
      } else if (type == 'addList') {
        this.dialogAddVisible = true
      } else if (type == 'configLog') {
        this.dialogLogVisible = true
      }
    },
    removeList(row) {
      this.$confirm(`确定移除 ${row.orgName} 吗？`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        $userOrgRemoveDsFiller({ orgId: row.orgId }).then(res => {
          if (res.code == 0) {
            this.$message.success('移除成功')
            this.$refs.tables.initDataList()
          }
        })
      }).catch(() => {})
    },
    onload(keyword) {
      var params = {
        page: this.pages.page,
        size: this.pages.size,
        param: {
          org: {
            orgName: keyword,
            orgType: 1,
            tradeType: 1,
            status: 0
          }
        }
      }
      $userOrgList(params).then(res => {
        this.fillerTotal = res.data.total
        this.fillerList.push(...res.data.records)
        this.pages.page++
      })
    },
    remote() {
      this.pages.page = 1
      this.fillerList = []
    },
    dialogClose() {
      this.pages.page = 1
      this.fillerList = []
      this.selectedList = []
    },
    btnClickEvent(item) {
      if (item.type == 'ok') {
        if (this.selectedList.length === 0) {
          this.$message.error('请选择要添加的加气站名单')
          return
        }
        const temp = []
        this.selectedList.forEach(item => {
          temp.push({
            orgId: item.orgId
          })
        })
        const params = [...temp]
        $userOrgAddDsFiller(params).then(res => {
          this.dialogAddVisible = false
          this.$message.success('配置成功！')
          this.$refs.tables.initDataList()
        })
      } else {
        this.dialogAddVisible = false
      }
    },
    onReqParams(type, _this, callback) {
      const params = Object.assign({}, callbackPagesInfo(_this), { param: { org: { tradeType: 2, orgType: 1 } } })
      if (isTypeof(_this.finds) === 'object') {
        for (var [k, v] of Object.entries(_this.finds)) {
          if (v !== '') params.param.org[k] = v
        }
      }
      // eslint-disable-next-line
      callback(params)
    },
    onReqParamsLog(type, _this, callback) {
      const params = Object.assign({}, callbackPagesInfo(_this), { param: {} })
      if (isTypeof(_this.finds) === 'object') {
        for (var [k, v] of Object.entries(_this.finds)) {
          if (v !== '') params.param.org[k] = v
        }
      }
      // eslint-disable-next-line
      callback(params)
    }
  }
}
</script>
