<template>
  <nav class="navbar navbar-expand-lg " style="padding-left: 20px; padding-top: 0%; z-index: 100;">

    <button class="navbar-toggler navBarBtn" type="button" style="" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbarDiv" id="navbarNav">
    <ul class="navbar-nav myUl flex-fill">
      <li class="nav-item myItem no-underline">
        <router-link class="navbar-brand" to="/"><img src="../assets/iss4u.png"></router-link>
      </li>
      <li class="nav-item  myItem flex-fill">
        <router-link class="nav-link" to="/">Components</router-link>
      </li>
      <li class="nav-item myItem  flex-fill">
        <router-link class="nav-link" to="/agenciesPage">Agencies</router-link>
      </li>
      <li class="nav-item myItem  flex-fill">
        <router-link class="nav-link" to="/astronautsPage">Astronauts</router-link>
      </li>
      <li class="nav-item myItem  flex-fill">
        <router-link class="nav-link" to="/historyMissions">History Missions</router-link>
      </li>
      <li class="nav-item myItem  flex-fill">
        <router-link class="nav-link" to="/newsPage">News</router-link>
      </li>
      <!--<li class="nav-item flex-fill" >
        <router-link class="nav-link" to="/loginPage">Welcome {{ loggedUser }}
          <img src="../assets/user.png" style="width:30px; height: 30px;">
        </router-link>
        
      </li>-->
      <li class="nav-item myItem  flex-fill" v-if="roleUser == null">
        <!-- User non loggato-->
        <router-link class="nav-link" to="/loginPage">Welcome {{ loggedUser }}
          <img src="../assets/user.png" style="width:30px; height: 30px;">
        </router-link>
      </li>


      <li class="nav-item myItem flex-fill" v-else-if="roleUser == 'ROLE_AMMINISTRATORE'">
        <!-- User loggato come amministratore-->
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Welcome {{ loggedUser }}
          <img src="../assets/user.png" style="width:30px; height: 30px; float:right">
        </a>
        <ul class="dropdown-menu dropdown-menu-end drop " aria-labelledby="navbarDropdown">
          <li class="nav-item myRow"><a class="dropdown-item" href="#">Action</a></li>
          <li class="nav-item myRow"><a class="dropdown-item" href="#">Another action</a></li>
        </ul>

      </li>


      <li class="nav-item myItem flex-fill" v-else>
        <!-- User loggato come tecnico interno-->
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Welcome {{ loggedUser }}
          <img src="../assets/user.png" style="width:30px; height: 30px; float:right">
        </a>
        <ul class="dropdown-menu dropdown-menu-end drop " aria-labelledby="navbarDropdown">
          <li class="nav-item myRow"><a class="dropdown-item" href="#">Action</a></li>
          <li class="nav-item myRow"><a class="dropdown-item" href="#">Another action</a></li>
        </ul>

      </li>
    </ul>

  </div>
</nav>
</template>

<!--modify variable user if logged then use his name else write "welcome user"-->
<script>
// Check if already logged in with token



import 'bootstrap'

export default { 
    name: 'NavBar',
    data(){
      return{
        loggedUser: "",
        roleUser: null
      }
    },
    created(){
      this.loggedUser += localStorage.getItem('user') ? localStorage.getItem('user') : "user";
      if(localStorage.getItem('role') != undefined)
        this.roleUser = localStorage.getItem('role');
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.drop{
  margin-top: 1px;
  width: -webkit-fill-available;
  right: auto !important;
  background-color: #343A40 !important;
}
.myRow:hover, .myRow router-link{
  background-color: transparent !important;
}
.navbarBtn{
  border: 1px solid rgba(125, 125, 125, 0.1); 
  border-radius: 10; 
  margin-right: 5px;
}
.navbarDiv{
  position: absolute;
  width: 100%;
  margin-top: 40px;
}

nav{
  padding: 0px !important;
  font-family: 'Poppins', 'Arial', sans-serif;
  font-weight: 550;
  margin-bottom: 46px;
}
.NavBar {
  height: 139px;
}
li.myItem, img{
  height: 40px;

  margin-left: 10px;
}
.NavBar img {
  display: inline-block;
}

.NavBar ul.myUl {
  display: inline-block;
  list-style: none;
}
li.myItem{
  margin: 0px;
  border-left: 0px;
  border-style: solid;
  border-image: 
    linear-gradient(
      to bottom, 
      #6C757D, 
      rgba(0, 0, 0,0)
    ) 1 100%;
  
}

ul.myUl{
  list-style: none;
  padding: 0;
  margin: 0;
}
ul.myUl li.myItem{
  float: left;
  margin: 0 5pxrouter-link
}
ul.myUl li.myItem a{
  text-decoration:none;
  color: white;
}
ul.myUl li.myItem a:hover{
  color: white;
  border-bottom: 2px solid #FF488A;
}
ul.myUl li.myItem a:focus{
  color: white;
}
.no-underline a:hover{
  border-bottom: none !important;
}

</style>
