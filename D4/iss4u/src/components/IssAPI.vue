<template>
    <div class="data">
        <p>
            <span class="importantText">Ground point</span>
            <br>Latitude:  <span v-if="isError"> unavaible... </span>
                           <span v-else> {{issData.latitude}} </span>
            <br>Longitude: <span v-if="isError"> unavaible... </span>
                           <span v-else> {{issData.longitude}} </span>
            
        </p>

        <p><span class="importantText">Orbital speed</span>
           <br> <span v-if="isError"> unavaible... </span>
                <span v-else> {{issData.velocity}} km/h </span> 
        </p>
        
        <p><span class="importantText">Altitude</span>
            <br><span v-if="isError"> unavaible... </span>
                <span v-else> {{issData.altitude}} km </span> 
        </p>

    </div>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return {
            issData: [],
            isError: false,
        }
    },
    created(){
        //get teh latitude and longitude of the ISS
        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response => {
            this.issData = response.data;

        }).catch(error => {
            this.isError = true;
        });
        // get the orbital speed of the ISS
        
    }
}

</script>

<style scoped>

    .data{
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-82%, -48%);
        width: 60%;
        top: 139px;
    }

    .importantText{
        color: #FF488A;
    }
    p{
        color: #fff;
        text-align: left;
        font-weight: 550;
        padding-top: 10px;
    }
</style>