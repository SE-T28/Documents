
//Import dei vari file delle pagine
import HomePage from "./views/HomePage.vue"
import AstronautsPage from "./views/AstronautsPage.vue"
import LoginPage from "./views/LoginPage.vue"
import NewsPage from "./views/NewsPage"
import AgenciesPage from "./views/AgenciesPage.vue"
import HistoryMissions from "./views/HistoryMission.vue"

// Mancanza di task + user add / del / mod

// ---------
import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    { path: "/", component: HomePage },
    { path: "/astronautsPage", component: AstronautsPage },
    { path: "/loginPage", component: LoginPage },
    { path: "/newsPage", component: NewsPage },
    { path: "/agenciesPage", component: AgenciesPage },
    { path: "/historyMissions", component: HistoryMissions },
    { path: "/components/Login.vue" , component: () => import('./components/Login.vue')},
]
    
const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})
    
export default router;