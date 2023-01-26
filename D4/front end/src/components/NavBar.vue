<template>
  <nav class="navbar navbar-expand-lg " style="padding-left: 20px; padding-top: 0%;">

    <button class="navbar-toggler navBarBtn" type="button" style="" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbarDiv" id="navbarNav">
    <ul class="navbar-nav flex-fill">
      <li class="nav-item no-underline">
        <a class="navbar-brand" href="#"><img src="../assets/iss4u.png"></a>
      </li>
      <li class="nav-item flex-fill">
        <a class="nav-link" href="#">Components</a>
      </li>
      <li class="nav-item flex-fill">
        <a class="nav-link" href="#">Agencies</a>
      </li>
      <li class="nav-item flex-fill">
        <a class="nav-link" href="#">Astronauts</a>
      </li>
      <li class="nav-item flex-fill">
        <a class="nav-link" href="#">History Missions</a>
      </li>
      <li class="nav-item flex-fill">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item flex-fill">
        <a class="nav-link" href="#">{{ user }}<img src="../assets/user.png" style="width:30px; height: 30px;"></a>
        
      </li>
    </ul>
  </div>
</nav>
</template>

<!--modify variable user if logged then use his name else write "welcome user"-->
<script>
import 'bootstrap'
export default { 
  
    name: 'NavBar',
    data() {
        return {
            user:
                'Welcome User'
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
.NavBar {
  height: 139px;
}
li, img{
  height: 40px;

  margin-left: 10px;
}
.NavBar img {
  display: inline-block;
}

.NavBar ul {
  display: inline-block;
  list-style: none;
}
li{
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

ul{
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li{
  float: left;
  margin: 0 5px;
}
ul li a{
  text-decoration:none;
  color: white;
}
ul li a:hover{
  color: white;
  border-bottom: 2px solid #FF488A;
}
ul li a:focus{
  color: white;
}
.no-underline a:hover{
  border-bottom: none !important;
}

</style>
