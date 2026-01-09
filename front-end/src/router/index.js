import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/opened/landing/Home.vue';
import Login from '../views/opened/auth/login.vue';
import ContactUs from '../views/opened/landing/contactUs.vue';
import Services from '../views/opened/landing/services.vue';
import About from '../views/opened/landing/about.vue';
import News from '../views/opened/landing/news.vue';

import Events from '../views/opened/landing/Events.vue';

import Jobs from '../views/opened/landing/jobs.vue';
import Products from '../views/opened/landing/products.vue';

import ResetPassword from '../views/opened/auth/ResetPassword.vue';
import ForgotPasssword from '../views/opened/auth/forgotPassword.vue';
import Registration from '../views/opened/auth/login.vue'; // note: same file as login
import Reset from '../views/opened/auth/reset.vue';
import AccessDenied from "../views/opened/auth/accessDenied.vue";
import first_dash from '../views/closed/first_dash.vue';
import dashboard from '../views/closed/dashboard.vue';

import Permissions from '../views/closed/permissions/view.vue';
import Roles from '../views/closed/groups/view.vue';
import Notifications from '../views/closed/notifications/view.vue';
import notificationDetail from '../views/closed/notifications/notificationDeatil.vue';
import Commissions from '../views/closed/commissions/view.vue';
import Messages from '../views/closed/Messages/message.vue';
import Inbox from '../views/closed/inbox/view.vue';
const routes = [
  // Public routes
  // { path: "/", name: "home", component: Home, meta: { requiresGuest: true } },
  { path: "/login", name: "login", component: Login, meta: { requiresGuest: true } },
  { path: "/", name: "Home", component: Home, meta: { requiresGuest: true } },
  { path: "/news", name: "News", component: News, meta: { requiresGuest: true } },
 { path: "/events", name: "Events", component: Events, meta: { requiresGuest: true } },
 { path: "/jobs", name: "jobs", component: Jobs, meta: { requiresGuest: true } },
 { path: "/products", name: "products", component: Products, meta: { requiresGuest: true } },

  { path: "/register", name: "register", component: Registration, meta: { requiresGuest: true } },
  { path: "/contact-us", name: "contact-us", component: ContactUs, meta: { requiresGuest: true } },
  { path: "/about", name: "about", component: About, meta: { requiresGuest: true } },
  { path: "/services", name: "services", component: Services, meta: { requiresGuest: true } },
  { path: "/forgot-password", name: "ForgotPassword", component: ForgotPasssword, props: true },
  { path: "/:lang/reset-password", name: "ResetPassword", component: ResetPassword, props: true },
  { path: "/reset/:token", name: "reset", component: Reset, meta: { requiresGuest: true } },

  // Dashboard (protected area)
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
    meta: { requiresGuest: true },
    children: [
    {
      path: "solutions",
      name: "Solutions-view",
      component: () => import('../views/closed/Solutions/SolutionsView.vue'),
    },
    {
      path: "solutions/add",
      name: "Solutions-add",
      component: () => import('../views/closed/Solutions/AddSolutions.vue'),
    },
    {
      path: "solutions/edit/:id",
      name: "Solutions-edit",
      component: () => import('../views/closed/Solutions/EditSolutions.vue'),
      props:true,
    },
    {
      path: "solutions/detail/:id",
      name: "Solutions-detail",
      component: () => import('../views/closed/Solutions/SolutionsDetail.vue'),
      props:true,
    },

      {
        path: "jobs",
        name: "Jobposts-view",
        component: () => import('../views/closed/JobS/JobpostsView.vue'),
      },
      {
        path: "jobs/add",
        name: "Jobposts-add",
        component: () => import('../views/closed/JobS/AddJobposts.vue'),
      },
      {
        path: "jobs/edit/:id",
        name: "Jobposts-edit",
        component: () => import('../views/closed/JobS/EditJobposts.vue'),
        props: true,
      },
      {
        path: "jobs/detail/:id",
        name: "Jobposts-detail",
        component: () => import('../views/closed/JobS/JobpostsDetail.vue'),
        props: true,
      },

    {
      path: "testimonial",
      name: "Testimonial-view",
      component: () => import('../views/closed/Testimonial/TestimonialView.vue'),
    },
    {
      path: "testimonial/add",
      name: "Testimonial-add",
      component: () => import('../views/closed/Testimonial/AddTestimonial.vue'),
    },
    {
      path: "testimonial/edit/:id",
      name: "Testimonial-edit",
      component: () => import('../views/closed/Testimonial/EditTestimonial.vue'),
      props:true,
    },
    {
      path: "testimonial/detail/:id",
      name: "Testimonial-detail",
      component: () => import('../views/closed/Testimonial/TestimonialDetail.vue'),
      props:true,
    },

    {
      path: "service",
      name: "Service-view",
      component: () => import('../views/closed/Service/ServiceView.vue'),
    },
    {
      path: "service/add",
      name: "Service-add",
      component: () => import('../views/closed/Service/AddService.vue'),
    },
    {
      path: "service/edit/:id",
      name: "Service-edit",
      component: () => import('../views/closed/Service/EditService.vue'),
      props:true,
    },
    {
      path: "service/detail/:id",
      name: "Service-detail",
      component: () => import('../views/closed/Service/ServiceDetail.vue'),
      props:true,
    },

    {
      path: "team",
      name: "Team-view",
      component: () => import('../views/closed/Team/TeamView.vue'),
    },
    {
      path: "team/add",
      name: "Team-add",
      component: () => import('../views/closed/Team/AddTeam.vue'),
    },
    {
      path: "team/edit/:id",
      name: "Team-edit",
      component: () => import('../views/closed/Team/EditTeam.vue'),
      props:true,
    },
    {
      path: "team/detail/:id",
      name: "Team-detail",
      component: () => import('../views/closed/Team/TeamDetail.vue'),
      props:true,
    },

    {
      path: "partner",
      name: "Partner-view",
      component: () => import('../views/closed/Partner/PartnerView.vue'),
    },
    {
      path: "partner/add",
      name: "Partner-add",
      component: () => import('../views/closed/Partner/AddPartner.vue'),
    },
    {
      path: "partner/edit/:id",
      name: "Partner-edit",
      component: () => import('../views/closed/Partner/EditPartner.vue'),
      props:true,
    },
    {
      path: "partner/detail/:id",
      name: "Partner-detail",
      component: () => import('../views/closed/Partner/PartnerDetail.vue'),
      props:true,
    },

    

      {
        path: "subscribers",
        name: "Subscribers-view",
        component: () => import('../views/closed/Subscribers/SubscribersView.vue'),
      },
      {
        path: "subscribers/add",
        name: "Subscribers-add",
        component: () => import('../views/closed/Subscribers/AddSubscribers.vue'),
      },
      {
        path: "subscribers/edit/:id",
        name: "Subscribers-edit",
        component: () => import('../views/closed/Subscribers/EditSubscribers.vue'),
        props: true,
      },
      {
        path: "subscribers/detail/:id",
        name: "Subscribers-detail",
        component: () => import('../views/closed/Subscribers/SubscribersDetail.vue'),
        props: true,
      },

      

    {
      path: "gallery",
      name: "Gallery-view",
      component: () => import('../views/closed/Gallery/GalleryView.vue'),
    },
    {
      path: "gallery/add",
      name: "Gallery-add",
      component: () => import('../views/closed/Gallery/AddGallery.vue'),
    },
    {
      path: "gallery/edit/:id",
      name: "Gallery-edit",
      component: () => import('../views/closed/Gallery/EditGallery.vue'),
      props:true,
    },
    {
      path: "gallery/detail/:id",
      name: "Gallery-detail",
      component: () => import('../views/closed/Gallery/GalleryDetail.vue'),
      props:true,
    },

   

    {
      path: "events",
      name: "Events-view",
      component: () => import('../views/closed/Events/EventsView.vue'),
    },
    {
      path: "events/add",
      name: "Events-add",
      component: () => import('../views/closed/Events/AddEvents.vue'),
    },
    {
      path: "events/edit/:id",
      name: "Events-edit",
      component: () => import('../views/closed/Events/EditEvents.vue'),
      props:true,
    },
    {
      path: "events/detail/:id",
      name: "Events-detail",
      component: () => import('../views/closed/Events/EventsDetail.vue'),
      props:true,
    },

 

    {
      path: "news",
      name: "News-view",
      component: () => import('../views/closed/News/NewsView.vue'),
    },
    {
      path: "news/add",
      name: "News-add",
      component: () => import('../views/closed/News/AddNews.vue'),
    },
    {
      path: "news/edit/:id",
      name: "News-edit",
      component: () => import('../views/closed/News/EditNews.vue'),
      props:true,
    },
    {
      path: "news/detail/:id",
      name: "News-detail",
      component: () => import('../views/closed/News/NewsDetail.vue'),
      props:true,
    },


      



      {
        path: "contacts",
        name: "Contacts-view",
        component: () => import('../views/closed/Contacts/ContactsView.vue'),
      },
      {
        path: "contacts/add",
        name: "Contacts-add",
        component: () => import('../views/closed/Contacts/AddContacts.vue'),
      },
      {
        path: "contacts/edit/:id",
        name: "Contacts-edit",
        component: () => import('../views/closed/Contacts/EditContacts.vue'),
        props: true,
      },
      {
        path: "contacts/detail/:id",
        name: "Contacts-detail",
        component: () => import('../views/closed/Contacts/ContactsDetail.vue'),
        props: true,
      },

    
      {
        path: "categories",
        name: "Category-view",
        component: () => import('../views/closed/Categories/CategoryView.vue'),
      },
      {
        path: "categories/add",
        name: "Category-add",
        component: () => import('../views/closed/Categories/AddCategory.vue'),
      },
      {
        path: "categories/edit/:id",
        name: "Category-edit",
        component: () => import('../views/closed/Categories/EditCategory.vue'),
        props: true,
      },
      {
        path: "categories/detail/:id",
        name: "Category-detail",
        component: () => import('../views/closed/Categories/CategoryDetail.vue'),
        props: true,
      },

      {
        path: "users",
        name: "User-view",
        component: () => import('../views/closed/Users/UserView.vue'),
      },
      {
        path: "users/add",
        name: "User-add",
        component: () => import('../views/closed/Users/AddUser.vue'),
      },
      {
        path: "users/edit/:id",
        name: "User-edit",
        component: () => import('../views/closed/Users/EditUser.vue'),
        props: true,
      },
      {
        path: "users/detail/:id",
        name: "User-detail",
        component: () => import('../views/closed/Users/UserDetail.vue'),
        props: true,
      },

    
      {
        path: "sites",
        name: "Sites-view",
        component: () => import('../views/closed/sites/SitesView.vue'),
      },
      {
        path: "sites/add",
        name: "Sites-add",
        component: () => import('../views/closed/sites/AddSites.vue'),
      },
      {
        path: "sites/edit/:id",
        name: "Sites-edit",
        component: () => import('../views/closed/sites/EditSites.vue'),
        props: true,
      },
      {
        path: "sites/detail/:id",
        name: "Sites-detail",
        component: () => import('../views/closed/sites/SitesDetail.vue'),
        props: true,
      },

      {
        path: "proporties",
        name: "Property-view",
        component: () => import('../views/closed/Proporties/PropertyView.vue'),
      },
      {
        path: "proporties/add",
        name: "Property-add",
        component: () => import('../views/closed/Proporties/AddProperty.vue'),
      },
      {
        path: "proporties/edit/:id",
        name: "Property-edit",
        component: () => import('../views/closed/Proporties/EditProperty.vue'),
        props: true,
      },
      {
        path: "proporties/detail/:id",
        name: "Property-detail",
        component: () => import('../views/closed/Proporties/PropertyDetail.vue'),
        props: true,
      },





    
      { path: "roles", name: "roles", component: Roles },
      { path: "permissions", name: "permissions", component: Permissions },
      
      { path: "first-dash", name: "first-dash", component: first_dash },
      { path: "messages", name: "messages", component: Messages },
      { path: "inbox", name: "inbox", component: Inbox },
      { path: "notifications", name: "notifications", component: Notifications },
      { path: "notification/:id", name: "notificationDetail", component: notificationDetail },
      { path: "commissions", name: "commissions", component: Commissions },
    ],
  },

  // Catch-all
  { path: "/:pathMatch(.*)*", name: "accessDenied", component: AccessDenied, meta: { requiresGuest: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  const requiredRole = to.meta.role;

  if (requiresAuth) {
    if (!isAuthenticated) {
      next("/login");
    } else if (requiredRole && userRole !== requiredRole) {
      localStorage.clear();
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
