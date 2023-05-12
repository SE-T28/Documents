<template>
    <div class="row justify-content-center">
        <div class="col-9 align-self-center prova">
            <h1>Aggiungi task</h1>
            <form class="form-floating">
                <div class="row" v-if="isError">
                    <div class="col-md-12 error">
                        {{ error }}
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
                        <textarea type="date" class="form-control" id="description" aria-label="Descrizione" v-model="txtDescription"></textarea>
                    </div>
                    <div class="col-md-3 ">
                        <label for="checkbox" class="myLabel"> &nbsp; &nbsp;Completato? </label>
                        <input type="checkbox" id="checkbox" v-model="checked" style="margin: 20px;" />
                    </div>
                </div>
                <div class="row form-floating" v-if="isAmministratore">
                    <div class="col-md-9 form-floating input-group">
                        <input type="text" class="form-control" id="userID" v-model="idUser">
                        <label for="userID" class="myLabel"> &nbsp; &nbsp;ID utente</label>
                    </div>
                </div>
                <!-- input field of start date, end date, name, module, description, isCompleted, userId-->
                <div class="row ">
                    <div class="col-md-12">
                        <button class="btn btn-primary" type="submit" @click="addTask()">Aggiungi</button>
                    </div>
                    
                </div>
            </form>

        </div>
    </div>
    
</template>

<script>

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
                isError : false

            }
        },
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }else if(localStorage.getItem('role') === 'ROLE_AMMINISTRATORE'){
                this.isAmministratore = true;
            }
        },
        methods:{
            addTask(){
                // Btn 
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