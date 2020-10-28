<template>
  <tr class="bg-gray-100">
    <td class="border px-4 py-2" v-text="page.id"></td>
    <td class="border px-4 py-2">
      <a :href="page.url"
         target="_blank"
         class="text-blue-500 block mt-1">{{ page.title }}
      </a>
    </td>
    <td class="border px-4 py-2" v-text="page.created_at"></td>
    <td class="border px-4 py-2" v-text="page.updated_at"></td>
    <td class="border px-4 py-2" v-text="page.published_at"></td>
    <td class="border px-4 py-2 text-center">
      <div class="inline-flex">
        <a target="_blank"
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
  export default {
    name: 'PagesTableItem',
    props: {
      page: Object,
      required: true,
    },
  }
</script>
