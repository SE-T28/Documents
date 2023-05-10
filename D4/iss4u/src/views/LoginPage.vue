<template>
    <Login/>

    <Footer/>
</template>


<script>
    import Footer from '../components/MyFooter.vue'
    import Login from '../components/Login.vue'

    export default{
        
        components:{
            Footer, Login
        }
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

