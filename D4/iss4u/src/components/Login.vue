<template>
    <div class="triangle"></div>
    <div class="login">
        <div class="container">
        <div class="card">
            <h4 class="titleLogin">Log In! </h4>
            <div v-if="error" style="color: red; text-decoration: underline;" > {{ error_message }} </div>
            <form @submit.prevent="login" >
                <div class="field">
                    <input autocomplete="off" v-model="name" id="name" placeholder="Nome" class="input-field" name="logemail" type="text">
                </div>
                <div class="field">
                    <input autocomplete="off" v-model="surname" id="surname" placeholder="Cognome" class="input-field" name="logemail" type="text">
                </div>
                <div class="field">
                    <svg class="input-icon" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path></svg>
                    <input autocomplete="off" v-model="password" id="logpass" placeholder="Password" class="input-field" name="logpass" type="password">
                </div>
                <button class="btn" type="submit">Login</button>
            </form>
        </div>
    </div>

        
    </div>
</template>

<script>
import User from './../../../app/models/utente.js'
import {login} from '../api/users/login.js'

    export default{
        data(){
            return{
                user: new User(''),
                name: "",
                surname:"",
                password: "",
                loading: false,
                message: '',
                error: false,
                error_message: "",
            }
        },
        name: "Login",
        created(){
            
            // Questo è solo per il testing del token
            /*localStorage.setItem('token', 'aoaoaoaoaoa');
            localStorage.setItem('user', 'nome1');
            localStorage.setItem('role', 'ROLE_AMMINISTRATORE');
            // Aggiunta di un item reload al fine che quando si ripassa alla pagina home ricarica la pagina iniziale e funziona tutto per bene
            localStorage.setItem('reload', true);*/

            //localStorage.setItem('role', 'ROLE_TECNICO_INTERNO');
            if(localStorage.getItem('role')){
                this.$router.push('/');
            }
        },
        methods:{
            async login(){
                this.error = false;
                try{
                    if(this.name == "")
                        throw "Nome non inserito";
                    else if(this.surname == "")
                        throw "Cognome non inserito";
                    else if(this.password == "")
                        throw "Password non inserita";
                    else{
                        const user = {
                            nome: this.name,
                            cognome: this.surname,
                            password: this.password
                        }
                        login(user).then(response=>{
                            localStorage.setItem('token', response.data.accessToken);
                            if(response.data.token == false)
                                throw "Credenziali errate";
                            
                            localStorage.setItem('user', response.data.nome);
                            localStorage.setItem('role', response.data.role);
                            localStorage.setItem('reload', true);

                            this.$router.push('/');
                                
                        }).catch(error=>{
                            this.error_message = error.response.data.message;
                            this.error = true;
                        });
                        //alert(localStorage.getItem(response.data.role));
                        
                    }
                }catch(error){
                    this.error_message = error
                    this.error = true;
                }
                
            },
        },
    }
    
</script>

<style scoped>

    .login{
        background-image: url('../assets/earth.png'); 
        background-repeat: no-repeat; 
        background-size: cover; 
        height: 80vh; 
        padding-top: 100px;
    }

    .card {
        width: 500px;
        padding: 1.9rem 1.2rem;
        text-align: center;
        background: rgb(230, 230, 230);
        margin: 0 auto;
        opacity: 1;
        
    }

/*Inputs*/
.field {
 margin-top: .5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: .5em;
 background-color: #1f2029;
 border-radius: 4px;
 padding: .5em 1em;
}

.input-icon {
 height: 1em;
 width: 1em;
 fill: #0ebdba;
}

.input-field {
    opacity: 1 !important;  
 background: none;
 border: none;
 outline: none;
 width: 100%;
 color: #d3d3d3;
}

/*Text*/
.titleLogin {
 margin-bottom: 1rem;
 font-size: 1.5em;
 font-weight: 500;
 color: #0EA2BD;
}

/*Buttons*/
.btn {
 margin: 1rem;
 border: none;
 border-radius: 4px;
 font-weight: bold;
 font-size: .8em;
 text-transform: uppercase;
 padding: 0.6em 1.2em;
 background-color: #0EA2BD;
 color: white;
 box-shadow: 0 8px 24px 0 rgb(255 235 167 / 20%);
 transition: all .3s ease-in-out;
}

.btn-link {
 color: #f5f5f5;
 display: block;
 font-size: .75em;
 transition: color .3s ease-out;
}

/*Hover & focus*/
.field input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}

.btn:hover {
 background-color: #5e6681;
 color: #ffeba7;
 box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
}

.btn-link:hover {
 color: #FF488A;
}
</style>