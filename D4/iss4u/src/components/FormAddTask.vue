<template>
    <div class="row justify-content-center">
        <div class="col-9 align-self-center prova">
            <h1>Aggiungi task</h1>
            <form class="form-floating" @submit.prevent="addTask">
                <div class="row" v-if="isError">
                    <div class="col-md-12 error">
                        {{ error }}
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" v-model="startDate">
                        <label for="startDate" class="myLabel"> &nbsp; &nbsp;Data di inizio</label>
                    </div>
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" v-model="endDate">
                        <label for="endDate" class="myLabel"> &nbsp; &nbsp;Data di fine</label>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="text" class="form-control" id="Name" v-model="taskName">
                        <label for="Name" class="myLabel"> &nbsp; &nbsp;Nome task</label>
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

                        <!--
                        <input type="text" class="form-control" id="userID" v-model="idUser">
                        <label for="userID" class="myLabel"> &nbsp; &nbsp;ID utente</label>-->
                        <select v-model="idUser" class="form-control" style="color: #0EA2BD">
                            <option disabled value="">Seleziona un utente</option>
                            <option v-for="option in options" :value="option.id">
                                {{ option.nome }} {{option.cognome}}: {{ option.id }} 
                            </option>
                        </select>
                    </div>
                </div>
                <!-- input field of start date, end date, name, module, description, isCompleted, userId-->
                <div class="row ">
                    <div class="col-md-12">
                        <button class="btn btn-primary" type="submit">Aggiungi</button>
                    </div>
                    
                </div>
            </form>

        </div>
    </div>
    
</template>

<script>
    import {addTask} from "../api/tasks/addTask"
    import {getCrew} from "../api/users/astronauts"
    export default{
        name: "FormAddTask",
        data(){
            return{
                isAmministratore: false,
                txtDescription: "",
                moduleName: "",
                startDate : "",
                endDate: "",
                taskName: "",
                checked: false,
                idUser: "",
                error: "",
                isError : false,
                selected: "",
                options: [],
                val: 1
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
                // Seleziona solo per gli amministratori
                //console.log("Entrato nella get degli IDs");
                getCrew().then(({data}) => {
                    console.log("La richiesta è arrivata:");
                    console.log(data);
                    for(let i = 0; i < data.length; i++){
                        if(data[i].role == "ROLE_AMMINISTRATORE" ){
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
            addTask(){
                console.log(this.startDate);
                console.log(this.endDate);

                if(this.validateForm){
                    console.log("Data:");
                    console.log(this.data);
                    var prova = false;
                    var index;
                    for (index = 0; index < this.options.length && !prova; index++) {
                        const element = this.options[index];
                        if(element.id == this.idUser){
                            prova = true;
                        }
                    }
                    index--;
                    console.log("Options:");
                    console.log(this.options);
                    console.log("Options["+index+"]: "+this.options[index]);
                    console.log(this.options[index].nome); // Funziona
                    console.log(this.options[index].cognome); // Funziona
                    
                    const task = {
                        data_inizio: this.startDate,
                        data_fine: this.endDate,
                        nome: this.taskName,
                        modulo: this.moduleName,
                        descrizione: this.txtDescription,
                        userId: this.idUser,
                        completata: this.checked,
                        nomeuser: this.options[index].nome, 
                        cognomeuser: this.options[index].cognome
                    };
                    /*const task = {
                        "data_inizio": "2022-04-05T00:00:00.000+00:00",
                        "data_fine":"2022-04-06T00:00:00.000+00:00",
                        "modoulo": "Modulo 1",
                        "nome": "Task 3",
                        "completata": false,
                        "nomeuser": "matteo",
                        "cognomeuser": "parma"
                    };*/
                    
                    /*addTask(task).then(response =>{
                        if(response.status == 201){
                            alert("Task aggiunta con successo");
                            this.$router.push("/tasks");
                        }else{
                            this.isError = true;
                            this.error = response.status+": "+response.data.message;
                        }
                    });*/
                    // add task and catch error
                    addTask(task).then(response =>{
                        if(response.status == 201){
                            alert("Task aggiunta con successo");
                            this.$router.push("/tasks");
                        }else{
                            this.isError = true;
                            this.error = response.status+": "+response.data.message;
                        }
                    }).catch(error => {
                        this.isError = true;
                        this.error = error.response.status+": "+error.response.data.message;
                    });
            }},
            validateForm(){
                // validate form
                if(this.startDate == "" ){
                    this.error = "Inserisci una data di inizio";
                    this.isError = true;
                    return false;
                }
                if(this.endDate == "" ){
                    this.error = "Inserisci una data di fine";
                    this.isError = true;
                    return false;
                }
                if(this.taskName == ""){
                    this.error = "Inserisci un nome per la task";
                    this.isError = true;
                    return false;
                }
                if(this.moduleName == ""){
                    this.error = "Inserisci un nome per il modulo";
                    this.isError = true;
                    return false;
                }
                if(this.txtDescription == ""){
                    this.error = "Inserisci una descrizione";
                    this.isError = true;
                    return false;
                }
                if(this.isAmministratore && this.idUser == ""){
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