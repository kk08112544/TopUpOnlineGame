const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/SignIn", component: () => import("pages/SignInPage.vue") },
      { path: "/SignUp", component: () => import("pages/SignUpPage.vue") },
      { path: "/Home", component: () => import("pages/HomePage.vue") },
      { path: "/TranHis", component: () => import("pages/TranHisPage.vue") },
      { path: "/TopUp", component: () => import("pages/TopUpPage.vue") },
      { path: "/Cart", component: () => import("pages/CartPage.vue") },
      { path: "/Pay", component: () => import("pages/PayPage.vue") },
      {
        path: "/TopDetails",
        component: () => import("pages/TopDetailsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
