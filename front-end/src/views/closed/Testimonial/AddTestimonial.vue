
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-sm">
      <div class="flex justify-between items-center mb-4 border-b pb-2">
        <h2 class="text-lg font-semibold text-gray-800">Add Testimonial</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">&times;</button>
      </div>
      <form @submit.prevent="submitForm" class="space-y-4" enctype="multipart/form-data">
        
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
          <input v-model="form.name" type="text" required class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Content</label>
          <input v-model="form.content" type="text" required class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Position</label>
          <input v-model="form.position" type="text" required class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition duration-150" />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">Avatar</label>
          <input @change="handleFile($event, 'avatar')" type="file" class="border border-gray-300 rounded-lg px-4 py-2 text-sm w-full sm:max-w-xs" />
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
        name: '',
content: '',
position: '',
avatar: ''
      },
      files: {}
    };
  },
  methods: {
    handleFile(event, name) {
      this.files[name] = event.target.files[0];
    },
    async submitForm() {
      try {
        const formData = new FormData();
        Object.keys(this.form).forEach(k => {
          formData.append(k, this.form[k]);
        });
        Object.keys(this.files).forEach(k => {
          formData.append(k, this.files[k]);
        });


         const headers={
           'Content-Type': 'multipart/form-data' 
         }
        if ("Add" === "Add") {
          await this.$apiPost("/testimonial", formData, headers);
          this.$root.$refs.toast.showToast('Added successfully', 'success');
        } else {
          await this.$apiPut("/testimonial/" ,this.data.id, formData, headers);
          this.$root.$refs.toast.showToast('Edited successfully', 'success');
        }
        this.$emit("saved");
        this.$emit("close");
      } catch (e) { console.error(e); }
    }
  },
  mounted() {
    if(this.data) {
      Object.keys(this.data).forEach(k => { if(this.form[k] !== undefined) this.form[k] = this.data[k]; });
    }
  }
}
</script>
