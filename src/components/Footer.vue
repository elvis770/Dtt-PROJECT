<template>
    <div class="footer">
       <ul class="icons">
         <li class="homeButton">
           <div>
             <router-link to="/houses">
              <img class="active" 
              :src="homeIcon" alt=""></router-link>
              
                
            </div>
         </li>
         <li class="nav-icon">
           <div>
             <router-link to="/about">
              <img class="active"
              :src="aboutIcon" alt="">
            </router-link>
           </div>
           
         </li>
       </ul>
    </div>
</template>

<script> 
// @ is an alias to /src
export default {
  name:'FooterItem',
  computed: {
    homeIcon() {
      if(this.$route.path === '/about') {
        return require('../assets/ic_mobile_navigarion_home@3x.png');
      }
      return require('../assets/ic_mobile_navigarion_home_active@3x.png');
    },
    aboutIcon() {
      if(this.$route.path === '/about') {
        return require('../assets/ic_mobile_navigarion_info_active@3x.png');
      }
      return require('../assets/ic_mobile_navigarion_info@3x.png');
    },
  }
}


</script>

<style scoped>

.footer{
  display: none;
}

@media screen and (max-width: 40em) 
{
 
  .footer{
  display: block;
  box-sizing: border-box;
  margin-top: 0;
  width: 100%;
  height: 90px;
  background-color: #FFFFFF;

position: relative;

  
  
}
.footer .icons{
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding-top: 30px;
}

img{
  height: 30px;
}

}

</style>