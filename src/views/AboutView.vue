<template>
  <div class="about">
     <navbar/>

     <div class="footer-page">

       <div class="footer-page-one">
          <h2>
            About DTT Real Estate
          </h2>

        <div class="footer-page-two">
          <p class="paragraph-one">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
           esse cillum Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
           laborum.
          </p>

          <p class="paragraph-two">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>

        </div>

        <h2 class="paragraph-three">
          Design and Development
        </h2>
        <div class="logo-container">
          <img src="@/assets/img_logo_dtt@3x.png" alt="">
          
            <ul class="text-wrapper">
              <li>By DTT</li>
              <li> <router-link class="link" to="/https://www.d-tt.nl"> www.d-tt.nl</router-link></li>      
            </ul>
          
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
export default {
  name: 'AboutView',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
*{
  background-color: #F6F6F6;
}
.footer-page{
  font-family: 'montserrat', sans-serif;
   padding-left: 15%;
   padding-right: 15%;
}
.footer-page-one{
  margin-top: 25px;
  padding: 5px;
  color: #000000;
  font-size: 16px;
}

.footer-page-two{
  color: #4A4B4C;
  font-size: 16px;
}
.paragraph-one{
  padding-top: 15px;
}

.paragraph-two{
  padding-top: 15px;
}

.paragraph-three{
  padding-top: 25px;
}
.logo-container{
  display: flex;
}

img{
  width: 180px;
}
.text-wrapper{
  list-style: none;
  text-decoration: none;
}
.link{
 color:#067BC2;
 text-decoration: none;
}
@media screen and (max-width: 40em) 
{
  .footer-page{
   padding-left: 6%;
   padding-right: 6%;
}
}
</style>