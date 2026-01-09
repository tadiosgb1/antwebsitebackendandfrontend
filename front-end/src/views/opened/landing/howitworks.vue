<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.03]" 
         style="background-image: linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="mb-20">
        <h2 class="text-xs font-black uppercase tracking-[0.5em] text-orange-600 mb-6">The Ecosystem Flow</h2>
        <h3 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter italic leading-none">
          How <span class="text-orange-500 text-shadow">Ant B2B</span> Works.
        </h3>
      </div>

      <div class="relative">
        <div class="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          
          <div class="step-card group">
            <div class="number-tag">01</div>
            <div class="icon-circle">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h4 class="text-2xl font-black text-slate-900 mb-4 italic">Suppliers Post</h4>
            <p class="text-slate-500 font-medium text-sm leading-relaxed">
              Manufacturers and wholesalers list their inventory, set bulk pricing, and manage digital catalogs with real-time updates.
            </p>
            <div class="status-pill">Inventory Hub</div>
          </div>

          <div class="step-card group">
            <div class="number-tag">02</div>
            <div class="icon-circle">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <h4 class="text-2xl font-black text-slate-900 mb-4 italic">Retailers Order</h4>
            <p class="text-slate-500 font-medium text-sm leading-relaxed">
              Shop owners browse verified products, compare rates, and place bulk orders through a secure unified checkout system.
            </p>
            <div class="status-pill">Smart Sourcing</div>
          </div>

          <div class="step-card group">
            <div class="number-tag">03</div>
            <div class="icon-circle">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
            </div>
            <h4 class="text-2xl font-black text-slate-900 mb-4 italic">Drivers Dispatch</h4>
            <p class="text-slate-500 font-medium text-sm leading-relaxed">
              Automated logistics routing assigns the nearest driver. Goods are picked up and tracked with GPS precision from warehouse to destination.
            </p>
            <div class="status-pill">Active Logistics</div>
          </div>

          <div class="step-card group">
            <div class="number-tag">04</div>
            <div class="icon-circle">
              <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 class="text-2xl font-black text-slate-900 mb-4 italic">Secure Delivery</h4>
            <p class="text-slate-500 font-medium text-sm leading-relaxed">
              Retailers confirm receipt via digital signature. Funds are released, and the supply chain cycle completes with full data transparency.
            </p>
            <div class="status-pill">Final Fulfillment</div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorks"
};
</script>

<style scoped>
.step-card {
  @apply relative p-10 bg-white border border-slate-100 rounded-[3rem] transition-all duration-700 hover:border-orange-200 hover:shadow-2xl hover:-translate-y-2;
}

.icon-circle {
  @apply w-20 h-20 rounded-3xl bg-slate-50 text-slate-900 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-orange-600 group-hover:text-white group-hover:rotate-6 shadow-sm;
}

.number-tag {
  @apply absolute top-8 right-8 text-4xl font-black italic text-slate-50 group-hover:text-orange-50 transition-colors duration-500;
}

.status-pill {
  @apply mt-6 inline-block px-4 py-1.5 bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-full transition-all group-hover:bg-orange-50 group-hover:text-orange-600;
}

.text-shadow {
  text-shadow: 0 10px 30px rgba(249, 115, 22, 0.2);
}
</style>