<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="card">
                <section class="sec" v-for="task in tasks" :key="i" > 
                    <!--<div class="row gx-5">
                        

                        <div class="col-md-6 mb-4 " style="text-align: left; margin-top: 15px;">
                            <h4 style="color: rgb(0, 0, 0);"><strong>{{ task.nome }}</strong></h4>
                            <p class="text-muted">
                            {{ task.descrizione }}
                            </p>
                        </div>
                    </div>-->
                    <div class="row" style="margin-top: 10px;">
                        <div class="col-md-8 align" id="Name">
                            <div style="color: rgb(0, 0, 0);">{{ task.value }}. <strong class="fs-4"> {{ task.nome }}</strong> 
                                <span v-if="task.id != null" style="color:#707070"> - <span class="fs-5" >{{ task.id }}</span> </span> </div>
                        </div>
                        <div class="col-md-4" id="StartStopDate">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span style="margin-left: 5px;"> {{ task.dataInizio }} - {{ task.dataFine }}</span>
                        </div>
                        <div class="col-md-12 align" id="Module" style="color: #b1b1b1">
                            {{ task.modulo }}
                        </div>
                        <div class="col-md-12 align" id="Description">
                            <br>{{ task.descrizione }}
                        </div>
                    </div>
                </section> 
            </div>
        </div>
    </div>
</template>

<script>
    var value = 1;
    export default{
        data(){
            return{
                tasks:[
                    new Task("11/09/2002", "18/09/2002", "Torri_gemelle" , "altra torre", "attacco magico", "s23vbr3"),
                    new Task("11/09/2002", "18/09/2002", "Torri_gemelle" , "terza torre", "attacco magico", "a66xbx3"),
                    new Task("11/09/2002", "18/09/2002", "Torri_gemelle" , "terza torre", "attacco magico", "a66xbx3"),
                    new Task("11/09/2002", "18/09/2002", "Torri_gemelle" , "terza torre", "attacco magico", "a66xbx3"),
                    new Task("11/09/2002", "18/09/2002", "Torri_gemelle" , "quarta torre", "attacco magico")
                ],
                value : 0
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

            this.value = value;
            value = value +1;
        }
    }

</script>

<style scoped>

    .align{
        text-align: left;
    }
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
    .card::-webkit-scrollbar{
        width: 0;
    }
    .sec{
        border-bottom: 1px solid rgb(219, 219, 219);

    }
</style>