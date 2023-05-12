<template>
    <div class="row justify-content-center">
        <div class="col-9 align-self-center prova">
            <h1>Aggiungi task</h1>
            <form class="form-floating">
                <div class="row form-floating">
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" id="startDate">
                        <label for="startDate" class="myLabel"> &nbsp; &nbsp;Data di inizio</label>
                    </div>
                    <div class="col-md-6 form-floating">
                        <input type="date" class="form-control" id="endDate">
                        <label for="endDate" class="myLabel"> &nbsp; &nbsp;Data di fine</label>
                    </div>

                </div>
                <!-- input field of start date, end date, name, module, description, isCompleted, userId-->
                
            </form>

        </div>
    </div>
    
</template>

<script>

    export default{
        name: "FormAddTask",
        data(){
            return{
                isAmministratore: false,
            }
        },
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }else if(localStorage.getItem('role') === 'ROLE_AMMINISTRATORE'){
                this.isAmministratore = true;
            }
        }
    }
</script>

<style scoped>
    .myLabel{
        color: #0EA2BD;
        font-weight: 550;
    }
    .prova{
        margin-top: 60px;
        height: 50vh;
        border: 1px solid rgba(0, 0, 0, 0.084);
        background: #fff;
        box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
        border-radius: 10px;

    }
    .prova h1{
        margin-top: 20px;
        margin-bottom: 20px;
        color: #0EA2BD;
    }
    .prova form{
        padding: 20px;
    }
</style>