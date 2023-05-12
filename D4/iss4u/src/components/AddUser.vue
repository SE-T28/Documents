<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="col align-self-center prova">
            <h1 class="myH1 title">AGGIUNGI UTENTE</h1>
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
                <div class="row form-floating">
                    <div class="col-md-8 form-floating">
                        <label for="validationCustomUsername" class="form-label">E-mail</label>
                        <div class="input-group has-validation">
                        <span class="input-group-text myLabel" id="inputGroupPrepend">@
                            <br>E-mail<br>
                        </span>
                        <input type="email" class="form-control" v-model="mail" id="validationCustomUsername" aria-describedby="inputGroupPrepend"  required>
                        <div class="invalid-feedback">
                            scrivi una mail valida.
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4 form-floating">
                        <input type="text" class="form-control" id="modulo" v-model="telefono">
                        <label for="modulo" class="myLabel"> &nbsp; &nbsp;Telefono</label>
                        <div class="invalid-feedback">
                            scrivi una mail valida.
                        </div>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-4 form-floating ">
                        <input type="date" class="form-control" id="bornDate" v-model="date">
                        <label for="bornDate" class="myLabel"> &nbsp; &nbsp;Data di nascita </label>                   
                    </div>
                    <div class="col-md-4 form-floating ">
                        <input type="text" class="form-control" id="pw" v-model="password">
                        <label for="pw" class="myLabel"> &nbsp; &nbsp;Password</label>                   
                    </div>
                    <div class="col-md-4 ">
                        <label for="select" class="myLabel"> Ruolo:&nbsp; &nbsp;  </label>
                        <select v-model="selected" style="margin: 10px; padding: 5px; border: 1px;">
                            <option v-for="option in options" :value="option.value">
                                {{ option.text }}
                            </option> 
                        </select>
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
    </div>
    <Footer/>
</template>

<script>
    import Footer from "./MyFooter.vue"
    export default{
        data(){
            return{
                tasks:[],
                telefono: "+39",
                selected: "tecnico_interno",
                options:[
                    {text: "tecnico interno", value: "tecnico_interno"},
                    {text: "amministratore", value:"amministratore"}
                ],
                mail: "",
                userName: "",
                userSurname: "",
                password: "",
                date: ""
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