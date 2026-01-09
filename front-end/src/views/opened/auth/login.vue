<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 font-sans p-6">
    <div class="absolute top-0 left-0 w-full h-1.5 bg-orange-500"></div>

    <div class="w-full max-w-md">
      <div class="flex flex-col items-center mb-10">
        <div class="mb-6">
          <img 
            src="../../../assets/img/logo1.jpg" 
            alt="ANT B2B Logo" 
            class="h-20 w-auto object-contain drop-shadow-sm"
          />
        </div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Admin Portal</h1>
        <p class="text-slate-500 text-sm mt-1 font-medium">Please sign in to manage your operations</p>
      </div>

      <div class="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
        <div class="p-8 sm:p-10">
          <form @submit.prevent="login" class="space-y-6">
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2" for="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                v-model="form.email"
                required
                placeholder="admin@antb2b.com"
                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all duration-200 text-slate-900"
              />
            </div>

            <div>
              <div class="flex justify-between items-center mb-2">
                <label class="text-sm font-semibold text-slate-700" for="password">
                  Password
                </label>
                <router-link 
                  to="/forgot-password" 
                  class="text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors"
                >
                  Forgot password?
                </router-link>
              </div>
              <input
                id="password"
                type="password"
                v-model="form.password"
                required
                placeholder="••••••••"
                class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all duration-200 text-slate-900"
              />
            </div>

            <div v-if="error" class="flex items-center gap-2 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm font-medium">
              <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
              </svg>
              {{ error }}
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <span v-if="!loading">Sign In</span>
              <span v-else class="flex items-center">
                <svg class="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Authenticating...
              </span>
            </button>
          </form>
        </div>

        <div class="bg-slate-50 border-t border-slate-100 p-5 text-center">
          <p class="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Protected by ANT Security Systems
          </p>
        </div>
      </div>

      <div class="mt-8 flex justify-center gap-4 text-xs font-semibold text-slate-400">
        <a href="#" class="hover:text-orange-500 transition-colors">Help Desk</a>
        <span class="text-slate-200">|</span>
        <a href="#" class="hover:text-orange-500 transition-colors">Privacy Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminLogin",
  data() {
    return {
      form: { 
        email: "", 
        password: "" 
      },
      error: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.error = "";
      this.loading = true;
      try {
        const response = await this.$apiPost("/auth/login", { ...this.form });
        
        // Success: Store Admin Details
        localStorage.setItem("access", response.accessToken);
        localStorage.setItem("refresh", response.refreshToken);
        localStorage.setItem("userId", response.id);
        localStorage.setItem("email", response.email);
        
        this.$router.push({ path: "/dashboard/first-dash" });
      } catch (err) {
        this.error = err.response?.data?.message || "Access denied. Check your email and password.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Scoped styles for fonts if not globally defined */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.font-sans {
  font-family: 'Inter', sans-serif;
}
</style>