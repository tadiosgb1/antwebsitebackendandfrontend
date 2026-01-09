
<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800">
    <h1 class="text-lg font-bold mb-4">News Detail</h1>
    <div class="bg-white p-4 rounded-xl shadow space-y-2">
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Content:</strong> {{ item.content }}</div>
      <div>
        <strong>Image:</strong>
        <a v-if="item.image" :href="'/' + item.image" target="_blank" class="text-blue-500 hover:underline">View image</a>
        <span v-else class="text-gray-400 italic">No file</span>
      </div><div>
        <strong>Video:</strong>
        <a v-if="item.video" :href="'/' + item.video" target="_blank" class="text-blue-500 hover:underline">View video</a>
        <span v-else class="text-gray-400 italic">No file</span>
      </div>
    </div>
    <button @click="$router.back()" class="mt-4 text-blue-600 hover:underline">Back</button>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  components: { Loading },
  data() { return { item: {}, loading: false }; },
  async mounted() {
    this.loading = true;
    try { const res = await this.$apiGetById('/news', this.$route.params.id); this.item = res; }
    catch(e){ console.error(e); }
    finally{ this.loading=false; }
  }
}
</script>
