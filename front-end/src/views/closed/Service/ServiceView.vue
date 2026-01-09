<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800 relative">
    <Loading :visible="loading" message="Loading Service..." />

    <!-- Page Header -->
    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">Service</h1>
      <button @click="openAddModal" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md flex items-center space-x-1 text-sm">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Add Service</span>
      </button>
    </div>

    <!-- Search + Page Size -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      <input v-model="searchQuery" @input="fetchItems(1)" type="text" placeholder="Search..."
        class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <label>Show</label>
        <select v-model="pageSize" @change="fetchItems(1)" class="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white focus:ring-green-500 focus:border-green-500">
          <option v-for="size in [6,9,12,50,100]" :key="size" :value="size">{{ size }}</option>
        </select>
        <span>entries</span>
      </div>
    </div>

    <!-- Grid of Service Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="(item,index) in items" :key="item.id" class="bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col justify-between">

        <!-- Icon + ID/Title -->
        <div class="flex gap-4">
          <!-- Icon on the left -->
          <div class="flex-shrink-0">
            <img v-if="item.icon" :src="item.icon" alt="Icon" class="w-20 h-20 object-contain rounded-lg" />
          </div>

          <!-- ID + Title on the right of icon -->
          <div class="flex-1 flex flex-col justify-start gap-1 text-gray-700 text-sm">
            <div><span class="font-medium text-gray-600">#{{ index + 1 }}</span> - <span class="font-medium text-gray-600">Title:</span> {{ item.title }}</div>
            
            <!-- Description with "Read more" -->
            <div class="mt-2 text-gray-700">
              <span class="font-medium text-gray-600">Description:</span>
              <span>
                {{ isExpanded(item.id) ? item.description : truncateText(item.description, 100) }}
              </span>
              <button v-if="wordCount(item.description) > 100" @click="toggleReadMore(item.id)" class="text-blue-500 ml-1">
                {{ isExpanded(item.id) ? 'Read less' : 'Read more' }}
              </button>
            </div>
          </div>
        </div>

        <!-- Actions at bottom-right -->
        <div class="flex justify-end gap-2 mt-4">
          <button @click="viewDetails(item.id)" class="text-green-500 hover:text-green-700"><i class="fas fa-eye"></i></button>
          <button @click="editItem(item)" class="text-blue-500 hover:text-blue-700"><i class="fas fa-edit"></i></button>
          <button @click="openDeleteModal(item.id)" class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
        </div>

      </div>

      <div v-if="items.length === 0" class="col-span-full text-center text-gray-400 italic py-10">
        No data found.
      </div>
    </div>

    <!-- Pagination -->
    <div class="flex items-center justify-between mt-6 text-sm text-gray-600">
      <span>
        Showing {{ (currentPage-1)*pageSize+1 }} to {{ Math.min(currentPage*pageSize,count) }} of {{ count }} total entries
      </span>
      <div class="flex items-center gap-2">
        <button @click="fetchItems(currentPage-1)" :disabled="!previousPage" class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150">← Previous</button>
        <span class="px-3 py-1 bg-green-600 text-white rounded-lg font-medium">{{ currentPage }}</span>
        <button @click="fetchItems(currentPage+1)" :disabled="!nextPage" class="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150">Next →</button>
      </div>
    </div>

    <!-- Modals -->
    <add-service v-if="showModal && !editMode" :data="selectedItem" @close="showModal=false" @saved="fetchItems"/>
    <edit-service v-if="showModal && editMode" :data="selectedItem" @close="showModal=false" @saved="fetchItems"/>
    <delete-confirm-modal :visible="deleteModalVisible" title="Delete Service" message="Are you sure you want to delete this Service?" @confirm="confirmDelete" @cancel="deleteModalVisible=false" />
  </div>
</template>

<script>
import AddService from "./AddService.vue";
import EditService from "./EditService.vue";
import Loading from "@/components/Loading.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";

export default {
  components: { AddService, EditService, Loading, DeleteConfirmModal },
  data() {
    return {
      items: [],
      count:0,
      nextPage:null,
      previousPage:null,
      currentPage:1,
      pageSize:6,
      searchQuery:"",
      showModal:false,
      editMode:false,
      selectedItem:null,
      loading:false,
      deleteModalVisible:false,
      deleteId:null,
      expandedIds: [] // track which items are expanded
    };
  },
  methods: {
    async fetchItems(page=1) {
      this.loading = true; 
      this.currentPage = page;
      const params = { page: this.currentPage, page_size:this.pageSize, search:this.searchQuery };
      try {
        const response = await this.$apiGet('/service', params);
        this.items = response.data; 
        this.count = response.count||0; 
        this.nextPage=response.next||null; 
        this.previousPage=response.previous||null;
      } catch(e){ console.error(e); } 
      finally { this.loading=false; }
    },
    openAddModal(){ this.editMode=false; this.selectedItem=null; this.showModal=true; },
    editItem(item){ this.editMode=true; this.selectedItem=item; this.showModal=true; },
    viewDetails(id){ this.$router.push({ name:'Service-detail', params:{id}}); },
    openDeleteModal(id){ this.deleteId=id; this.deleteModalVisible=true; },
    async confirmDelete(){ 
      const res = await this.$apiDelete('/service', this.deleteId); 
      if(res) this.$root.$refs.toast.showToast('Service deleted successfully', 'success'); 
      this.deleteModalVisible=false; 
      this.fetchItems(this.currentPage);
    },

    // --- Description helper methods ---
    wordCount(text) {
      return text ? text.trim().split(/\s+/).length : 0;
    },
    truncateText(text, wordLimit) {
      if (!text) return "";
      const words = text.trim().split(/\s+/);
      return words.length <= wordLimit ? text : words.slice(0, wordLimit).join(" ") + "...";
    },
    toggleReadMore(id) {
      if (this.expandedIds.includes(id)) {
        this.expandedIds = this.expandedIds.filter(eid => eid !== id);
      } else {
        this.expandedIds.push(id);
      }
    },
    isExpanded(id) {
      return this.expandedIds.includes(id);
    }
  },
  mounted(){ this.fetchItems(); }
};
</script>
