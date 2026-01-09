
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-sm">
      <div class="flex justify-between items-center mb-4 border-b pb-2">
        <h2 class="text-lg font-semibold text-gray-800 ">Add News</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">&times;</button>
      </div>

      <form @submit.prevent="submitForm" class="space-y-4">
        
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Title</label>
          <input v-model="form.title" type="text" required
            class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Content</label>
          <input v-model="form.content" type="text" required
            class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
        </div>

        
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Image</label>
          <input @change="handleFileUpload($event, 'image')" type="file" class="w-full text-sm" />
          <div v-if="form.image && typeof form.image === 'string'" class="mt-2">
            <span class="text-xs text-gray-500">Current file: {{ form.image }}</span>
          </div>
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Video</label>
          <input @change="handleFileUpload($event, 'video')" type="file" class="w-full text-sm" />
          <div v-if="form.video && typeof form.video === 'string'" class="mt-2">
            <span class="text-xs text-gray-500">Current file: {{ form.video }}</span>
          </div>
        </div>

        <div class="flex justify-end gap-3 pt-2">
          <button type="button" @click="$emit('close')" class="px-4 py-2 border rounded-lg">Cancel</button>
          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded-lg">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: { data: Object },
  data() {
    return {
      form: {
        title: this.data?.title || '',
        content: this.data?.content || '',
        image: this.data?.image || null,
        video: this.data?.video || null
      }
    };
  },
  methods: {
    handleFileUpload(event, field) {
      this.form[field] = event.target.files[0];
    },
    async submitForm() {
      try {
        const formData = new FormData();
        Object.keys(this.form).forEach(key => {
          if(this.form[key] !== null) formData.append(key, this.form[key]);
        });

        if ("Add" === "Add") {
          const res = await this.$apiPost("/news", formData, true);
          if(res) this.$root.$refs.toast.showToast('Added successfully', 'success');
        } else {
          const res = await this.$apiPut("/news/" + this.data.id, formData, true);
          if(res) this.$root.$refs.toast.showToast('Edited successfully', 'success');
        }
        this.$emit("saved");
        this.$emit("close");
      } catch (e) { console.error(e); }
    }
  }
}
</script>
