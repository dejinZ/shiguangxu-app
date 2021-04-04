<template>
    <div class="ma">
        <div class="nav">
            <div class="nav-item">
                <router-link to="/Application">
                    <div v-on:click="iconClick('Application')"><span class="nav-text icon" :class="[applicationClassName]">应用</span></div>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link to="/Plan">
                    <div v-on:click="iconClick('Plan')"><span class="nav-text icon" :class="[planClassName]">规划</span></div>
                </router-link>
            </div>
            <div class="nav-item">
                <router-link to="/User">
                    <div v-on:click="iconClick('User')"><span class="nav-text icon" :class="[userClassName]">我的</span></div>
                </router-link>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data(){
            return {
                applicationClassName: "application-icon-checked",
                planClassName: "plan-icon-unchecked",
                userClassName: "user-icon-unchecked",
            }
        },
        methods:{
            iconClick(params){
                if(params == "Application"){
                    this.applicationClassName = "application-icon-checked"
                    this.planClassName = "plan-icon-unchecked"
                    this.userClassName = "user-icon-unchecked"
                }else if(params == "Plan"){
                    this.applicationClassName = "application-icon-unchecked"
                    this.planClassName = "plan-icon-checked"
                    this.userClassName = "user-icon-unchecked"
                }else if(params == "User"){
                    this.applicationClassName = "application-icon-unchecked"
                    this.planClassName = "plan-icon-unchecked"
                    this.userClassName = "user-icon-checked"
                }
            },
        }
    }

</script>
<style lang="less" scoped>    
    .ma{
        width: 100%;
        height: 100%;
        background: url(../images/main-bg.jpg);
        background-size: 100%;
        position:fixed;
        top: 0;
        left: 0;
        .nav{
            width: 100%;
            position: fixed;
            bottom: 0;
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            .nav-item{
                width: 100%;
                height: 60px;
                line-height: 90px;
                position: relative;
                .nav-text{
                    display: inline-block;
                    text-align: center;
                    font-size: 14px;
                    color: #000;
                }
                .icon{
                    content: "";
                    display: inline-block;
                    width: 50%;
                    height: 35px;
                }
                .application-icon-checked{
                    background: url(../images/application-icon-checked.png) no-repeat; 
                    background-size: 45%;
                    background-position: 52% 0;
                }
                .application-icon-unchecked{
                    background: url(../images/application-icon-unchecked.png) no-repeat; 
                    background-size: 45%;
                    background-position: 52% 0;
                }
                .plan-icon-checked{
                    background: url(../images/plan-icon-checked.png) no-repeat; 
                    background-size: 45%;
                    background-position: 52% 0;
                }
                .plan-icon-unchecked{
                    background: url(../images/plan-icon-unchecked.png) no-repeat; 
                    background-size: 45%;
                    background-position: 52% 0;
                }
                .user-icon-checked{
                    background: url(../images/user-icon-checked.png) no-repeat; 
                    background-size: 45%;
                    background-position: 52% 0;
                }
                .user-icon-unchecked{
                    background: url(../images/user-icon-unchecked.png) no-repeat; 
                    background-size: 45%;
                    background-position: 52% 0;
                }
            }
            
           
        }
    }
  
</style>