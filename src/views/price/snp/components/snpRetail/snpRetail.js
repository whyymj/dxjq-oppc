/* eslint-disable */
import { h } from 'vue'
export const getTableColumns = () => [{
  type: "selection",
  width: "55",
  fixed: "left",
},
{
  prop: "gasstationId",
  label: "加气站",
  width: "150",
},
{
  prop: "type",
  label: "是/否 一票制",
  width: "150",
},
{
  prop: "running",
  label: "执行中",
  width: "120",
  children: [{
    prop: "zshPrice",
    label: "中石化零售价（元/公斤）",
  },
  {
    prop: "purchasePrice",
    label: "采购价（元/公斤）",
  },
  {
    prop: "totalPrice",
    label: "总服务费（元/公斤）",
  },
  ],
},
{
  prop: "waiting",
  label: "待执行",
  children: [{
    prop: "zshPrice",
    label: "中石化零售价（元/公斤）",
  },
  {
    prop: "purchasePrice",
    label: "采购价（元/公斤）",
  },
  {
    prop: "totalPrice",
    label: "总服务费（元/公斤）",
  },
  {
    prop: "time",
    label: "预计执行时间",
  },
  ],
},
{
  prop: "operation",
  label: "操作",
  width: "250",
  fixed: "right",
  slot: 'operation', // 这里是插槽的名称
},
];
export const getTableData = async ({
  page,
  size,
  id
}) => {
  console.log('check table data>>>', page, size, id);
  return [{
    gasstationId: '青岛',
    type: '是',
    zshPrice: '1.00',
    purchasePrice: '1.00',
    totalPrice: '1.00',
    zshPrice: '1.00',
    purchasePrice: '1.00',
    totalPrice: '1.00',
    time: '2021-08-01 12:00:00',
  }, {
    gasstationId: '青岛',
    type: '是',
    zshPrice: '1.00',
    purchasePrice: '1.00',
    totalPrice: '1.00',
    zshPrice: '1.00',
    purchasePrice: '1.00',
    totalPrice: '1.00',
    time: '2021-08-01 12:00:00',
  }]
}
