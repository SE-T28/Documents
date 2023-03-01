<template>
    <div class="login">
        <!--<LoginComponent />-->
        <img src="../assets/earth.png" style="width:100%; height:100%; margin-top:-169px">
        <div class="card">
            <h4 class="titleLogin">Log In! </h4>
            <form @submit.prevent="login">
                <div class="field">
                <input autocomplete="off" v-model="username" id="logemail" placeholder="User" class="input-field" name="logemail" type="text">
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
    <Footer/>
    
    
</template>


<script>
    import Footer from '../components/MyFooter.vue'
    export default{
        data(){
            return{
                username: "",
                password: "",
            };
        },
        name: "Login",
        components:{
            Footer
        }, 
        methods:{
            login(){
                const user = { name: "Jhon" , email:"john.doe@example.com" };

                this.$router.push({ name: "User", params: {user} })
            },
        },
    }

</script>

<style scoped>

    /* Sistemare il form in modo che si trovi centrato all'immagine  */
    .card {
        width: 500px;
        padding: 1.9rem 1.2rem;
        text-align: center;
        background: rgb(230, 230, 230);
        
        margin: 0 auto;
        opacity: 1;
        position: absolute;
        margin-top: -40%;
        margin-left: 50%;
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

