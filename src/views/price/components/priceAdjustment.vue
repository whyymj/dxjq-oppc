<template>
  <div>
    <h4> {{titleInfo}} </h4>
    <el-form
      ref="ruleForm"
      :inline="true"
      :model="formData"
      :rules="rules"
      class="demo-form-inline"
    >
    <!---------------- 中石化 一票制 ---------------->
    <template>
      <el-form-item label="一票制">
        <el-radio-group v-model="formData.oneTicket" @change="changeMode">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <br>
      <div style="margin:-15px auto 15px;">（单位： <span style="font-weight: bold;">元/公斤</span>）</div>
      <el-form-item label="中石化零售价" prop="platformPrice">
        <el-input
          v-model="formData.platformPrice"
          placeholder="0.000"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInputNumber(formData, 'platformPrice')"
        ></el-input>
      </el-form-item>
      <el-form-item>=</el-form-item>

     <!--- 非一票制采购价 --->
      <el-form-item v-if="formData.oneTicket == '0'" class="procure-con">
        <el-form-item label="出港/厂价" prop="harbourPrice" class="harbourPrice">
        <el-input
          v-model="formData.harbourPrice"
          placeholder="0.000"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInputNumber(formData, 'harbourPrice')"
        ></el-input>
      </el-form-item>
      <br>
     <span style="float:left">+</span>
      <el-form-item label="运费" prop="freight">
        <el-input
          v-model="formData.freight"
          placeholder="0.000"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInputNumber(formData, 'freight')"
        ></el-input>
      </el-form-item>

      <hr>
        <p class="txt-c">采购价：{{showProcure}}</p>
      </el-form-item>

    <!--- 一票制采购价 --->
      <el-form-item v-else label="采购价" prop="procurePrice">
        <el-input
          v-model="formData.procurePrice"
          placeholder="0.000"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInputNumber(formData, 'procurePrice')"
        ></el-input>
      </el-form-item>
      <el-form-item>+</el-form-item>
      <el-form-item label="总服务费" prop="servicePrice">
        <el-input
          v-model="formData.servicePrice"
          placeholder="0.000"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInputNumber(formData, 'servicePrice')"
        ></el-input>
      </el-form-item>
      <el-divider></el-divider>
   </template>

   <!---------------- 执行时间选择 ---------------->

   <el-form-item>
      <el-radio v-model="formData.status" label="2">立即执行</el-radio>
    </el-form-item>
    <br />
    <el-form-item>
      <el-radio v-model="formData.status" label="1">预约执行</el-radio>
      <el-form-item>
        <el-date-picker
          popper-class="no-time-picker"
          v-model="formData.updateDate"
          default-time="00:00:00"
          type="datetime"
          :disabled="Number(formData.status) !== 1"
          placeholder="选择日期时间"
        >
        </el-date-picker>
      </el-form-item>
      <span>执行</span>
    </el-form-item>
    <el-divider></el-divider>
   <!---------------- 上传凭证 ---------------->
    <ImgUpload></ImgUpload>

    <el-form-item style="text-align: right; display: block">
      <el-button @click="onCancel">取消</el-button>
      <el-button type="primary" @click="onSubmit">确定</el-button>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { handleInputNumber, calc } from '@/utils/tools'
