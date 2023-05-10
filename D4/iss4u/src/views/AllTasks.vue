<template>
    <!--Da qui si potranno direttamente aggiungere, eliminare e modificare le tasks-->
    <div class="" >
        <Tasks/>
    </div>
    <!--<Footer/>-->
</template>

<script>
    import Footer from "../components/MyFooter.vue"
    import Tasks from "../components/TasksList.vue"
    
    export default{
        data(){

        },
        components:{
            Footer, Tasks
        },
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }
        }
    }
</script>

<style scoped>
    .body{
        width: 100%;
        height: 100%;
    }
</style>