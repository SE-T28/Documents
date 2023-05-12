

<template>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <!--Da qui si potranno direttamente aggiungere, eliminare e modificare le tasks-->
    <div class="" >
        <Tasks/>
        <div class="container">
            <!--3 bootstrap buttons, one for Form add task, one for delete task and one for modify task in row-->
            <div class="row rowBtn" >
                <div class="col-md-4 col-sm-4" @click="showComponent('Add')">
                    <div class="wrimagecard wrimagecard-topimage" >
                        <!-- <a href="#"  @click="$router.push('/addTask')"> -->
                        <a>
                        <div class="wrimagecard-topimage_header" style="background-color:rgba(36, 187, 46, 0.1) ">
                            <center><i class="fa fa-plus" style="color:#148c26"></i></center>
                        </div>
                        <div class="wrimagecard-topimage_title">
                            <h4>Aggiungi task</h4>
                        </div>
                        </a>
                    </div>
                </div>
                
                <div class="col-md-4 col-sm-4" @click="showComponent('Delete')">
                    <div class="wrimagecard wrimagecard-topimage">
                        <a >
                        <div class="wrimagecard-topimage_header" style="background-color:rgba(187, 36, 36, 0.1) ">
                            <center><i class="fa fa-minus" style="color:#d21515"></i></center>
                        </div>
                        <div class="wrimagecard-topimage_title">
                            <h4>Elimina task</h4>
                        </div>
                        </a>
                    </div>
                </div>

                <div class="col-md-4 col-sm-4" @click="showComponent('Edit')">
                    <div class="wrimagecard wrimagecard-topimage">
                        <a >
                        <div class="wrimagecard-topimage_header" style="background-color:rgba(187, 120, 36, 0.1) ">
                            <center><i class="fa fa-pencil" style="color:#BB7824"></i></center>
                        </div>
                        <div class="wrimagecard-topimage_title">
                            <h4>Modifica task</h4>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-if="currentComponent=='Add'">
                    <AddTask/>
                </div>
                <div v-if="currentComponent=='Delete'">
                    <DeleteTask/>
                </div>
                <div v-if="currentComponent=='Edit'">
                    <EditTask/>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
    import Footer from "../components/MyFooter.vue"
    import Tasks from "../components/TasksList.vue"
    import AddTask from "../components/FormAddTask.vue"
    import DeleteTask from "../components/FormDeleteTask.vue"
    import EditTask from "../components/FormEditTask.vue"


    export default{
        data(){
            return{
                currentComponent : null,
            };
        },
        components:{
            Footer, Tasks, AddTask, DeleteTask, EditTask
        },
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }
        },
        methods:{
            showComponent(componentName){
                if(this.currentComponent === componentName){
                    this.currentComponent = null;
                }else{
                    this.currentComponent = componentName;
                }
            }
        }
    }
</script>



<style scoped>
    .body{
        width: 100%;
        height: 100%;
    }
    .rowBtn{
        margin-top: 50px;
    }
    .wrimagecard{	
	margin-top: 0;
    margin-bottom: 1.5rem;
    text-align: left;
    position: relative;
    background: #fff;
    box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
    border-radius: 4px;
        transition: all 0.3s ease;
        cursor: pointer;
    }
.wrimagecard .fa{
	position: relative;
    font-size: 70px;
}
.wrimagecard-topimage_header{
padding: 20px;
}
a.wrimagecard:hover, .wrimagecard-topimage:hover {
    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
}
.wrimagecard-topimage a {
    width: 100%;
    height: 100%;
    display: block;
}
.wrimagecard-topimage_title {
    padding: 20px 24px;
    height: 80px;
    padding-bottom: 0.75rem;
    position: relative;
}
.wrimagecard-topimage a {
    border-bottom: none;
    text-decoration: none;
    color: #525c65;
    transition: color 0.3s ease;
}


</style>