import ImgUpload from './uploadVoucher.vue'
export default {
  name: 'priceAdjustment',
  components: {
    ImgUpload
  },
  props: {
    stations: {
      type: Array,
      default: () => ['青岛', '上海', '北京']
    },
    renderItems: {
      type: Array,
      default: () => ['oneTicket', 2, 3]
    }
  },
  data() {
    return {
      titleInfo: '',
      formData: {
        oneTicket: '1', // 一票制
        platformPrice: '', // 中石化零售价
        procurePrice: '', // 采购价
        servicePrice: '', // 总服务费
        harbourPrice: '', // 出港价
        freight: '', // 运费
        status: '2', // 2 立即执行 1 预约执行
        updateDate: '' // 执行时间
      },
      rules: {
        platformPrice: [
          { required: true, message: '请输入', trigger: 'change' }
        ],
        servicePrice: [
          { required: true, message: '请输入', trigger: 'change' }
        ],
        procurePrice: [
          { required: true, message: '请输入', trigger: 'change' }
        ],
        harbourPrice: [
          { required: true, message: '请输入', trigger: 'change' }
        ],
        freight: [
          { required: true, message: '请输入', trigger: 'change' }
        ]
      },
      oneTicketSumRelation: [{ // type: sum ,addItem // 一票制等式
        key: 'platformPrice',
        type: 'sum'
      }, {
        key: 'servicePrice',
        type: 'addItem'
      }, {
        key: 'procurePrice',
        type: 'addItem'
      }],
      normalSumRelation: [{ // type: sum ,addItem 非一票制等式
        key: 'platformPrice',
        type: 'sum'
      }, {
        key: 'servicePrice',
        type: 'addItem'
      }, {
        key: 'harbourPrice',
        type: 'addItem'
      }, {
        key: 'freight',
        type: 'addItem'
      }],
      calcType: []
    }
  },
  computed: {
    showProcure () {
      return calc.plus(this.formData.harbourPrice, this.formData.freight)
    }
  },
  methods: {
    handleInputNumber,
    changeMode () {
      this.resetSumItems()
      this.calcType = this.formData.oneTicket === '1' ? this.oneTicketSumRelation : this.normalSumRelation
    },
    getTitle () { // 顶部标题
      this.stations.forEach(item => {
        this.titleInfo += item + '，'
      })
      const len = this.stations.length
      this.titleInfo = this.titleInfo.substring(0, this.titleInfo.length - 1) + ' ( 共' + len + '站 ) '
    },
    resetSumItems () {
      this.formData.procurePrice = ''
      this.formData.servicePrice = ''
      this.formData.harbourPrice = ''
      this.formData.freight = ''
      this.formData.platformPrice = ''
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate()
      })
    },
    autoGetEmptyItem () {
      let emptyCount = 0
      const emptyItems = []
      this.calcType.forEach(item => {
        if (this.formData[item.key] === '') {
          emptyCount++
          emptyItems.push(item)
        }
      })
      return {
        emptyCount,
        emptyItems
      }
    },
    handleFocus(e) { // 中石化价格--focus--当所有input都有值时，弹出提示框
      const keyObj = this.autoGetEmptyItem()
      if (keyObj.emptyCount === 0) {
        e.srcElement.blur()
        this.$confirm('确定重新填写等式？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.resetSumItems()
        }).catch(() => {
          console.log('取消')
        })
      }
    },
    handleBlur () { // 中石化价格--blur--自动计算
      const keyObj = this.autoGetEmptyItem()
      if (keyObj.emptyCount === 1) { // 只有一个空值,自动计算
        const aotukey = keyObj.emptyItems[0].key
        const aotuType = keyObj.emptyItems[0].type
        let autoValue = 0
        if (aotuType == 'sum') {
          autoValue = this.calcType.reduce((prev, cur) => {
            if (cur.type === 'addItem') {
              return calc.plus(prev, this.formData[cur.key])
            } else {
              return prev
            }
          }, 0)
        } else {
          const sumKey = this.calcType.filter(item => item.type == 'sum')[0].key
          const sumValue = Number(this.formData[sumKey])
          autoValue = this.calcType.reduce((prev, cur) => {
            if (cur.type === 'addItem' && cur.key !== aotukey) {
              return calc.subtract(prev, this.formData[cur.key])
            } else {
              return prev
            }
          }, sumValue)
        }
        this.formData[aotukey] = autoValue
      }
    },
    getImgList () {

    },
    onSubmit () {},
    onCancel () {}
  },
  mounted () {
    this.getTitle()
    this.changeMode()
  }
}
</script>

<style lang="scss" scoped>
.txt-c{
    text-align: center;
}
.procure-con{
    text-align: right;
    width: 300px;
    display: flex;
    flex-direction: row;
    .harbourPrice{
       margin-bottom:8px;
    }
}
:deep(.el-form--inline) {
  .el-form-item {
    vertical-align: bottom;
    .el-input {
      width: 160px;
    }
    .el-date-editor {
      width: 100%;
    }
  }
  .el-form-item__content {
    position: relative;
    .input-has-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: '';
      z-index: 10;
    }
  }
  .el-input {
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
    }
    input[type="number"] {
      -moz-appearance: textfield;
    }
  }
}
</style>
