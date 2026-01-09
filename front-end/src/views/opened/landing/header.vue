<template>
  <header class="bg-white/90 backdrop-blur-md border-b border-slate-100 fixed w-full top-0 left-0 z-[100]">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
  <router-link to="/" class="flex items-center gap-2">
  <div
    class=""
  >
    <img
      src="../../../assets/img/logo1.jpg"
      alt="ANT Logo"
      class="round-lg w-12 h-10 object-contain "
    />
  </div>

  <span class="text-2xl font-black tracking-tight text-slate-900">
    ANT B2B<span class="text-orange-500">.</span>
  </span>
</router-link>


      <nav class="hidden lg:flex items-center space-x-1">
        <router-link 
          v-for="link in navigation" 
          :key="link.path" 
          :to="link.path"
          class="nav-link relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300"
          active-class="active-link"
        >
          {{ link.name }}
          <span class="indicator absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300"></span>
        </router-link>
      </nav>

      <div v-if="showbuttns" class="hidden md:flex items-center space-x-4">
        <router-link
          to="/login"
          class="text-sm font-bold text-slate-600 hover:text-orange-500 transition-colors"
        >
          Partner Login
        </router-link>

        <router-link
          to="/register"
          class="px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-orange-500 transition-all shadow-lg shadow-slate-200"
        >
          Get Started
        </router-link>
      </div>

      <button @click="mobileMenu = !mobileMenu" class="lg:hidden text-slate-900 focus:outline-none">
        <div class="w-6 h-5 relative flex flex-col justify-between">
          <span :class="['h-0.5 w-full bg-current transition-all', mobileMenu ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['h-0.5 w-full bg-current transition-all', mobileMenu ? 'opacity-0' : '']"></span>
          <span :class="['h-0.5 w-full bg-current transition-all', mobileMenu ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </div>

    <transition name="mobile-slide">
      <div v-if="mobileMenu" class="lg:hidden bg-white border-t border-slate-100 absolute w-full left-0 shadow-2xl">
        <div class="px-6 py-8 space-y-6">
          <router-link 
            v-for="link in navigation" 
            :key="link.path" 
            :to="link.path" 
            @click="closeMenu"
            class="block text-xl font-bold text-slate-900 hover:text-orange-500"
            active-class="text-orange-500"
          >
            {{ link.name }}
          </router-link>

          <div class="pt-6 border-t border-slate-100 flex flex-col gap-4">
            <router-link to="/login" @click="closeMenu" class="text-center font-bold text-slate-600">Login</router-link>
            <router-link to="/register" @click="closeMenu" class="block bg-orange-500 text-white text-center py-4 rounded-xl font-bold">Get Started</router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
      navigation: [
        { name: 'Home', path: '/' },
        // { name: 'Marketplace', path: '/marketplace' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
         { name: 'Products', path: '/products' },
        { name: 'News', path: '/news' },

        { name: 'Events', path: '/events' },
        { name: 'Jobs', path: '/jobs' },
        // { name: 'Blogs', path: '/blogs' },
        { name: 'Contact us', path: '/contact-us' },
      ]
    };
  },
  methods: {
    closeMenu() {
      this.mobileMenu = false;
    }
  }
};
</script>

<style scoped>
/* Base Link Style */
.nav-link {
  color: #64748b; /* slate-500 */
}

/* Hover Effect */
.nav-link:hover {
  color: #f97316; /* orange-500 */
}

/* Active Link State */
.active-link {
  color: #0f172a !important; /* slate-900 */
}

.active-link .indicator {
  width: 20px; /* Small professional indicator line */
  background-color: #f97316;
}

/* Mobile Menu Transition */
.mobile-slide-enter-active, .mobile-slide-leave-active {
  transition: all 0.3s ease-out;
}
.mobile-slide-enter-from, .mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>