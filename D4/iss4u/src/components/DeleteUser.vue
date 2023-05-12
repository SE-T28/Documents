<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="col align-self-center prova">
            <h1 class="myH1 title">ELIMINA UTENTE</h1>
            <form class="form-floating">
                <div class="row" v-if="isError">
                    <div class="col-md-12 error">
                        {{ error }}
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="text" class="form-control" id="Name" v-model="userName">
                        <label for="Name" class="myLabel"> &nbsp; &nbsp;Nome</label>
                        <div class="invalid-feedback">
                            Scrivi un nome giusto.
                        </div>
                    </div>
                    <div class="col-md-6 form-floating">
                        <input type="text" class="form-control" id="Surname" v-model="userSurname">
                        <label for="Surname" class="myLabel"> &nbsp; &nbsp;Cognome</label>
                        <div class="invalid-feedback">
                            Scrivi un cognome giusto.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <label for="checkbox" class="myLabel" >Sei sicuro di voler eliminare questo utente? </label>
                    <input type="checkbox" id="checkbox" v-model="checked" style="margin: 20px;" />
                </div>
                
                <!-- input field of start date, end date, name, module, description, isCompleted, userId-->
                <div class="row ">
                    <div class="col-md-12">
                        <button class="btn btn-primary" type="submit" @click="addTask()">Elimina</button>
                    </div>
                    
                </div>
            </form>

        </div>
        </div>
    </div>
    <Footer/>
</template>

<script>
    import Footer from "./MyFooter.vue"
    export default{
        data(){
            return{
                checked: false,
                userName: "",
                userSurname: "",

            }
        },
        components:{
            Footer
        },
        created(){
            if(localStorage.getItem('role') != "ROLE_AMMINISTRATORE")
                this.$router.push("/")
        }
    }
</script>

<style scoped>
    .myH1{
        color: #FF488A;

        margin-bottom: 50px;
    }
    .error{
        color: red;
        text-decoration: underline;
    }
    .myLabel{
        color: #0EA2BD !important;
        font-weight: 550;
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
    .container div.prova{
        background-color: white;
        padding: 50px;
        border-radius: 20px;
    }
    
</style>