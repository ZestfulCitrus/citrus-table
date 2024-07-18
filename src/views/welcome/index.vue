<template>
  <div>
    <el-row :gutter="16">
      <el-col
        v-for="table in tableList.data"
        v-bind:key="table.tableName"
        :span="4"
      >
        <el-card shadow="hover">
          {{ table.tableName }}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
const tableList = reactive({
  data: [
    {
      tableName: "宿舍统计信息"
    },
    {
      tableName: "学生统计信息"
    }
  ],
  meta: ""
});
</script>
<style lang="scss">
.ep-bg-purple-light {
  background-color: black;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
