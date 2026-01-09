<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/3"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="text-center max-w-3xl mx-auto mb-20">
        <h2 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6 animate-fade-in">The Ant Advantage</h2>
        <h3 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter italic leading-none">
          Why Industry Leaders <span class="text-orange-500">Choose Ant.</span>
        </h3>
        <p class="mt-6 text-xl text-slate-600 font-medium">
          We provide the strategic infrastructure required to dominate the modern B2B marketplace.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="feature-card group">
          <div class="icon-box">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4 italic tracking-tight">Expand Your Market</h4>
          <p class="text-slate-500 font-medium text-sm leading-relaxed">
            Break geographic barriers. Our platform connects you with a verified network of regional partners, opening doors to untapped trade corridors.
          </p>
        </div>

        <div class="feature-card group">
          <div class="icon-box">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4 italic tracking-tight">Build Lasting Trust</h4>
          <p class="text-slate-500 font-medium text-sm leading-relaxed">
            Transparency is our core. Integrated rating systems and verified business profiles ensure every transaction is backed by professional credibility.
          </p>
        </div>

        <div class="feature-card group">
          <div class="icon-box">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4 italic tracking-tight">Smart & High Velocity</h4>
          <p class="text-slate-500 font-medium text-sm leading-relaxed">
            Eliminate manual bottlenecks. Our AI-driven logic automates order processing, making your supply chain faster and more intelligent.
          </p>
        </div>

        <div class="feature-card group">
          <div class="icon-box">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4 italic tracking-tight">Encrypted Payments</h4>
          <p class="text-slate-500 font-medium text-sm leading-relaxed">
            Execute high-value transactions with total peace of mind. Our multi-layered encryption supports secure B2B digital settlements.
          </p>
        </div>

        <div class="feature-card group">
          <div class="icon-box">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4 italic tracking-tight">Real-Time Visibility</h4>
          <p class="text-slate-500 font-medium text-sm leading-relaxed">
            Knowledge is power. Monitor every shipment and inventory movement in real-time with our advanced GPS-integrated dashboard.
          </p>
        </div>

        <div class="feature-card group">
          <div class="icon-box">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h4 class="text-2xl font-black text-slate-900 mb-4 italic tracking-tight">Reliable Fulfillment</h4>
          <p class="text-slate-500 font-medium text-sm leading-relaxed">
            Consistency is our promise. Our optimized logistics engine ensures that your products reach their destination safely and on schedule.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WhyChooseUs"
};
</script>

<style scoped>
.feature-card {
  @apply p-10 rounded-[3rem] bg-white border border-slate-100 transition-all duration-700 hover:border-orange-200 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2;
}

.icon-box {
  @apply w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-orange-500/20;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>