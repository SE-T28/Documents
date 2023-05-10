<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="card">
                <section class="sec" v-for="task in tasks" :key="task.id" > 
                        <div class="row gx-5">
                        

                        <div class="col-md-6 mb-4 " style="text-align: left; margin-top: 15px;">
                            <h4 style="color: white;"><strong>{{ task.title }}</strong></h4>
                            <p class="text-muted">
                            {{ task.description }}
                            </p>
                        </div>
                        </div>
                    </section> 
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                tasks:[]
            }
        },
        created(){
            if(!localStorage.getItem('role'))
                this.$router.push("/")
        }
    }
</script>

<style scoped>
    .taskBody{
        background-image: url("../assets/earth.png");
        width: 100%;
        height: 100vh;
        background-size: contain;
    }
    .container, .card{
        padding: 50px;
        height: 100%;
        
    }
</style>