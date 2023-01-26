<template>
  <div>
    <NavBar/>
    <EarthHome/>
    <IssAPI/>
    <ComponentsView/>
    <!--<HelloWorld msg="ISS4U"/>-->
    
    <MyFooter/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import EarthHome from './components/EarthHome.vue'
import IssAPI from './components/IssAPI.vue';
import ComponentsView from './components/ComponentsView.vue';
import MyFooter from './components/MyFooter.vue';


export default {
  name: 'App',
  components: {
    /*HelloWorld,*/ NavBar, EarthHome, IssAPI, ComponentsView, MyFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
