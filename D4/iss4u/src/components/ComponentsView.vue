<template>
    <div class="body_components">
        
        <div class = container>
            <div class="row">
                    
                    <div class="col-md-4">
                        <div class="input-group">
                            <input class="form-control py-2 " style="border-right: 0px !important;" type="search" id="example-search-input" v-model="searchQuery" placeholder="Cerca componente... (nome o descrizione)">
                            
                            <div class="input-group-text bg-transparent" style="border-left: 0px !important;" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="28" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg></div>
                        </div>
                    </div>
                </div>   
            <div class="bro-cont"><p class="col-md 2 text-justify title">COMPONENTI</p></div>
                         
                
            
            <div class="row" style="margin-top: 50px;">
                <div class="col-md-6 col-lg-6" v-for="container in containers" :key="container.nome" @mouseover="showDescription(container)" @mouseleave="hideDescription(container)" @click="selectContainer(container)" :class="{ 'selected': selectedContainer === container }">
                    <div class="card mb-4">
                        <img class="card-img-top" :src="container.image" alt="Card image cap" style="max-height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title">{{ container.name }}</h5>
                            <div class="card-description" :class="{active: container.showDescription}">
                                <p class="card-text" :class="{ 'd-none': !container.showDescription }">{{ container.description }}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
    </div>
    <!--name, description, nation, application, operator, contractor, power, mass, launchDate, image, otherDatails-->
    <div class="selected-container" v-if="selectedContainer">

    <div class="row">
        <div class="col-12 col-md-5 image-container" style=" padding-left: 0px !important;">
        <img :src="selectedContainer.image" alt="Selected Container Image" style="max-width: 390px;">
        </div>
        <div class="col-12 col-md-7 text-container">
            <div class="title-container">
                <h2 class="selected-title"><span class=important-text>{{ selectedContainer.name }}</span></h2>
                
                <button type="button" class="btn close-button" @click="deselectContainer(container)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>
              </button>
            </div>
            <div class="description-container">
                <p><span class="important-text">Descrizione: </span>{{ selectedContainer.description }}</p>
                <p><span class="important-text">Nazione: </span>{{ selectedContainer.nation }}</p>
                <p><span class="important-text">Tipo / Applicazione: </span>{{ selectedContainer.application }}</p>
                <p><span class="important-text">Operatore: </span>{{ selectedContainer.operator }}</p>
                <p><span class="important-text">Contratti: </span>{{ selectedContainer.contractor }}</p>
                <p><span class="important-text">Energia: </span>{{ selectedContainer.power }}</p>
                <p><span class="important-text">Massa: </span>{{ selectedContainer.mass }}</p>
                <p><span class="important-text">launch date: </span>{{ selectedContainer.launchDate }}</p>
                <p v-if="selectedContainer.otherDatails"><span class="important-text">Altri dettagli: </span>{{ selectedContainer.otherDatails }}</p>
            </div>
            </div>
        </div>
    </div>

    
    
</template>

