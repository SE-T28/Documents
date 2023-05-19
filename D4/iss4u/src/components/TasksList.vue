<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="row">
                    
                    <div class="col-md-4">
                        <div class="input-group">
                            <input class="form-control py-2 " style="border-right: 0px !important;" type="search" id="example-search-input" v-model="searchQuery" placeholder="Cerca task... (nome o titolo)">
                            
                            <div class="input-group-text " style="border-left: 0px !important;" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></div>
                        </div>
                    </div>
                </div>   
            <div class="card">
                <section class="sec" v-if="tasks.length != 0" v-for="task in tasks" :key="task.nome" > 
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
                <section v-else>
                    <p> Nessuna task ancora assegnata</p>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import { getTasks } from '../api/tasks/getTask'
    var value = 1;
    export default{
        data(){
            return{
                searchQuery: null,
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
            
            this.getList()
        },
        methods:{
            getList(){
                getTasks().then((response) => {
                    for(let i = 0; i < response.data.length; i++){
                        this.tasks.push(
                            new Task(
                                response.data[i].dataInizio, 
                                response.data[i].dataFine, 
                                response.data[i].nome, 
                                response.data[i].modulo, 
                                response.data[i].descrizione, 
                                response.data[i].id
                            ))
                    }
                })
            }
        },
        computed:{
            tasks(){
                if(this.searchQuery){
                    return this.tasks.filter(item => {
                        return this.searchQuery.toLowerCase().split(" ").every(v => item.nome.toLowerCase().includes(v) || item.id != null ? item.id.toLowerCase().includes(v) : false);
                    });
                }else{
                    return this.tasks;
                }
            }
            
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
        height: 80vh;
        
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