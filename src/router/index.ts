import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import DoDList from "@/views/DoDList.vue";
import DoDDetail from "@/views/DoDDetail.vue";
import Todo from "@/views/Todo.vue";
import TodoNew from "@/views/TodoNew.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/dods",
    name: "DoDList",
    component: DoDList,
  },
  {
    path: "/dods/:id",
    name: "DoDDetail",
    component: DoDDetail,
  },
  {
    path: "/todo/new",
    name: "TodoNew",
    component: TodoNew,
  },
  {
    path: "/todo/:id",
    name: "Todo",
    component: Todo,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
