import Vue from 'vue';
import Router from 'vue-router';
import Info from './components/user-info';
import List from './components/users-list';
import Chat from './components/chat/chat';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: Info,
    },
    {
      path: '/im/:chatId',
      name: 'chat',
      component: Chat,
    }
  ],
});

export default router;
