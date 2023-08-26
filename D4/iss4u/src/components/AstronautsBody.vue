<template>
    <div class="body_components">
        <div class="container">
            <div class="row" style="margin-top: 20px">
                    
                    <div class="col-md-4">
                        <div class="input-group">
                            <input class="form-control py-2 " style="border-right: 0px !important;" type="search" id="example-search-input" v-model="searchQuery" placeholder="Cerca componente... (nome o descrizione)">
                            
                            <div class="input-group-text bg-transparent" style="border-left: 0px !important;" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></div>
                        </div>
                    </div>
                </div>  
            <div class="bro-cont"><p class="col-md 2 text-justify title">ASTRONAUTI</p></div>

            <div class="row" style="margin-top: 40px;">
                <div class="col-md-6 col-lg-6" v-for="astronaut in astronauts" :key="astronaut ">
                    <div class="card mb-4">
                        <div class="row" style="margin-bottom: 0;">
                            <div class="col">
                                <img :src=" astronaut.image " style="height: 100%; width: 100%;" class="leftImage" alt="...">
                            </div>
                            <div class="col-6">
                                <!--name, surname, date, occupation, missions, bio = null, image-->
                                <p class="text-center fs-2" style="font-weight: 550; margin-top: 10px;  color: #0EA2BD"> {{ astronaut.name }} {{ astronaut.surname }} </p>
                                <p class="text-start"><span class="fw-bolder" style="color: #0EA2BD">Nascita: </span>{{ astronaut.date }}</p>
                                <p class="text-start"><span class="fw-bolder" style="color: #0EA2BD">Occupazione: </span>{{ astronaut.occupation }}</p>
                                <p class="text-start"><span class="fw-bolder" style="color: #0EA2BD">Missioni: </span>{{ astronaut.missions }}</p>
                                <p class="text-start"><span class="fw-bolder" style="color: #0EA2BD">Biografia: </span>{{ astronaut.bio }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>


        </div>
    </div>
</template>

<script>
    import { getCrew } from "../api/users/astronauts";
    var id = 1;

    export default{
        data(){
            return{
                searchQuery : null,
                astronauts:[
                /*new Astronaut("Nome1", "Cognome1", "Data1", "Occupazione1", "Missione1", "Bio1", "https://via.placeholder.com/167x200"),
                    */
                ]
            }
        },
        name: "AstronautsBody",
        created(){
            this.getAstronauts();
        },  
        methods:{
            imageExists(url){
                return new Promise(resolve => {
                    const image = new Image();
                    image.onload = () => resolve(true);
                    image.onerror = () => resolve(false);
                    image.src = url;
                });
            },
            getAstronauts(){
                getCrew().then(({data}) => {
                    for(let i = 0; i < data.length; i++){
                        if(data[i].role != "ROLE_AMMINISTRATORE" || data[i].role != "AMMINISTRATORE"){
                        let image = data[i].image;
                        /*this.imageExists(image).then(ok => {
                            if(!ok){
                                image = "https://via.placeholder.com/167x200";
                            }
                            //name, surname, date,mail, occupation, missions, image
                            this.astronauts.push(new Astronaut(
                                data[i].nome, 
                                data[i].cognome, 
                                data[i].data_nascita, 
                                data[i].email, 
                                data[i].occupazione, 
                                data[i].missioni,
                                image,
                                data[i].bio
                            ));
                        });*/
                        this.astronauts.push(new Astronaut(
                                data[i].nome, 
                                data[i].cognome, 
                                data[i].data_nascita, 
                                data[i].email, 
                                data[i].occupazione, 
                                data[i].missioni,
                                data[i].immagine,
                                data[i].bio
                            ));
                        }
                    }
                    
                }).catch(error =>{
                    console.log(error);
                })
            }
        },
        computed:{
            astronauts(){
                if(this.searchQuery){
                    return this.astronauts.filter(item => {
                        return this.searchQuery.toLowerCase().split(" ").every(v => item.name.toLowerCase().includes(v) || item.surname.toLowerCase().includes(v))
                    });
                }else{
                    return this.astronauts;
                }
            }
        }


    }
    class Astronaut{
        constructor(name, surname, date,mail, occupation, missions, image = "https://via.placeholder.com/167x200", bio = null,){
            this.id = id++;
            this.name = name;
            this.surname = surname;
            this.date = date;
            this.mail = mail;
            this.occupation = occupation;
            this.missions = missions;
            this.bio = bio;
            //this.image = require("../assets/astronauts/" + this.id + ".jpg");
            this.image = image;
        }
    }
</script>

<style>
    .leftImage{
        width: 50%;
        display: inline-block;
    }
    .card{
        /** inline divs in it */
        display: inline-block;

    }
    .textBody{
        display: inline-block;
    }
</style>