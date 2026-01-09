<template>
  <div class="bg-gradient-to-br from-orange-50 via-white to-orange-100 min-h-screen py-24 px-6">
    <!-- Section Header -->
    <div class="max-w-7xl mx-auto text-center mb-16">
      <h2 class="text-5xl font-extrabold text-gray-800 tracking-tight animate-fade-slide">
        Our <span class="text-orange-600">Components</span>
      </h2>
      <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in opacity-80">
        Explore the apps and dashboards that make your business smarter, faster, and more connected.
      </p>
    </div>

    <!-- Components Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      <div
        v-for="(comp, index) in components"
        :key="index"
        class="relative rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white bg-opacity-80 backdrop-blur-md transform hover:-translate-y-2 flex flex-col overflow-hidden"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <!-- Full-width Image -->
        <div class="w-full h-56 overflow-hidden rounded-t-3xl">
          <img
            :src="comp.image"
            alt="Component Image"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Content overlapping image -->
        <div class="p-6 flex flex-col flex-grow -mt-5">
          <h3 class="text-2xl font-bold text-gray-800 mb-2">{{ comp.name }}</h3>
          <p class="text-gray-600 flex-grow">{{ comp.description }}</p>
          <a
            :href="comp.downloadLink"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RetailerImg from '../../../assets/img/b2b/components/retailer17.jpg';
import SupplierImg from '../../../assets/img/b2b/components/supplier20.JPG';
import DriverImg from '../../../assets/img/b2b/components/driver16.JPG';

export default {
  name: "Components",
  data() {
    return {
      components: [
        {
          name: "Supplier App",
          description: "List products, manage stock, and process orders seamlessly.",
          image: SupplierImg,
          downloadLink: "https://example.com/supplier-app",
        },
        {
          name: "Retailer App",
          description: "Manage orders, browse products, and track deliveries efficiently.",
          image: RetailerImg,
          downloadLink: "https://example.com/retailer-app",
        },
        {
          name: "Driver App",
          description: "Optimize routes, manage deliveries, and update order status in real-time.",
          image: DriverImg,
          downloadLink: "https://example.com/driver-app",
        },
      ],
    };
  },
};
</script>

<style scoped>
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-slide { animation: fadeInUp 1s ease forwards; }
.animate-fade-in { animation: fadeInUp 1.5s ease forwards; }
</style>
