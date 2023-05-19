<template>
    <div class="row justify-content-center">
        <div class="col-9 align-self-center prova">
            <h1>Elimina task</h1>
            <form class="form-floating">
                <div class="row" v-if="isError">
                    <div class="col-md-12 error">
                        {{ error }}
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-12 form-floating">
                        <input type="text" class="form-control" id="Name" v-model="taskName">
                        <label for="Name" class="myLabel"> &nbsp; &nbsp;Nome task</label>
                    </div>
                    <div class="col-md-6 ">
                        <label for="checkbox" class="myLabel" >Sei sicuro di voler eliminare questa task? </label>
                        <input type="checkbox" id="checkbox" v-model="checked" style="margin: 20px;" required />
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-12">
                        <button class="btn btn-primary" type="submit" @click="deleteTask()">Elimina</button>
                    </div>
                    
                    
                </div>
            </form>

        </div>
    </div>
    
</template>

<script>
    import { deleteTask } from '../api/tasks/deleteTask'
    export default{
        data(){
            return{
                checked: false,
                error: "",
                taskName: "",
                isError: false,
                isAmministratore: false
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
            deleteTask(){
                if(this.checkForm()){
                    deleteTask(this.taskName).then((response) => {
                        if(response.status === 200){
                            alert("Task eliminata con successo")
                            this.$router.push("/tasks");
                        }else{
                            //status + message
                            this.error = response.status + ": " + response.data.message;
                            this.isError = true;
                        }
                    }).catch((error) => {
                        this.error = error.response.data.message;
                        this.isError = true;
                    })
                }
            },
            checkForm(){
                if(!this.checked){
                    this.error = "Devi spuntare la casella per eliminare la task";
                    this.isError = true;
                    return false;  
                }
                if(/^ *$/.test(this.taskName)){
                    this.error = "Devi inserire il nome della task";
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
        color: #0EA2BD;
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