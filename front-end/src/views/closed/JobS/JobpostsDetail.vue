
<template>
  <div class="p-6 bg-gray-50 min-h-screen text-sm text-gray-800">
    <!-- Loading -->
    <Loading :visible="loading" message="Loading Jobposts..." />

    <!-- Page Header -->
    <div class="flex items-center justify-between mb-6 border-b pb-4 border-gray-200">
      <h1 class="text-lg font-bold text-gray-800">Jobposts Detail</h1>
    </div>

    <!-- Detail Card -->
    <div class="bg-white overflow-hidden rounded-md border border-gray-200 p-4 hidden md:block space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Description:</strong> {{ item.description }}</div><div><strong>Location:</strong> {{ item.location }}</div><div><strong>Employment_type:</strong> {{ item.employment_type }}</div><div><strong>Expereince_level:</strong> {{ item.expereince_level }}</div><div><strong>Salary_min:</strong> {{ item.salary_min }}</div><div><strong>Salary_max:</strong> {{ item.salary_max }}</div><div><strong>Vacancies:</strong> {{ item.vacancies }}</div><div><strong>Deadline:</strong> {{ item.deadline }}</div><div><strong>Is_active:</strong> {{ item.is_active }}</div>
    </div>

    <!-- Mobile View -->
    <div class="md:hidden bg-white rounded-md border border-gray-200 p-4 space-y-2">
      <div><strong>ID:</strong> {{ item.id }}</div>
      <div><strong>Title:</strong> {{ item.title }}</div><div><strong>Description:</strong> {{ item.description }}</div><div><strong>Location:</strong> {{ item.location }}</div><div><strong>Employment_type:</strong> {{ item.employment_type }}</div><div><strong>Expereince_level:</strong> {{ item.expereince_level }}</div><div><strong>Salary_min:</strong> {{ item.salary_min }}</div><div><strong>Salary_max:</strong> {{ item.salary_max }}</div><div><strong>Vacancies:</strong> {{ item.vacancies }}</div><div><strong>Deadline:</strong> {{ item.deadline }}</div><div><strong>Is_active:</strong> {{ item.is_active }}</div>
    </div>

    <button @click="$router.back()" class="mt-4 text-blue-600 hover:underline">Back</button>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
  data() {
    return {
      item: {},
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    const id = this.$route.params.id;
    try {
      const response = await this.$apiGetById('/jobposts', id);
      this.item = response || {};
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  },
};
</script>
