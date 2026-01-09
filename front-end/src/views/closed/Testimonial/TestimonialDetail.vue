
<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800">
    <Loading :visible="loading" message="Loading Testimonial..." />
    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">Testimonial Detail</h1>
    </div>
    <div class="bg-white overflow-hidden rounded-md border border-gray-200 p-4 hidden md:block space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Name:</strong> {{ item.name }}</div><div><strong>Content:</strong> {{ item.content }}</div><div><strong>Position:</strong> {{ item.position }}</div><div><strong>Avatar:</strong> {{ item.avatar }}</div>
    </div>
    <div class="md:hidden bg-white rounded-md border border-gray-200 p-4 space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Name:</strong> {{ item.name }}</div><div><strong>Content:</strong> {{ item.content }}</div><div><strong>Position:</strong> {{ item.position }}</div><div><strong>Avatar:</strong> {{ item.avatar }}</div>
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
    try{ this.item = await this.$apiGetById('/testimonial', this.$route.params.id) || {}; }
    catch(e){console.error(e);} finally {this.loading=false;}
  }
}
</script>
