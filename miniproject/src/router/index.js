import { createRouter, createWebHistory } from 'vue-router'
import TodosPage from "@/pages/TodosPage.vue";
import PostsPage from "@/pages/PostsPage.vue";
import AlbumsPage from "@/pages/AlbumsPage.vue";
import MainPage from "@/pages/MainPage.vue";
import UserPage from "@/pages/UserPage.vue";
import CommentsPage from "@/pages/CommentsPage.vue";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: UserPage,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosPage,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostsPage,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/posts/:postId/comments',
    name: 'Post',
    component: CommentsPage,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/albums',
    name: 'Albums',
    component: AlbumsPage,
    meta: {
      requiredAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
