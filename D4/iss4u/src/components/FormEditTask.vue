<template>
    <div class="row justify-content-center">
        <div class="col-9 align-self-center prova">
            <h1>Modifica task</h1>
            <form class="form-floating" @submit.prevent="editTask">
                <div class="row" v-if="isError">
                    <div class="col-md-12 error">
                        Errore {{ error }}
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-12 form-floating">
                        <input type="text" class="form-control" id="oldName" v-model="oldTaskName">
                        <label for="oldName" class="myLabel"> &nbsp; &nbsp;Nome task da modificare</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" id="startDate">
                        <label for="startDate" class="myLabel"> &nbsp; &nbsp;Data di inizio</label>
                    </div>
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" id="endDate">
                        <label for="endDate" class="myLabel"> &nbsp; &nbsp;Data di fine</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="text" class="form-control" id="Name" v-model="taskName">
                        <label for="Name" class="myLabel"> &nbsp; &nbsp;Nuovo nome</label>
                    </div>
                    <div class="col-md-6 form-floating">
                        <input type="text" class="form-control" id="modulo" v-model="moduleName">
                        <label for="modulo" class="myLabel"> &nbsp; &nbsp;Modulo</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col form-floating input-group mb-9">
                        <span class="input-group-text myLabel" style="background-color: white;" >Descrizione</span>
                        <textarea type="date" class="form-control" id="description" aria-label="Descrizione" style="min-height: 100%" v-model="txtDescription"></textarea>
                    </div>
                    <div class="col-md-3 ">
                        <label for="checkbox" class="myLabel"> &nbsp; &nbsp;Completato? </label>
                        <input type="checkbox" id="checkbox" v-model="checked" style="margin: 20px;" />
                    </div>
                </div>
                <div class="row form-floating" v-if="isAmministratore">
                    <div class="col-md-9 form-floating input-group">
                        <!--<input type="text" class="form-control" id="userID" v-model="idUser">
                        <label for="userID" class="myLabel"> &nbsp; &nbsp;ID utente</label>-->
                        <select v-model="idUser" class="form-control" style="color: #0EA2BD">
                            <option disabled value="">Seleziona un utente</option>
                            <option v-for="option in options" :value="option.id">
                                {{ option.nome }} {{option.cognome}}: {{option.id}}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- input field of start date, end date, name, module, description, isCompleted, userId-->
                <div class="row ">
                    <div class="col-md-12">
                        <button class="btn btn-primary" type="submit">Modifica</button>
                    </div>
                    
                </div>
            </form>

        </div>
    </div>
    
</template>

<script>
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
                isError : false,
                oldTaskName : "",
                options: [],
                selected : ""

            }
        },
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }else if(localStorage.getItem('role') === 'ROLE_AMMINISTRATORE'){
                this.isAmministratore = true;
            }
            this.selectIds();
            this.isError = false;
            this.error = "";
        },
        methods:{
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
                        nome: this.taskName,
                        descrizione: this.txtDescription,
                        dataInizio: this.startDate,
                        dataFine: this.endDate,
                        modulo: this.moduleName,
                        completato: this.checked,
                        idUtente: this.idUser
                    };
                    editTask(this.oldTaskName, task).then((response) => {
                        if(response.status === 200){
                            alert("Task modificata con successo")
                            this.$router.push("/tasks");
                        }else{
                            this.error = response.status + ": " + response.statusText;
                            this.isError = true;
                        }
                    }).catch((error) => {
                        this.error = "Errore nella modifica della task";
                        this.isError = true;
                    })
                }
            },
            validateForm(){
                // validate form
                if(this.startDate === "" ){
                    this.error = "Inserisci una data di inizio";
                    this.isError = true;
                    return false;
                }
                if(this.endDate === "" ){
                    this.error = "Inserisci una data di fine";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.taskName)){
                    this.error = "Inserisci un nome per la task";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.moduleName)){
                    this.error = "Inserisci un nome per il modulo";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.txtDescription)){
                    this.error = "Inserisci una descrizione";
                    this.isError = true;
                    return false;
                }
                if(this.isAmministratore && /^ *$/.test(this.idUser)){
                    this.error = "Inserisci un id utente";
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