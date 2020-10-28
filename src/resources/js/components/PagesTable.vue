<template>
  <div class="table-responsive w-full mb-4">
    <table class="border-collapse table-auto w-full">
      <thead>
      <tr>
        <th class="px-4 py-2 font-medium border">Id</th>
        <th class="px-4 py-2 font-medium border">Title</th>
        <th class="px-4 py-2 font-medium border">Created at</th>
        <th class="px-4 py-2 font-medium border">Last updated at</th>
        <th class="px-4 py-2 font-medium border">Published at</th>
        <th class="px-4 py-2 font-medium border">Set no-index</th>
        <th class="px-4 py-2 font-medium border">Options</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="page in pages"
          :key="pages.id"
          is="pages-table-item"
          :page="page"></tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import PagesTableItem from './PagesTableItem'
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'PagesTable',
    components: {
      PagesTableItem,
    },
    computed: {
      ...mapGetters(['pages']),
    },
  }
</script>
