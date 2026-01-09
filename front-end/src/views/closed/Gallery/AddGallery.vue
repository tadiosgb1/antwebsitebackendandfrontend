<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 text-sm">
      
      <!-- Header -->
      <div class="flex justify-between items-center mb-4 border-b pb-2">
        <h2 class="text-lg font-semibold text-gray-800">Add Gallery</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600">
          &times;
        </button>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="space-y-4" enctype="multipart/form-data">
        
        <!-- Title -->
        <div>
          <label class="block mb-1 font-medium text-gray-700">Title</label>
          <input
            v-model="form.title"
            type="text"
            required
            class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <!-- Image -->
        <div>
          <label class="block mb-1 font-medium text-gray-700">Image</label>
          <input
            type="file"
            required
            @change="handleFile($event, 'image')"
            class="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />
        </div>

        <!-- Category -->
        <div>
          <label class="block mb-1 font-medium text-gray-700">Category</label>
          <select
            v-model="form.category_id"
            required
            class="border border-gray-300 rounded-lg px-4 py-2 w-full"
          >
            <option value="">Select Category</option>
            <option
              v-for="cat in categories"
              :key="cat.id"
              :value="cat.id"
            >
              {{ cat.name }}
            </option>
          </select>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end gap-3 pt-2">
          <button
            type="button"
            @click="$emit('close')"
            class="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Add
          </button>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },

  data() {
    return {
      form: {
        title: "",
        image: "",
        category_id: ""
      },
      files: {},
      categories: [],
      loadingCategories: false
    };
  },

  methods: {
    handleFile(event, name) {
      this.files[name] = event.target.files[0];
    },

    async fetchCategories() {
      this.loadingCategories = true;
      try {
        const response = await this.$apiGet("/category", {
          page: 1,
          page_size: 100
        });

        // API format: { count, data, ... }
        this.categories = response.data || [];
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        this.loadingCategories = false;
      }
    },

    async submitForm() {
      try {
        const formData = new FormData();

        Object.keys(this.form).forEach(key => {
          formData.append(key, this.form[key]);
        });

        Object.keys(this.files).forEach(key => {
          formData.append(key, this.files[key]);
        });

        const headers = {
          "Content-Type": "multipart/form-data"
        };

        // ADD MODE
        await this.$apiPost("/gallery", formData, headers);

        this.$root.$refs.toast.showToast("Gallery added successfully", "success");

        this.$emit("saved");
        this.$emit("close");
      } catch (error) {
        console.error("Submit error:", error);
      }
    }
  },

  mounted() {
    this.fetchCategories();

    // Edit mode support
    if (this.data) {
      Object.keys(this.data).forEach(key => {
        if (this.form[key] !== undefined) {
          this.form[key] = this.data[key];
        }
      });
    }
  }
};
</script>
