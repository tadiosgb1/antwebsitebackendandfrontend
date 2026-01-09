
<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800">
    <Loading :visible="loading" message="Loading Solutions..." />
    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">Solutions Detail</h1>
    </div>
    <div class="bg-white overflow-hidden rounded-md border border-gray-200 p-4 hidden md:block space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Slug:</strong> {{ item.slug }}</div><div><strong>Summary:</strong> {{ item.summary }}</div><div><strong>Description:</strong> {{ item.description }}</div><div><strong>Technologies:</strong> {{ item.technologies }}</div><div><strong>Industry:</strong> {{ item.industry }}</div><div><strong>Thumbnail:</strong> {{ item.thumbnail }}</div><div><strong>Demo_url:</strong> {{ item.demo_url }}</div><div><strong>Sort_order:</strong> {{ item.sort_order }}</div><div><strong>Is_active:</strong> {{ item.is_active }}</div>
    </div>
    <div class="md:hidden bg-white rounded-md border border-gray-200 p-4 space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Slug:</strong> {{ item.slug }}</div><div><strong>Summary:</strong> {{ item.summary }}</div><div><strong>Description:</strong> {{ item.description }}</div><div><strong>Technologies:</strong> {{ item.technologies }}</div><div><strong>Industry:</strong> {{ item.industry }}</div><div><strong>Thumbnail:</strong> {{ item.thumbnail }}</div><div><strong>Demo_url:</strong> {{ item.demo_url }}</div><div><strong>Sort_order:</strong> {{ item.sort_order }}</div><div><strong>Is_active:</strong> {{ item.is_active }}</div>
    </div>
    <button @click="$router.back()" class="mt-4 text-blue-600 hover:underline">Back</button>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
export default {
  components:{ Loading },
  data(){ return { item:{}, loading:false }; },
  async mounted(){
    this.loading=true;
    try{ this.item = await this.$apiGetById('/solutions', this.$route.params.id) || {}; }
    catch(e){console.error(e);} finally {this.loading=false;}
  }
}
</script>
