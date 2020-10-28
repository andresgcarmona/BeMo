<template>
  <div class="dashboard-container w-full">
    <pages-table></pages-table>
  </div>
</template>
<script>
  import PagesTable from '../components/PagesTable'
  
  export default {
    name: 'DashboardPage',
    components: { PagesTable },
  }
</script>
