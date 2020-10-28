<template>
  <tr class="bg-gray-100">
    <td class="border px-4 py-2" v-text="page.id"></td>
    <td class="border px-4 py-2">
      <a :href="page.url"
         target="_self"
         class="text-blue-500 block mt-1">{{ page.title }}
      </a>
    </td>
    <td class="border px-4 py-2" v-text="page.created_at"></td>
    <td class="border px-4 py-2" v-text="page.updated_at"></td>
    <td class="border px-4 py-2" v-text="page.published_at"></td>
    <td class="border px-4 py-2 text-center">
      <div class="custom-control custom-switch">
        <input type="checkbox"
               :id="`switch_status_${page.id}`"
               :checked="page.no_index"
               class="change-announcement-status custom-control-input"
               @change="toggleNoIndex"
               :disabled="savingNoIndex">
        <label :for="`switch_status_${page.id}`"
               class="custom-control-label"></label>
      </div>
    </td>
    <td class="border px-4 py-2 text-center">
      <div class="inline-flex">
        <a target="_self"
           :href="page.url"
           class="border border-r-0 hover:text-blue-500 text-gray-600 font-normal py-2 px-4 rounded-l rounded-l">
          <i aria-hidden="true" class="far fa-eye"></i>
        </a>
        <a :href="`/page/${page.id}/edit`"
           class="border hover:bg-green-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100">
          <i aria-hidden="true" class="fas fa-edit"></i>
        </a>
        <button data-toggle="modal"
                data-target="#confirmation-modal"
                data-url="http://portal.localhost:8020/api/v1/articles/4543"
                class="border hover:bg-red-500 hover:text-white text-gray-700 font-normal py-2 px-4 rounded-r transition-colors duration-100">
          <i aria-hidden="true" class="far fa-trash-alt"></i></button>
      </div>
    </td>
  </tr>
</template>

<script>
  import { mapActions } from 'vuex'
  
  export default {
    name: 'PagesTableItem',
    props: {
      page: Object,
      required: true,
    },
    data: () => ({
      savingNoIndex: false,
    }),
    methods: {
      ...mapActions({
        toggleIndexing: 'toggleNoIndex',
      }),
      
      async toggleNoIndex() {
        this.savingNoIndex = true
        
        const response = await this.toggleIndexing(this.page)
  
        this.savingNoIndex = false
        
        if(response.status === 'error') {
          console.error(response.error)
          return false
        }
        
        // Show tooltip.
      },
    },
  }
</script>
