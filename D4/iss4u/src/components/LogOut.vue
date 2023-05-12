
<script>
    export default{
        name: "LogOut",
        created(){
            if(!localStorage.getItem('role')){
                this.$router.push("/");
            }
            localStorage.removeItem('role');
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.setItem('reload', true);
            this.$router.push("/");
        }
    }
</script>
