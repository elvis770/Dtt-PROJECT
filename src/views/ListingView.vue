<template>
  <div class="listing">
     <navbar/>
        <div>
          <div>
            <img class="image" src="@/assets/img_placeholder_house@3x.png" alt="">
            <div >
              <ul class="icons">
                <li>
                  <router-link to="/houses">
                  <img class="arrow" src="@/assets/ic_back_white@3x.png" alt=""></router-link>
                </li>
                <li>
                  <div class="container">
                    <router-link to="/create">
                    <img class="tag--one" src="@/assets/ic_edit_white@3x.png" alt=""></router-link>
                    <img class="tag--two" src="@/assets/ic_delete_white@3x.png" alt="">
                  </div>
                </li>
              </ul>
               
            </div>
            
          </div>
            <div class="overview">
              <router-link to="/houses"> 
                        <img class="arrow" src="@/assets/ic_back_grey@3x.png" alt=""></router-link> <b class="text-two">BACK TO OVERVIEW</b> 
            </div>
             <div class="seg">
                <villan/>
                <div>
                  <h3> Recomended for you</h3>
                  <Menu/>
                  <Menu/>
                  <Menu/>
                </div>
            </div>
            
        </div>
     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Menu from'@/components/Menu.vue' 
import Villan from'@/components/Villan.vue' 

export default {
  name: 'ListingView',
  components: {
    Navbar,
    Villan,
    Menu,
    Footer
  }
}
</script>

<style scoped>
.listing{
  background-color: #F6F6F6;
  font-family: 'montserrat', sans-serif;
}
.image{
  display: none;
}
.icons{
  display: none;
}
.overview{
   margin: 30px 0px 30px 15%;
   display: flex;
   gap:var(--gap, 0.5rem);
}
.arrow{
  height: 14px;
}
.text-two{
  color: #000000;
  font-size: 14px;
}
.seg{
  display: flex;
  gap:var(--gap, 5rem);
}
h3{
  margin: 0px 0px 15px 0px;
  padding: 0;
  font-size: 16px;
}
@media screen and (max-width: 40em) 
{
  
  .image{
    position: relative;
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 300px;
  }
  .icons{
    display: flex;
    align-items: center;
    justify-content: space-between;

    list-style: none;
    position: absolute;
    top: 8px;
    
  }
  .overview{
  display: none;
  }
  .seg{
   padding-left: 6%;
   padding-right: 6%;
   display: block;
}
h3{
  margin-top: 300px;
}
.arrow{
  height: 20px;
}
.container{
  top: 8px;
  
}
.tag--one{
  height: 20px;
  padding-left: 230px;
}
.tag--two{
  height: 20px;
  padding-left: 20px;
}

}
</style>