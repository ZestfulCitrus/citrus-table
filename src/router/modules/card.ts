export default {
  path: "/card",
  redirect: "/card/magicCard",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "卡片容器类",
    rank: 9
  },
  children: [
    {
      path: "/card/magicCard",
      name: "magicCard",
      component: () => import("@/views/card/magicCard/index.vue"),
      meta: {
        title: "magicCard"
      }
    },
    {
      path: "/card/cardColumn",
      name: "cardColumn",
      component: () => import("@/views/card/cardColumn/index.vue"),
      meta: {
        title: "cardColumn"
      }
    }
  ]
} satisfies RouteConfigsTable;
