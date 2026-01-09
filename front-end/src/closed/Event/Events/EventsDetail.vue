
<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800">
    <Loading :visible="loading" message="Loading Events..." />

    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">Events Detail</h1>
    </div>

    <div class="bg-white overflow-hidden rounded-md border border-gray-200 p-4 hidden md:block space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Description:</strong> {{ item.description }}</div><div><strong>Image:</strong> <img v-if="item.image" :src="item.image" class="h-24 w-24 object-cover rounded"/></div><div><strong>Video:</strong> <img v-if="item.video" :src="item.video" class="h-24 w-24 object-cover rounded"/></div>
    </div>

    <div class="md:hidden bg-white rounded-md border border-gray-200 p-4 space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Description:</strong> {{ item.description }}</div><div><strong>Image:</strong> <img v-if="item.image" :src="item.image" class="h-24 w-24 object-cover rounded"/></div><div><strong>Video:</strong> <img v-if="item.video" :src="item.video" class="h-24 w-24 object-cover rounded"/></div>
    </div>

    <button @click="$router.back()" class="mt-4 text-blue-600 hover:underline">Back</button>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
  data() {
    return { item: {}, loading: false };
  },
  async mounted() {
    this.loading = true;
    const id = this.$route.params.id;
    try { this.item = await this.$apiGetById('/events', id); }
    catch(e) { console.error(e); }
    finally { this.loading = false; }
  }
};
</script>
