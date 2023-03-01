<template>
    <div class="body">
        <img src = "../assets/IssEarth.png" alt = "ISS" class="earth"/>
        <!-- create a map tag where on different areas of IssModel.png display some text-->
    </div>
</template>

<style>
    img.earth{
        width: 100%;
        height: 100%;
    }
    img.iss{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 90%;
    }
    .body{
        margin-top: -169px;
    }
</style>