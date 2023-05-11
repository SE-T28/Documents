<template>
    <div class="triangle"></div>
    <div class="container-fluid">
        <div class="bro-cont"><p class="col-md 2 text-justify title">AGENZIE</p></div>
        <div class="row" style="margin-bottom: 0px">
            <div class="col pt1" onclick="window.open('https://www.dtu.dk/english') ">
                <img src="../assets/agencies/dtuLogo.jpg"  style="height: 100%; padding: 5px;">
            </div>
            <div class="col pt1">
                <img src="../assets/agencies/cnesLogo.jpg" onclick="window.open('https://cnes.fr/en')" style="height: 100%; padding: 10px;">
            </div>
            <div class="col pt1">
                <img src="../assets/agencies/dlrLogo.jpg" onclick="window.open('https://www.dlr.de/en/')" style="height: 100%; ">
            </div>
            <div class="col pt1">
                <img src="../assets/agencies/asi.jpg" onclick="window.open('https://www.asi.it/')" style="height: 100%; ">
            </div>
            <div class="col pt1">
                <img src="../assets/agencies/norskLogo.jpg" onclick="window.open('https://www.romsenter.no/')" style="height: 100%; padding: 10px;">
            </div>
            <div class="col pt1">
                <img src="../assets/agencies/rymLogo.jpg" onclick="window.open('https://www.rymdstyrelsen.se/')" style=" width: 100%;">
            </div>
        </div>
        <div class="row">
            <div class="col pt2">
                <img src="../assets/agencies/nasaLogo.jpg" onclick="window.open('https://www.nasa.gov/')" style="height: 100%; ">
            </div>
            <div class="col pt2">
                <img src="../assets/agencies/pockocmoc.jpg" onclick="window.open('https://roscosmos.ru/')" style="height: 100%;">
            </div>
            <div class="col pt2">
                <img src="../assets/agencies/csaascLogo.jpg" onclick="window.open('https://www.asc-csa.gc.ca/eng/')" style="width:100%;">
            </div>
            <div class="col pt2">
                <img src="../assets/agencies/jaxaLogo.jpg" onclick="window.open('https://global.jaxa.jp/')" style=" width: 100%; ">
            </div>
            <div class="col pt2">
                <img src="../assets/agencies/esaLogo.jpg" onclick="window.open('https://www.esa.int/')" style=" width: 100%;">
            </div>
        </div>
        <div class="row" style="margin-top: 30px;">
            <div class="col">
                <img src="../assets/agencies/map.png">
            </div>
        </div>
    </div>
    <Footer/>
    

</template>


<script>
    import Footer from '../components/MyFooter.vue';
    export default{
        components:{
            Footer
        }
    }  
    
    
</script>

<style scoped>
    .pt1{
        border: 1px solid rgba(210, 210, 210, 0.836);
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
    }
    .pt2{
        border: 1px solid rgba(210, 210, 210, 0.836);
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    .pt1 img, .pt2 img{
        cursor: pointer;
    }
    .pt2 img{
        height: -webkit-fill-available;
    }
    .triangle{
        width: 100%;
        height: 52px;
        background-color: #231F20;
        position: absolute;
        margin-top: -50px;
        z-index: -10;
    }
</style>