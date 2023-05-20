<template>
    <img src="../assets/earth.png" style="width:100%; height: 100% + 50px; position:absolute; translate: -50%; margin-top: -146px; z-index: -100; ">
    
    <div class="backgroundImg">
        
        <div class="body-components">
            <p class="text-md-center pp">NEWS</p>
            <div class="container">
                <div class="card dim" style="background-color: #31292B; border-radius: 10 0 10 0; ">

                    <!-- Classificazione di ogni news, da aggiungere una classe per ogni news istanziata dal DB -->
                    <!-- Aggiunta di un overlay-y al div dopo l'immagine -->
                    <section class="sec"  v-if="news.length != 0" v-for="info in news" :key="info.id" @mouseclick="$router.push(info.link)"> 
                        <div class="row gx-5">
                        <div class="col-md-3 mb-3">
                            <div class="bg-image hover-overlay ripple newsImg" data-mdb-ripple-color="light">
                            <img :src="info.image" class="img-fluid" style="border-radius: 10px !important;"/>
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                            </div>
                        </div>

                        <div class="col-md-6 mb-4 " style="text-align: left; margin-top: 15px;">
                            <h4 style="color: white;"><strong>{{ info.title }}</strong></h4>
                            <p class="text-muted">
                            {{ info.description }}
                            </p>
                        </div>
                        </div>
                    </section> 
                    <section v-else style="color:white;text-decoration: underline">
                        <p> Nessuna news al momento</p>
                    </section>

                </div>
            </div>
        </div>
    </div>
    <Footer/>   
</template>

<script>

import Footer from '../components/MyFooter.vue'
import img1 from '../assets/IssModel.png'
import { getNews } from '../api/Info/getNews'

export default{
    data(){
        return {
            news:[
                /*new Info("Titolo1", "Descrizione1", img1),
                new Info("Titolo2", "Descrizione2", img1),*/
            ]
        }
    },
    components:{
        Footer
    },
    methods:{
        imageExists(url){
            return new Promise(resolve => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = url;
            })
        }
        ,fetchNews(){
            getNews().then((response) => 
            {
                if(response.status === 200){
                    for(let i = 0; i < response.data.length; i++){
                        let img = response.data[i].copertina
                        this.imageExists(img).then(ok => {
                            if(!ok){
                                img = img1;
                            }
                            this.news.push(new Info(response.data[i].titolo, response.data[i].descrizione, img, response.data[i].link))
                        });
                    }
                }else{
                    alert("Errore nel caricamento delle news")
                }
            });
        }
    },
    created(){
        this.fetchNews();
    }


}
var id = 0
class Info{
    
    constructor(title, description, image, link = null){
        this.title = title
        this.description = description
        this.image = image
        if(link == null){
            link = "/newsPage"
        }
        this.link = link

        //Identificazione univoca della News
        id++;
        this.id = id;
    }

}


</script>

<style scoped> 
    .dim{
        height: 80vh;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .dim::-webkit-scrollbar{
        width: 0;
    }
    .newsImg{
        margin-left: 10px;
        margin-top: 10px;

    }

    .pp{
        font-size: xxx-large;
        color: #FF488A;

        font-family: 'Poppins', 'Arial', sans-serif;
    }
    .body-components{
        margin-top: 50px;
    }  

    .sec{
        margin-top: 10px;
        margin-left: 5px;
        border-bottom: 1px solid #515151;
    }
    .backgroundImg{
        margin-bottom: 120px;
    }
</style>