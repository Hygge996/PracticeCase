<template>
  <div>
    <h1>APP 根组件</h1>

    <!-- 使用 MyTable 表格组件 -->
    <my-table :data="goodslist">
      <!-- 表格的标题-->
      <template v-slot:header>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template v-slot:body="{row, index}">
        <th>{{ index + 1 }}</th>
        <th>{{ row.goods_name }}</th>
        <th>￥{{ row.goods_price }}</th>
        <th>>
          <span class="badge badge-warning ml-2" v-for="item in row.tags" :key="item">{{tag}}</span>
        </th>
        <th>
          <button type="button" class="btn btn-danger btn-sm">删除</button>
        </th>
      </template>
    </my-table>
  </div>
</template>
<script>
// 导入 MyTable 组件
import MyTable from './components/my-table/MyTable.vue'

export default {
  name: 'MyApp',
  data() {
    return {
      // 商品列表数据
      goodslist: [],
    }
  },
  created() {
    // 发起请求
    this.getGoodslist()
  },
  methods: {
    async getGoodslist() {
      const{data: res} =  await this.$http.get('/api/goods')
      // console.log(res)
      if(this.status !== 0) return console.log('获取商品列表数据失败！')
      this.goodslist = res.data
    }
  },
  components: {
    MyTable,
  }
}
</script>

<style lang="less" scoped>

</style>