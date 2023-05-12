<template>
    <div class="triangle"></div>
    <div class="imgStart">
        <AstronautsSlider/>
    </div>
    <div>
        <AstronautsBody/>
    </div>
    <Footer/>
</template>

<script>
    import AstronautsSlider from "../components/AstronautsSlider.vue"
    import AstronautsBody from "../components/AstronautsBody.vue";
    import Footer from "../components/MyFooter.vue";
    export default{
        name: "AstronautsPage", 
        components:{
            AstronautsSlider,AstronautsBody, Footer,
        }
    }
</script>

<style>
    .imgStart{
        margin-top: 3px;
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