<template>
    <div class="home">
      
      <div class="home-content">
        <HomeHeader />
        <IssAPI />
        <ComponentsViewVue />
        <MyFooter />
      </div>
    </div>
  </template>
  
  <script>
  import HomeHeader from "../components/EarthHome.vue";
  import IssAPI from "../components/IssAPI.vue";
  import ComponentsViewVue from "@/components/ComponentsView.vue";
  import MyFooter from "../components/MyFooter.vue"

  export default {
    name: "Home",
    components: {
      HomeHeader, IssAPI, MyFooter, ComponentsViewVue
    },
    created()
    {
      if(localStorage.getItem('reload')){
        localStorage.removeItem('reload');
        window.location.reload();
      }
    }
  };
  </script>
  
  <style scoped>

  </style>