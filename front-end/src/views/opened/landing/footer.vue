<template>
  <footer class="bg-white pt-24 pb-12 border-t border-slate-100">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
        
        <div class="lg:col-span-4 space-y-8">
          <div class="flex items-center space-x-2">
            <div class="w-16 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <span class="text-orange-500 font-black text-xl italic">ANT</span>
            </div>
            <h2 class="text-3xl font-black text-slate-900 tracking-tighter italic"><span class="text-orange-500">B2B</span></h2>
          </div>
          <p class="text-slate-500 font-medium leading-relaxed max-w-sm">
            Ethiopia’s premier digital infrastructure for B2B commerce. We empower enterprises to automate supply chains, manage partners, and scale operations with precision.
          </p>
          <div class="flex space-x-4">
            <a v-for="social in ['linkedin', 'telegram', 'twitter', 'facebook']" :key="social" href="#" 
               class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-500 hover:-translate-y-1">
              <i :class="`fab fa-${social}`"></i>
            </a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Navigation</h3>
          <ul class="space-y-4">
            <li v-for="link in ['Home', 'About', 'Services', 'News', 'Events', 'Contact']" :key="link">
              <router-link :to="`/${link.toLowerCase()}`" class="text-slate-500 font-bold text-sm hover:text-orange-600 transition-colors duration-300">
                {{ link }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Ecosystem</h3>
          <ul class="space-y-4">
            <li v-for="item in ['Supply Chain Automation', 'Partner Management', 'Enterprise Analytics', 'Secure Payments', 'Marketplace Logic']" :key="item" 
                class="text-slate-500 font-bold text-sm">
              {{ item }}
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="text-xs font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Headquarters</h3>
          <ul class="space-y-6">
            <li class="flex items-start group">
              <i class="fas fa-map-marker-alt mt-1 text-orange-500 group-hover:animate-bounce"></i>
              <span class="ml-4 text-slate-500 font-bold text-sm">Addis Ababa, Ethiopia<br/><span class="text-slate-400 font-medium">Bole Road, Business District</span></span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-envelope text-orange-500"></i>
              <span class="ml-4 text-slate-500 font-bold text-sm">contact@ant-b2b.com</span>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone-alt text-orange-500"></i>
              <span class="ml-4 text-slate-500 font-bold text-sm">+251 911 000 000</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div class="text-[11px] font-black uppercase tracking-widest text-slate-400">
          © {{ new Date().getFullYear() }} <span class="text-slate-900">Ant B2B Ecosystem</span>. All Rights Reserved.
        </div>
        <div class="flex space-x-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
          <a href="#" class="hover:text-orange-600 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-orange-600 transition-colors">Terms of Service</a>
          <a href="#" class="hover:text-orange-600 transition-colors">Security</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComp"
};
</script>

<style scoped>
/* Use Inter or your brand font */
footer {
  font-family: 'Inter', sans-serif;
}
</style>