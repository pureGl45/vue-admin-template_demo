<template>
  <div class=" test-wrapper">
    <list-layout>
      <template slot="header">
       <conditions></conditions>
      </template>
      <template slot="content">
        <al-table :column="formData.column" :data="formData.list" :pagination="true">
        </al-table>
      </template>
    </list-layout>
  </div>
</template>

<script>
import ListLayout from "@/components/ListLayout/index.vue"
import AlTable from "@/components/AlTable/index.vue"
import Conditions from "./components/conditions/index.vue"
import { getTestList } from '@/api/test.js'
  export default {
    data(){
      return{
        formData:{
          column:[
            {
              prop:'checkbox',
              label: '全选',
              render(_,scope){
                return (<el-checkbox></el-checkbox>)
              }
            },
            {
              prop:'nick',
              label:"昵称",
            },
             {
              prop:'phone',
              label:"手机号",
            },
             {
              prop:'name',
              label:"真实姓名",
            },
             {
              prop:'subject',
              label:"所属学科",
            },
             {
              prop:'job',
              label:"职位",
            },
            {
              prop:'year',
              label:"工作年限",
            }, 
            {
              prop:'updateTime',
              label:"录入时间",
            },
            {
              prop:'actions',
              label:"操作",
              render(_,scope){
                return (<div class='btn'>
                        <el-button  size='small' type='text'>查看</el-button>
                        <el-button  size='small' type='text'>编辑</el-button>
                        <el-button  size='small' type='text'>删除</el-button>
                        </div>)
              }
            },
          ],
          list:[]
        }
      }
    },
    components:{
      ListLayout,
      AlTable,
      Conditions
    },
    created(){
      getTestList().then((res)=>{
        const {code,data} = res
        if(Number(code) === 20000){
          const {items,total} = data;
          this.formData.list = items
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
// .btn{
//   width: 300px;
//   display: flex;
// }
</style>