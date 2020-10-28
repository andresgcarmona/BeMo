<template>
  <div class="dashboard-container w-full">
    <h2 class="text-3xl	font-semibold text-gray-700 mb-8">Registered Pages</h2>
    <div class="w-full mb-4">
      <div class="sm:flex sm:justify-between mb-3">
        <a href="/page/register"
           class="block mb-3 sm:mb-0 border border-gray-600 p-3 font-medium text-sm font rounded hover:text-white hover:bg-gray-600 hover:border-gray-700 transition-colors duration-100">
          <i aria-hidden="true" class="fas fa-plus-circle"></i> Register a page</a>
      
        <form method="GET" action="http://portal.localhost:8020/admin/articles" accept-charset="UTF-8"
              class="flex flex-1 justify-end items-center text-right px-4 md:px-0">
          <div class="block relative w-full">
            <input placeholder="Search pages in title and content"
                   name="s" type="text"
                   class="transition-fast border border-gray-600 font-medium text-sm font rounded w-full lg:w-2/4 p-3 focus:border-blue-400 rounded focus:outline-none">
            <button type="submit"
                    class="absolute inset-y-0 right-0 flex items-center p-3 text-gray-700 focus:outline-none">
              <i aria-hidden="true" class="fas fa-search"></i></button>
          </div>
        </form>
      </div>
    </div>
    
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
