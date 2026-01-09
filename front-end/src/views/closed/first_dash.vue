<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <!-- Dashboard Stats -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <router-link
        v-for="(stat, key) in stats"
        :key="key"
        :to="{ name: stat.route }"
        class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all relative flex flex-col justify-between"
      >
        <!-- Icon -->
        <div
          class="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-500"
        >
          <i :class="stat.icon"></i>
        </div>

        <!-- Main Info -->
        <div>
          <h2 class="text-gray-500 text-sm uppercase tracking-wide">
            {{ stat.label }}
          </h2>

          <p class="text-3xl font-bold text-gray-800 mt-2">
            {{ stat.value }}
          </p>

          <!-- View Text -->
          <p class="text-green-500 font-medium mt-1 text-sm">
            View {{ stat.label }}
          </p>
        </div>

        <div class="mt-3 border-t pt-2">
          <span class="text-xs text-gray-400">Updated just now</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstDashboard",

  data() {
    return {
      loading: false,
      pageSize: 1,
      stats: {
        users: { value: 0, label: "Users", route: "User-view", icon: "fas fa-user" },
        news: { value: 0, label: "News", route: "News-view", icon: "fas fa-newspaper" },
        events: { value: 0, label: "Events", route: "Events-view", icon: "fas fa-calendar" },
        contacts: { value: 0, label: "Contacts", route: "Contacts-view", icon: "fas fa-envelope" },
        subscribers: { value: 0, label: "Subscribers", route: "Subscribers-view", icon: "fas fa-users" },
        services: { value: 0, label: "Services", route: "Service-view", icon: "fas fa-briefcase" },
        teams: { value: 0, label: "Teams", route: "Team-view", icon: "fas fa-users" },
        partners: { value: 0, label: "Partners", route: "Partner-view", icon: "fas fa-handshake" },
        testimonials: { value: 0, label: "Testimonials", route: "Testimonial-view", icon: "fas fa-comment" },
        gallery: { value: 0, label: "Gallery", route: "Gallery-view", icon: "fas fa-image" },
        categories: { value: 0, label: "Categories", route: "Category-view", icon: "fas fa-tags" },
      },
    };
  },

  mounted() {
    this.fetchAllCounts();
  },

  methods: {
    async fetchCount(endpoint, key) {
      try {
        const response = await this.$apiGet(endpoint, { page: 1, page_size: this.pageSize });
        this.stats[key].value = response.count || 0;
      } catch (err) {
        console.error(`Failed to fetch ${key}`, err);
        this.stats[key].value = 0;
      }
    },

    async fetchAllCounts() {
      this.loading = true;

      await Promise.all([
        this.fetchCount("/users", "users"),
        this.fetchCount("/news", "news"),
        this.fetchCount("/event", "events"),
        this.fetchCount("/contact", "contacts"),
        this.fetchCount("/subscriber", "subscribers"),
        this.fetchCount("/service", "services"),
        this.fetchCount("/partner", "partners"),
        this.fetchCount("/gallery", "gallery"),
        this.fetchCount("/testimonial", "testimonials"),
        this.fetchCount("/team", "teams"),
        this.fetchCount("/category", "categories"),
      ]);

      this.loading = false;
    },
  },
};
</script>

<style scoped>
.bg-white:hover {
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
</style>
