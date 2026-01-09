<template>
  <div class="min-h-screen bg-white">
    <Header />

    <section class="pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 translate-x-1/4"></div>
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-slide-up">Who We Are</h1>
          <h2 class="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter italic leading-none animate-slide-up" style="animation-delay: 0.1s">
            Redefining the <span class="text-orange-500">Pulse</span> of B2B.
          </h2>
          <p class="mt-8 text-xl text-slate-600 font-medium leading-relaxed animate-slide-up" style="animation-delay: 0.2s">
            Ant isn't just a platform; it's the digital backbone for Ethiopia's enterprise evolution. We bridge the gap between traditional commerce and the digital future.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 px-6">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div class="group relative p-12 rounded-[3rem] bg-slate-900 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/20">
          <div class="absolute top-0 right-0 p-8 text-orange-500/10 group-hover:text-orange-500/20 transition-colors">
            <svg class="w-32 h-32 fill-current" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"/></svg>
          </div>
          <h3 class="text-orange-500 font-black uppercase tracking-widest text-sm mb-6">Our Mission</h3>
          <p class="text-3xl font-bold text-white leading-tight italic">
            "To empower every Ethiopian enterprise with a <span class="text-orange-500">seamless digital ecosystem</span> that scales without limits."
          </p>
          <div class="mt-12 w-16 h-1 bg-orange-500 transition-all duration-500 group-hover:w-full"></div>
        </div>

        <div class="group relative p-12 rounded-[3rem] bg-orange-500 overflow-hidden transition-all duration-700 hover:shadow-2xl">
          <div class="absolute top-0 right-0 p-8 text-white/10 group-hover:text-white/20 transition-colors">
            <svg class="w-32 h-32 fill-current" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
          </div>
          <h3 class="text-white font-black uppercase tracking-widest text-sm mb-6">Our Vision</h3>
          <p class="text-3xl font-bold text-slate-900 leading-tight italic">
            "To become the <span class="text-white text-shadow">undisputed engine</span> driving the most connected B2B economy in East Africa."
          </p>
          <div class="mt-12 w-16 h-1 bg-white transition-all duration-500 group-hover:w-full"></div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-slate-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-20">
          <h2 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-4">The DNA of Ant</h2>
          <h3 class="text-5xl font-black text-slate-900 tracking-tighter italic">Our Core Values</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="value-card group">
            <div class="p-10 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl relative overflow-hidden h-full">
              <div class="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
              <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M13 10V3L4 14H11V21L20 10H13Z"/></svg>
              </div>
              <h4 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">Radical Innovation</h4>
              <p class="text-slate-500 leading-relaxed font-medium">We don't follow trends. We build the tools that create them, ensuring our partners are always ahead of the curve.</p>
            </div>
          </div>

          <div class="value-card group" style="animation-delay: 0.1s">
            <div class="p-10 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl relative overflow-hidden h-full">
              <div class="absolute -right-4 -top-4 w-24 h-24 bg-slate-900/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
              <div class="w-16 h-16 bg-slate-100 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z"/></svg>
              </div>
              <h4 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">Unshakable Trust</h4>
              <p class="text-slate-500 leading-relaxed font-medium">In the world of B2B, integrity is everything. We prioritize security and transparency in every transaction.</p>
            </div>
          </div>

          <div class="value-card group" style="animation-delay: 0.2s">
            <div class="p-10 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-xl relative overflow-hidden h-full">
              <div class="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/5 rounded-full group-hover:scale-[3] transition-transform duration-700"></div>
              <div class="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5.01 6.34 5.01 8s1.33 3 2.99 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <h4 class="text-2xl font-black text-slate-900 mb-4 tracking-tight">Partner Success</h4>
              <p class="text-slate-500 leading-relaxed font-medium">We only win when you do. Every feature we build is designed to make your business faster, leaner, and stronger.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";

export default {
  name: "AboutPage",
  components: { Header, Footer }
};
</script>

<style scoped>
.animate-slide-up {
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideUp {
  to { opacity: 1; transform: translateY(0); }
}

.value-card {
  opacity: 0;
  transform: scale(0.95);
  animation: zoomIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes zoomIn {
  to { opacity: 1; transform: scale(1); }
}

.text-shadow {
  text-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}
</style>