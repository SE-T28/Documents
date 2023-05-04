<template>
    <div class="triangle"></div>
    <div class="container-fluid">
        <div class="bro-cont"><p class="col-md 2 text-justify title">AGENZIE</p></div>
        <div class="row" style="margin-bottom: 0px">
            <div class="col pt1">
                <img src="../assets/agencies/dtuLogo.jpg" style="height: 100%">
            </div>
            <div class="col pt1">
                <!--CNES-->
            </div>
            <div class="col pt1">2</div>
            <div class="col pt1">4</div>
            <div class="col pt1">5</div>
            <div class="col pt1">5</div>
        </div>
        <div class="row">
            <div class="col pt2">1</div>
            <div class="col pt2">2</div>
            <div class="col pt2">3</div>
            <div class="col pt2">4</div>
            <div class="col pt2">5</div>
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
    }
    .pt2{
        border: 1px solid rgba(210, 210, 210, 0.836);
        height: 200px;
    }

    .triangle{
        width: 100%;
        height: 48px;
        background-color: #231F20;
        position: absolute;
        margin-top: -50px;
        z-index: -10;
    }
</style>