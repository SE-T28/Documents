
//Import dei vari file delle pagine
import HomePage from "./views/HomePage.vue"
import AstronautsPage from "./views/AstronautsPage.vue"
import LoginPage from "./views/LoginPage.vue"
import NewsPage from "./views/NewsPage"
import AgenciesPage from "./views/AgenciesPage.vue"
import HistoryMissions from "./views/HistoryMission.vue"


// Mancanza di task + user add / del / mod

// ---------
import { createRouter, createWebHashHistory } from "vue-router"
const routeInfos = [
    { path: "/", component: HomePage },
    { path: "/astronautsPage", component: AstronautsPage },
    { path: "/loginPage", component: LoginPage },
    { path: "/newsPage", component: NewsPage },
    { path: "/agenciesPage", component: AgenciesPage },
    { path: "/historyMissions", component: HistoryMissions },
    //{ path: "/routes/auth.routes.js" , component: () => import('./routes/auth.routes.js')},
    { path: "/tasks" , component: () => import('./views/AllTasks.vue')},
    { path: "/addTask" , component: () => import('./components/FormAddTask.vue')},
    { path: "/editTask" , component: () => import('./components/FormEditTask.vue')},
    { path: "/deleteTask", component: () => import('./components/FormDeleteTask.vue')},
    { path: "/addUser" , component: () => import('./components/AddUser.vue')},
    { path: "/deleteUser", component: () => import('./components/DeleteUser.vue')},
    { path: "/logOut" , component: () => import('./components/LogOut.vue')},
    
]
    
const router = createRouter({
    history : createWebHashHistory(),
    routes : routeInfos
})
    
export default router;