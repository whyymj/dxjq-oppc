<template>
  <div class="template-main">
    <em-table-list :tableListName="'inventoryManager'" :authButtonList="authButtonList" :axios="axios" :queryCustURL="queryCustURL" :responseSuccess="response_success" :queryParam="queryParams" :mode_list="mode_list" :page_status="page_status" :page_column="page_column" :select_list="select_list" @onListEvent="onListEvent" @onReqParams="onReqParams"></em-table-list>
  </div>
</template>
<script>
import { initVueDataOptions, queryDefaultParams, callbackPagesInfo } from '@/utils/tools'
import { mapGetters } from 'vuex'

export default {
  name: 'inventoryManager',
  data() {
    return initVueDataOptions(this, {
      queryCustURL: {
        list: {
          url: 'pay/transfer_order/list',
          method: 'post',
          parse: {
            tableData: ['data', 'records'],
            totalCount: ['data', 'total']
          }
        },
        name: '圈存管理'
      },
      queryParams: queryDefaultParams(this, { type: 2, key: 'param', value: { orgType: 0 } })
    })
  },
  computed: {
    ...mapGetters({
      mode_list: 'carrier_inventoryManager_mode_list',
      page_status: 'carrier_inventoryManager_page_status',
      page_column: 'carrier_inventoryManager_column',
      select_list: 'carrier_inventoryManager_select_list',
      add_edit_dialog: 'add_edit_dialog_form',
      del_dialog: 'del_dialog_form',
      response_success: 'response_success'
    })
  },
  created: function () {},
  methods: {
    onListEvent(type, row) {},
    onReqParams(type, _this, callback) {
      const params = Object.assign({}, callbackPagesInfo(_this), { param: { orgType: 0 } })

      // eslint-disable-next-line standard/no-callback-literal
      callback(params)
    }
  }
}
</script>
