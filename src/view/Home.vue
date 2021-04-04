<template>
    <div class="ma">
         <div>
            <router-link to="/Application"><span>应用</span></router-link>
        </div>
        <div>
            <router-link to="/Plan">规划</router-link>
        </div>
        <div>
            <router-link to="/User">我的</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    

</script>
<style scoped>
    .ma{
        width: 100%;
        height: 100%;
        background: url(../images/main-bg.jpg);
        background-size: 100%;
        position:fixed;
        top: 0;
        left: 0;
    }
</style>