<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="card">
                <section class="sec" v-for="task in tasks" :key="task.id" > 
                        <div class="row gx-5">
                        

                        <div class="col-md-6 mb-4 " style="text-align: left; margin-top: 15px;">
                            <h4 style="color: rgb(0, 0, 0);"><strong>{{ task.nome }}</strong></h4>
                            <p class="text-muted">
                            {{ task.descrizione }}
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
                tasks:[
                    new Task("11/09/2002", "18/09/2002", "torri_gemelle" , "2°torre", "attacco magico"),
                    new Task("11/09/2002", "18/09/2002", "torri_gemelle" , "2°torre", "attacco magico"),
                    new Task("11/09/2002", "18/09/2002", "torri_gemelle" , "2°torre", "attacco magico")
                ]
            }
        },
        created(){
            if(!localStorage.getItem('role'))
                this.$router.push("/")
        }
    }

    class Task{
        constructor(dataInizio, dataFine, nome, modulo, descrizione, id = null){
            this.dataInizio = dataInizio;
            this.dataFine = dataFine;
            this.nome = nome;
            this.modulo = modulo;
            this.descrizione = descrizione;
            this.id = id;
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
    .card{
        overflow-y: scroll;
    }
    .sec{
        border-bottom: 1px solid rgb(219, 219, 219);

    }
</style>