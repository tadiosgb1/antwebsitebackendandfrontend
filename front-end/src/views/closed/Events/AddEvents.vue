<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-6 text-sm">

      <!-- Header -->
      <div class="flex justify-between items-center mb-4 border-b pb-2">
        <h2 class="text-lg font-semibold text-gray-800">Add Event</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">
          &times;
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" enctype="multipart/form-data">

        <!-- GRID -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">

          <div>
            <label class="block mb-1 font-medium">Title</label>
            <input v-model="form.title" type="text" required class="input" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Category</label>
            <select v-model="form.category_id" required class="input">
              <option value="">Select Category</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>
          </div>

          <div>
            <label class="block mb-1 font-medium">Start Date</label>
            <input v-model="form.start_date" type="date" required class="input" />
          </div>

          <div>
            <label class="block mb-1 font-medium">End Date</label>
            <input v-model="form.end_date" type="date" required class="input" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Image</label>
            <input type="file" @change="handleFile($event, 'image')" class="input" />
          </div>

          <div>
            <label class="block mb-1 font-medium">Video</label>
            <input type="file" @change="handleFile($event, 'video')" class="input" />
          </div>

          <!-- Full width description -->
          <div class="lg:col-span-2">
            <label class="block mb-1 font-medium">Description</label>
            <textarea
              v-model="form.description"
              required
              rows="3"
              class="input"
            ></textarea>
          </div>

        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-3 mt-6">
          <button type="button" @click="$emit('close')" class="btn-secondary">
            Cancel
          </button>
          <button type="submit" class="btn-primary">
            Add Event
          </button>
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
        title: "",
        description: "",
        image: "",
        video: "",
        start_date: "",
        end_date: "",
        category_id: ""
      },
      files: {},
      categories: []
    };
  },

  methods: {
    handleFile(event, name) {
      this.files[name] = event.target.files[0];
    },

    async fetchCategories() {
      try {
        const response = await this.$apiGet("/category", {
          page: 1,
          page_size: 100
        });

        // ✅ FIXED HERE
        this.categories = response.data?.data || response.data || [];
      } catch (e) {
        console.error("Category load failed", e);
      }
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

        await this.$apiPost("/event", formData, {
          "Content-Type": "multipart/form-data"
        });

        this.$root.$refs.toast.showToast("Event added successfully", "success");
        this.$emit("saved");
        this.$emit("close");
      } catch (e) {
        console.error(e);
      }
    }
  },

  mounted() {
    this.fetchCategories();

    if (this.data) {
      Object.keys(this.data).forEach(k => {
        if (this.form[k] !== undefined) {
          this.form[k] = this.data[k];
        }
      });
    }
  }
};
</script>

<style scoped>
.input {
  @apply border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-green-500 outline-none;
}
.btn-primary {
  @apply px-4 py-2 bg-green-500 text-white rounded-lg;
}
.btn-secondary {
  @apply px-4 py-2 border rounded-lg;
}
</style>
