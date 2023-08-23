<template>
    <div class="triangle"></div>
    <div class="taskBody">
        <div class="container">
            <div class="col align-self-center prova">
            <h1 class="myH1 title">AGGIUNGI UTENTE</h1>
            <form class="form-floating" @submit.prevent="addUser">
                <div class="row fs-3" v-if="isError">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16" style="color:red">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
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
                        <input type="email" class="form-control" v-model="mail" id="validationCustomUsername" aria-describedby="inputGroupPrepend" >
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
                        <label class="myLabel" > Ruolo:&nbsp; &nbsp;  </label>
                        <select v-model="selected" style="margin: 10px; padding: 5px; border: 1px;">
                            <option v-for="option in options" :value="option.value" :id="option.value">
                                {{ option.text }}
                            </option> 
                        </select>
                    </div>
                </div>
                <div class="row form-floating">
                    <div class="col-md-4 form-floating">
                        <input type="text" class="form-control" id="bio" v-model="bio">
                        <label for="bio" class="myLabel"> &nbsp; &nbsp;Bio</label>
                    </div>
                    <div class="col-md-4 form-floating">
                        <input type="text" class="form-control" id="occupation" v-model="occupazione">
                        <label for="occupation" class="myLabel"> &nbsp; &nbsp;Occupazione</label>
                    </div>
                    <div class="col-md-4 form-floating">
                        <input type="text" class="form-control" id="missioni" v-model="missioni">
                        <label for="missioni" class="myLabel"> &nbsp; &nbsp;Missioni</label>
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
    </div>
    <Footer/>
</template>

<script>
    import Footer from "./MyFooter.vue"
    import {register} from "../api/users/register"
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
                date: "",
                isError: false,
                error: "",
                bio:"",
                occupazione: "",
                missioni:"",
            }
        },
        components:{
            Footer
        },
        created(){
            if(localStorage.getItem('role') != "ROLE_AMMINISTRATORE")
                this.$router.push("/")

            this.isError = false;
        },
        methods:{
            validateForm(){
                //alert(this.date) 23-05-2021
                if(/^ *$/.test(this.userName)){
                    this.error = "Inserisci un nome";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.userSurname)){
                    this.error = "Inserisci un cognome";
                    this.isError = true;
                    return false;
                }
                if(/^ *$/.test(this.password)){
                    this.error = "Inserisci una password";
                    this.isError = true;
                    return false;
                }
                return true;
            },
            addUser(){
                this.isError = false;
                this.error = "";
                if(this.validateForm()){
                    const user = {
                        nome: this.userName,
                        cognome: this.userSurname,
                        email: this.mail,
                        password: this.password,
                        role: this.selected,
                        data_nascita: this.date,
                        numero_telefono: this.telefono,
                        bio: this.bio,
                        occupazione: this.occupazione,
                        missioni: this.missioni
                    }
                    register(user).then(response => {
                        if(response.status != 201){
                            this.error = response.data.message;
                            this.isError = true;
                        }else{
                            alert("Utente aggiunto con successo");
                            this.$router.push("/astronautsPage");
                        }
                    })
                }
                
            }
        }}
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