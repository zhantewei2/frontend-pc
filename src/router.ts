import Vue from 'vue';
import Router from 'vue-router';
import Part1 from "./views/part1/part1.routes";
import Part2 from "./views/part2/part2.routes";
import MainLayout from "./views/layout/main/main.vue";
import LoginView from "./views/common/login/login.vue"; 

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/login",
      component:LoginView
    },
    {
      path:"/main",
      component:MainLayout,
      children:[
        {path:"part1",children:Part1},
        {path:"part2",children:Part2}
      ]
    }
  ],
});
