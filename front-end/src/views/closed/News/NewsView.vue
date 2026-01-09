<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800 relative">
    <!-- Loading -->
    <Loading :visible="loading" message="Loading News..." />

    <!-- Header -->
    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">News</h1>
      <button @click="openAddModal" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md flex items-center space-x-1 text-sm">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Add News</span>
      </button>
    </div>

    <!-- Search + PageSize -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      <input v-model="searchQuery" @input="fetchItems(1)" type="text" placeholder="Search..."
        class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <label>Show</label>
        <select v-model="pageSize" @change="fetchItems(1)" class="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white focus:ring-green-500 focus:border-green-500">
          <option v-for="size in [3,6,9,12,15,100]" :key="size" :value="size">{{ size }}</option>
        </select>
        <span>entries</span>
      </div>
    </div>

    <!-- Grid of News -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(item, index) in items" :key="item.id" class="bg-white p-4 rounded-xl border border-gray-200 shadow hover:shadow-lg transition duration-150">
        <div class="text-xs text-gray-500 mb-2">#{{ index + 1 }}</div>
    <!-- Image & Video Row -->
        <div class="flex gap-2 mb-3">
          <div class="w-1/2">
            <img
              v-if="item.image"
              :src="item.image"
              alt="News Image"
              class="w-full h-32 object-cover rounded-lg cursor-zoom-in"
              @click="zoomImage = item.image"
            />
          </div>
          <div class="w-1/2">
            <video
              v-if="item.video"
              :src="item.video"
              controls
              class="w-full h-32 rounded-lg object-cover"
            ></video>
          </div>
        </div>
        <div class="flex flex-row space-x-12">
           <h2 class="text-lg font-semibold text-gray-800 mb-2">{{ item.title }}</h2>
<!-- Category -->
        <div class="mb-3 text-sm text-gray-700">
          <span class="font-semibold">Category:</span> {{ item.category }}
        </div>
        </div>
       
        <!-- Content with More/Less -->
        <p class="text-gray-600 mb-3">
          {{ isExpanded(item.id) ? item.content : truncate(item.content) }}
          <button v-if="item.content && item.content.length > 100" @click="toggleExpand(item.id)" class="text-green-600 hover:text-green-800 text-xs ml-1">
            {{ isExpanded(item.id) ? 'Less' : 'More' }}
          </button>
        </p>

    

        

        <!-- Actions -->
        <div class="flex justify-end space-x-4 text-lg">
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
    <add-news v-if="showModal && !editMode" :data="selectedItem" @close="showModal=false" @saved="fetchItems"/>
    <edit-news v-if="showModal && editMode" :data="selectedItem" @close="showModal=false" @saved="fetchItems"/>
    <delete-confirm-modal :visible="deleteModalVisible" title="Delete News" message="Are you sure you want to delete this News?" @confirm="confirmDelete" @cancel="deleteModalVisible=false" />

    <!-- Image Zoom Modal -->
    <div v-if="zoomImage" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div class="relative">
        <button @click="zoomImage = null" class="absolute top-2 right-2 text-white text-3xl">&times;</button>
        <img :src="zoomImage" class="max-w-full max-h-screen rounded-lg shadow-lg" />
      </div>
    </div>
  </div>
</template>

<script>
import AddNews from "./AddNews.vue";
import EditNews from "./EditNews.vue";
import Loading from "@/components/Loading.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";

export default {
  components: { AddNews, EditNews, Loading, DeleteConfirmModal },
  data() {
    return {
      items: [],
      count: 0,
      nextPage: null,
      previousPage: null,
      currentPage: 1,
      pageSize: 3,
      searchQuery: "",
      showModal: false,
      editMode: false,
      selectedItem: null,
      loading: false,
      deleteModalVisible: false,
      deleteId: null,
      expandedContents: {},
      zoomImage: null
    };
  },
  methods: {
    async fetchItems(page = 1) {
      this.loading = true;
      this.currentPage = page;
      const params = { page: this.currentPage, page_size: this.pageSize, search: this.searchQuery };
      try {
        const response = await this.$apiGet('/news', params);
        this.items = response.data || [];
        this.count = response.count || 0;
        this.nextPage = response.next || null;
        this.previousPage = response.previous || null;

        // Initialize expandedContents for new items
        this.items.forEach(item => {
          if (!(item.id in this.expandedContents)) {
            this.expandedContents[item.id] = false;
          }
        });
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    truncate(text) {
      if (!text) return '';
      return text.length > 100 ? text.substring(0, 100) + '...' : text;
    },
    toggleExpand(id) {
      this.expandedContents[id] = !this.expandedContents[id];
    },
    isExpanded(id) {
      return !!this.expandedContents[id];
    },
    openAddModal() {
      this.editMode = false;
      this.selectedItem = null;
      this.showModal = true;
    },
    editItem(item) {
      this.editMode = true;
      this.selectedItem = item;
      this.showModal = true;
    },
    openDeleteModal(id) {
      this.deleteId = id;
      this.deleteModalVisible = true;
    },
    async confirmDelete() {
      const res = await this.$apiDelete('/news', this.deleteId);
      if (res) this.$root.$refs.toast.showToast('News deleted successfully', 'success');
      this.deleteModalVisible = false;
      this.fetchItems(this.currentPage);
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>
