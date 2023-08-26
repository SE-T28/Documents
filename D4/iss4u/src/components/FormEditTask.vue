<template>
    <div class="row justify-content-center">
        <div class="col-9 align-self-center prova">
            <h1>Modifica task</h1>
            <form class="form-floating" @submit.prevent="editTask">
                <div class="row" v-if="isError">
                    <div class="col-md-12 error">
                        {{ error }}
                    </div>
                </div>
                
                <div class="row form-floating">
                    <strong style="color: #0EA2BD;">Seleziona task:</strong>
                    <select class="col-md-9 form-floating input-group form-control" id="taskSelector" @change="switchSelect($event)" v-model="selectedTask" aria-placeholder="Seleziona una task">
                        <option disabled value="" selected>Seleziona una task</option>
                        <option v-for="task in tasks" :value="task">
                            {{ task.nome }}
                        </option>
                    </select>
                </div>
                <div v-if="originalTask.nome != '' ">

                
                <div class="row form-floating">
                    <div class="col-md-12 form-floating">
                        <input type="text" class="form-control" id="oldName" v-model="originalTask.nome">
                        <label for="oldName" class="myLabel"> &nbsp; &nbsp;Nome task da modificare</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" v-model="originalTask.data_inizio">
                        <label for="startDate" class="myLabel"> &nbsp; &nbsp;Data di inizio</label>
                    </div>
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" v-model="originalTask.data_fine">
                        <label for="endDate" class="myLabel"> &nbsp; &nbsp;Data di fine</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <!--<div class="col-md-6 form-floating">
                        <input type="text" class="form-control" id="Name" v-model="taskName">
                        <label for="Name" class="myLabel"> &nbsp; &nbsp;Nuovo nome</label>
                    </div>-->
                <div class="col-md-12 form-floating">
                        <input type="text" class="form-control" id="modulo" v-model="originalTask.modulo">
                        <label for="modulo" class="myLabel"> &nbsp; &nbsp;Modulo</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col form-floating input-group mb-9">
                        <span class="input-group-text myLabel" style="background-color: white;" >Descrizione</span>
                        <textarea type="date" class="form-control" id="description" aria-label="Descrizione" style="min-height: 100%" v-model="originalTask.descrizione"></textarea>
                    </div>
                    <div class="col-md-3 ">
                        <label for="checkbox" class="myLabel"> &nbsp; &nbsp;Completato? </label>
                        <input type="checkbox" id="checkbox" v-model="originalTask.completata" true-value="true" false-value="false" style="margin: 20px;" />
                    </div>
                </div>
                
                <div class="row ">
                    <div class="col-md-12">
                        <button class="btn btn-primary" type="submit">Modifica</button>
                    </div>
                    
                </div>
                </div>
                
            </form>

        </div>
    </div>
    
</template>

<script>
    const moment= require('moment');
    import { getTasks } from '../api/tasks/getTask' 
    import { editTask } from '../api/tasks/editTask'
    import {getCrew} from "../api/users/astronauts"

    export default{
        name: "FormAddTask",
        data(){
            return{
                isAmministratore: false,
                txtDescription: "",
                moduleName: "",
                taskName: "",
                checked: false,
                idUser: "",
                error: "",
                prova: "",
                isError : false,
                //oldTaskName: "",
                options:[],
                tasks:[],
                originalTask: {nome: ""},
                selectedTask: {nome: ""},
                selected : "",
                startDate: "",
                endDate: ""
            }
        },
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }else if(localStorage.getItem('role') === 'ROLE_AMMINISTRATORE'){
                this.isAmministratore = true;
            }
            this.selectTasks();
            this.selectIds();
            this.isError = false;
            this.error = "";
        },
        methods:{
            switchSelect:function(event){
                this.originalTask.nomeoriginale=this.selectedTask["nome"],
                this.originalTask.nome=this.selectedTask["nome"],
                this.originalTask.data_inizio=this.selectedTask["data_inizio"],
                this.originalTask.data_fine=this.selectedTask["data_fine"],
                this.originalTask.modulo=this.selectedTask["modulo"],
                this.originalTask.descrizione=this.selectedTask["descrizione"],
                this.originalTask.completata=this.selectedTask["completata"]
            },
            
            selectTasks(){
                getTasks().then(({data}) =>{
                    for(let i=0; i<data.length; i++){
                        var taskid=data[i]._id;
                        var tasknome=data[i].nome;
                        var taskdatainizio=data[i].data_inizio;
                        var datainiziofomatted= moment(taskdatainizio).format("YYYY-MM-DD");
                        var taskdatafine= data[i].data_fine;
                        var datafineformatted= moment(taskdatafine).format("YYYY-MM-DD");
                        var taskmodulo= data[i].modulo;
                        var taskcompletata= data[i].completata;
                        var taskdescrizione= data[i].descrizione;
                        this.tasks.push({id: taskid, nome: tasknome, data_inizio: datainiziofomatted,
                                        data_fine: datafineformatted, modulo: taskmodulo, completata: taskcompletata,
                                        descrizione: taskdescrizione});
                    }
                })
            },

            selectIds(){
                getCrew().then(({data}) => {
                    for(let i = 0; i < data.length; i++){
                        if(data[i].role == "ROLE_AMMINISTRATORE"){
                            if(this.isAmministratore){
                                var myId = data[i]._id;
                                var UserName = data[i].nome;
                                var UserSurname = data[i].cognome;
                                this.options.push({id: myId, nome: UserName, cognome: UserSurname});
                            }
                        }else{
                            var myId = data[i]._id;
                            var UserName = data[i].nome;
                            var UserSurname = data[i].cognome;
                            this.options.push({id: myId, nome: UserName, cognome: UserSurname});
                        }
                    }
                })
            },
            editTask(){
                if(this.validateForm()){                   

                    const task = {
                        nomeoriginale: this.originalTask.nomeoriginale,
                        nome: this.originalTask.nome,
                        descrizione: this.originalTask.descrizione,
                        data_inizio: this.originalTask.data_inizio,
                        data_fine: this.originalTask.data_fine,
                        modulo: this.originalTask.modulo,
                        completata: this.originalTask.completata,
                    };

                    editTask(task).then((response) => {
                        if(response.status === 200){
                            alert("Task modificata con successo")
                            this.$router.push("/tasks");
                        }else{
                            this.error = response.status + ": " + response.statusText;
                            this.isError = true;
                        }
                    }).catch((error) => {
                        //this.error = "Errore nella modifica della task";
                        this.error = error.response.status + ": " + error.response.statusText;
                        this.isError = true;
                    })
                }
            },
            validateForm(){
                // validate form
                if(this.originalTask.data_inizio === "" ){
                    this.error = "Inserisci una data di inizio";
                    this.isError = true;
                    return false;
                }
                if(this.originalTask.data_fine === "" ){
                    this.error = "Inserisci una data di fine";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.originalTask.nome)){
                    this.error = "Inserisci un nome per la task";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.originalTask.modulo)){
                    this.error = "Inserisci un nome per il modulo";
                    this.isError = true;
                    return false;
                }
                return true;
            }
        }
    }
</script>

<style scoped>
    .error{
        color: red;
        text-decoration: underline;
    }
    .myLabel{
        color: #0EA2BD !important;
        font-weight: 550;
    }
    .prova{
        margin-top: 60px;
        border: 1px solid rgba(0, 0, 0, 0.084);
        background: #fff;
        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
        border-radius: 10px;

    }
    .prova h1{
        margin-top: 20px;
        margin-bottom: 20px;
        color: #0EA2BD;
    }
    .prova form{
        padding: 20px;
    }
</style>