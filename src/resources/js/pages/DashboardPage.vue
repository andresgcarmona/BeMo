<template>
  <div class="dashboard-container w-full">
    <div class="w-full">
      <h2 class="text-3xl	font-semibold text-gray-700 mb-8">Global Settings</h2>
      
      <div class="mb-4 flex flex-col w-full">
        <div class="w-full flex">
          <div class="mb-4 w-1/4 mr-3">
            <label for="google_analytics_tag"
                   class="block text-gray-700 text-sm font-bold mb-2">
              Google analytics tag
            </label>
            
            <textarea name="google_analytics_tag"
                      id="google_analytics_tag"
                      placeholder="Google Analytics tag"
                      rows="5"
                      cols="5"
                      v-model="settings.gat"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"></textarea>
          </div>
          
          <div class="mb-4 w-1/4">
            <label for="facebook_pixel_data"
                   class="block text-gray-700 text-sm font-bold mb-2">
              Facebook pixel data
            </label>
            
            <textarea name="facebook_pixel_data"
                      id="facebook_pixel_data"
                      placeholder="Facebook pixel data"
                      rows="5"
                      cols="5"
                      v-model="settings.fpx"
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"></textarea>
          </div>
        </div>
        
        <div class="w-auto">
          <button type="button"
                  @click="updateSettings"
                  :disabled="savingSettings"
                  class="appearance-none block mb-3 mr-2 sm:mb-0 border border-gray-600 p-3 font-medium text-sm font rounded hover:text-white hover:bg-gray-600 hover:border-gray-700 transition-colors duration-100">
            <i class="fas fa-save inline-block mr-2"></i> Update settings
          </button>
        </div>
      </div>
    </div>
  
    <hr>
    
    <div class="w-full">
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
  </div>
</template>
<script>
  import PagesTable from '../components/PagesTable'
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
    name: 'DashboardPage',
    components: { PagesTable },
    data() {
      return {
        savingSettings: false,
      }
    },
    computed: {
      ...mapGetters(['settings']),
    },
    methods: {
      ...mapActions({
        saveSettings: 'updateSettings',
      }),
      
      async updateSettings() {
        this.savingSettings = true
  
        const response = await this.saveSettings(this.settings)
        
        this.savingSettings = true
        
        if(response.status === 'error') {
          console.error(response.error)
          return false
        }
        
        // TODO: Show notification tooltip
      },
    },
  }
</script>