<script>
    import { getComponents } from "../api/components/components";
    var id = 1;
    
    export default{
        data(){
            return{
                searchQuery: null,
                selectedContainer: null,
                containers: [
                    /*new Container("NAME1", "descrizione1 però che palle esce male sta roba", "nation1", "application1", "operator1", "contractor1", "power1", "mass1", "launchDate1", "https://via.placeholder.com/325x167", "other..."),
                    new Container("name2", "description2", "nation2", "application2", "operator2", "contractor2", "power2", "mass2", "launchDate2", "https://via.placeholder.com/325x167")
                    ,new Container("prova1", "description2", "nation2", "application2", "operator2", "contractor2", "power2", "mass2", "launchDate2", "https://via.placeholder.com/325x167")
                    ,new Container("swag", "description2", "nation2", "application2", "operator2", "contractor2", "power2", "mass2", "launchDate2", "https://via.placeholder.com/325x167")
                    */
                ]
            }
        },
        created(){
            this.fetchComponents();
        },
        methods: {
            imageExists(url){
                console.log(url);
                return new Promise(resolve=>{
                    var img = new Image();
                    img.onload = ()=> resolve(true);
                    img.onerror = ()=> resolve(false);
                    img.src = url;
                });
            },
            fetchComponents(){
                getComponents().then(({data}) => {
                    
                    for(let i = 0; i < data.length; i++){
                        // Src the image on the web and if it doesn't exist, use a placeholder
                        var image = data[i].image;
                        /*this.imageExists(image).then(ok => {
                            if(!ok){
                                image = "https://via.placeholder.com/325x167";
                            }
                            this.containers.push(new Container(data[i].nome, data[i].descrizione, data[i].nazione, data[i].application, data[i].operator, data[i].contractors, data[i].power, data[i].mass, data[i].launch_date, image, data[i].other_details));

                        });*/
                        this.containers.push(new Container(data[i].nome, data[i].descrizione, data[i].nazione, data[i].application, data[i].operator, data[i].contractors, data[i].power, data[i].mass, data[i].launch_date, data[i].image, data[i].other_details));
                    }
                }).catch((error) => {
                    /*this.immagine = "https://okokok.jpg";
                    this.imageExists(this.immagine).then(ok => {
                            console.log(ok);    
                            if(!ok){
                                this.immagine = "https://via.placeholder.com/325x167";
                            }
                            this.containers.push(new Container("Nessun componente al momento", "Nessuna descrizione", "Nessuna nazione", "Nessuna applicazione", "Nessun operatore", "Nessun contractor", "Nessuna energia", "Nessuna massa", "Nessuna data di lancio", this.immagine));
                        });*/
                    
                    console.log(error);
                })
            },
            showDescription(container) {
                container.showDescription = true;
            },
            hideDescription(container) {
                container.showDescription = false;
            },
            selectContainer(container){
                this.selectedContainer = container;
            },
            deselectContainer(container){
                this.selectedContainer = null;
            }
        },
        computed:{
            containers(){
                if(this.searchQuery){
                    return this.containers.filter(item => {
                        return this.searchQuery.toLowerCase().split(" ").every(v => item.name.toLowerCase().includes(v) || item.description.toLowerCase().includes(v))
                    });
                }else{
                    return this.containers;
                }
            }
        } 
    }
    class Container{
        // 
        constructor(name, description, nation, application, operator, contractor, power, mass, launchDate,image, otherDatails = null, ){
            this.name = name;
            this.description = description;
            this.nation = nation;
            this.application = application;
            this.operator = operator;
            this.contractor = contractor;
            this.power = power;
            this.mass = mass;
            this.launchDate = launchDate;

            this.image = image;

            this.otherDatails = otherDatails;
            // Id per identificare il container all'hover / leave
            this.id = id;
            id = id+1;
            // showDescription al fine di visualizzare la descrizione all'hover
            this.showDescription = false;
        }
    }
</script>

<style>
    .important-text{
        color: #0EA2BD;
        font-weight: 550;
    }
    .description-container p{
        color: black;
        text-align: left;
    }
    .selected-container {       
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .selected-container .row{
        background-color: white;
        border-radius: 10px;
    }

    .image-container img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 10px 0px 0px 10px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        height: 100%;
        max-width: 80vh;
    }

    .title-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 20px;
        margin-top: 10px !important;
    }

    .selected-title {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        width: 70%;
    }

    .close-button {
        background-color: transparent;
        border: none;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
    }

    .description-container {
        width: 100%;
        font-size: 16px;
        line-height: 1.5;
        color: white;
        
    }


    .title{
        font-size: xxx-large;
        color: #0EA2BD;

        font-family: 'Poppins', 'Arial', sans-serif;
    }
    .card {
        margin: 10px;
        background-color: #fff;
        border-radius: 10px !important;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        transition: transform 0.5s ease-out ;
        width: 100%;
    }
    .row {
        margin-bottom: 20px;
    }
    .card-title{
        font-family: 'Poppins', 'Arial', sans-serif;
        font-size: xx-large;
        color: #0EA2BD;
    }

    .card-img-top {
    height: 75%;
    background-size: cover;
    background-position: center center;
        border-radius: 10px;
    }

    .card-body {
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: absolute;
    bottom: 0;
    border-radius: 0px 0px 10px 10px;
    width: 100%;
    background-color: white;
    transition: transform 0.5s ease-out ;
    transition: height 0.3s ease-out;
    }

    .card:hover .card-img-top {
        height: 50% ;
    }

    .card:hover .card-body, .card-text{
        transform: translateY();
        height: 55%;
    }

    .card-text {
        margin-top: 5px;
        font-size: medium;
        text-align: left;
    }

    .d-none {
    display: none;
    }
    .card-description{
        background-color: white;
        height: 200px;
        width: 100%;
        
    }
    .card:hover{
        cursor: pointer;
    }
    .bro-cont {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  position: relative;
}

.title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 12%;
  border-bottom: 2px solid black;
  margin-bottom: 7px;
}


</style>