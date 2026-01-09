
<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800 relative">
    <Loading :visible="loading" message="Loading Team..." />

    <!-- Page Header -->
    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">Teams</h1>
      <button @click="openAddModal" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium shadow-md flex items-center space-x-1 text-sm">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
        <span>Add Team</span>
      </button>
    </div>

    <!-- Search + PageSize -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      <input v-model="searchQuery" @input="fetchItems(1)" type="text" placeholder="Search..."
        class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <label>Show</label>
        <select v-model="pageSize" @change="fetchItems(1)" class="border border-gray-300 rounded-lg px-2 py-1 text-sm bg-white focus:ring-green-500 focus:border-green-500">
          <option v-for="size in [3,6,9,15,50,100]" :key="size" :value="size">{{ size }}</option>
        </select>
        <span>entries</span>
      </div>
    </div>

    <!-- Grid of Team Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="(item,index) in items" :key="item.id" class="bg-white border border-gray-200 rounded-xl shadow p-4 flex flex-col justify-between">
        
        <!-- Photo -->
        <div v-if="item.photo" class="mb-4">
          <img :src="item.photo" alt="Photo" class="w-full h-48 object-cover rounded-lg" />
        </div>

        <!-- Details -->
        <div class="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-700">
          <div class="col-span-2 font-medium text-gray-600">#{{ index + 1 }}</div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Name:</span> {{ item.name }}</div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Role:</span> {{ item.role }}</div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Facebook:</span> <a :href="item.facebook" target="_blank" class="text-green-600 hover:text-green-800">{{ item.facebook }}</a></div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Linkedin:</span> <a :href="item.linkedin" target="_blank" class="text-green-600 hover:text-green-800">{{ item.linkedin }}</a></div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Instagram:</span> <a :href="item.instagram" target="_blank" class="text-green-600 hover:text-green-800">{{ item.instagram }}</a></div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Twitter:</span> <a :href="item.twitter" target="_blank" class="text-green-600 hover:text-green-800">{{ item.twitter }}</a></div>
          <div class="col-span-2"><span class="font-medium text-gray-600">Telegram:</span> <a :href="item.telegram" target="_blank" class="text-green-600 hover:text-green-800">{{ item.telegram }}</a></div>
        </div>

        <!-- Actions -->
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
    <add-team v-if="showModal && !editMode" :data="selectedItem" @close="showModal=false" @saved="fetchItems"/>
    <edit-team v-if="showModal && editMode" :data="selectedItem" @close="showModal=false" @saved="fetchItems"/>
    <delete-confirm-modal :visible="deleteModalVisible" title="Delete Team" message="Are you sure you want to delete this Team?" @confirm="confirmDelete" @cancel="deleteModalVisible=false" />
  </div>
</template>


<script>
import AddTeam from "./AddTeam.vue";
import EditTeam from "./EditTeam.vue";
import Loading from "@/components/Loading.vue";
import DeleteConfirmModal from "@/components/DeleteConfirmModal.vue";

export default {
  components: { AddTeam, EditTeam, Loading, DeleteConfirmModal },
  data() {
    return {
      items: [], count:0, nextPage:null, previousPage:null, currentPage:1, pageSize:3, searchQuery:"",
      showModal:false, editMode:false, selectedItem:null, loading:false, deleteModalVisible:false, deleteId:null
    };
  },
  methods: {
    async fetchItems(page=1) {
      this.loading = true; this.currentPage = page;
      const params = { page: this.currentPage, page_size:this.pageSize, search:this.searchQuery };
      try {
        const response = await this.$apiGet('/team', params);
        this.items = response.data; this.count = response.count||0; this.nextPage=response.next||null; this.previousPage=response.previous||null;
      } catch(e){console.error(e);} finally { this.loading=false; }
    },
    openAddModal(){ this.editMode=false; this.selectedItem=null; this.showModal=true; },
    editItem(item){ this.editMode=true; this.selectedItem=item; this.showModal=true; },
    viewDetails(id){ this.$router.push({ name:'Team-detail', params:{id}}); },
    openDeleteModal(id){ this.deleteId=id; this.deleteModalVisible=true; },
    async confirmDelete(){ const res = await this.$apiDelete('/team', this.deleteId); if(res) this.$root.$refs.toast.showToast('Team deleted successfully', 'success'); this.deleteModalVisible=false; this.fetchItems(this.currentPage);}
  },
  mounted(){ this.fetchItems(); }
};
</script>
