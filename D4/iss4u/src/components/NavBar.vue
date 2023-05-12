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
          <li class="nav-item myRow"><router-link class="dropdown-item" to="/addUser">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
            Aggiungi utente
          </router-link></li>
          <li class="nav-item myRow"><router-link class="dropdown-item" to="/deleteUser">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
             Elimina utente
          </router-link></li>
          <li class="nav-item myRow"><router-link class="dropdown-item" to="/tasks">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
              <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
            </svg>
            Visualizza task
          </router-link></li>
          <li class="nav-item myRow"><router-link class="dropdown-item" to="/logOut">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
            Log out
          </router-link></li>
        </ul>

      </li>


      <li class="nav-item myItem flex-fill" v-else>
        <!-- User loggato come tecnico interno-->
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Welcome {{ loggedUser }}
          <img src="../assets/user.png" style="width:30px; height: 30px; float:right">
        </a>
        <ul class="dropdown-menu dropdown-menu-end drop " aria-labelledby="navbarDropdown">
          <li class="nav-item myRow"><router-link class="dropdown-item" to="/tasks">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
              <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
            </svg>
            Visualizza task
          </router-link></li>
          <li class="nav-item myRow"><router-link class="dropdown-item" to="/logOut">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
            Log out
          </router-link></li>
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
  background-color: #343a40 !important;
}

.dropdown-item:hover{
  background-color: transparent;
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
