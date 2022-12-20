<template>

    <nav class="navbar">

      <div class="container">
        <router-link to="/">
        <img src="@/assets/img_logo_dtt@3x.png" alt=""></router-link>
      </div>

   
      <ul class="nav-wrapper flex">
        <li class="nav-link"> <b><router-link :class="`link ${homeActive}`" to="/houses">Houses</router-link> </b></li>
        <li> <b><router-link :class="`link ${activeClass}`" to="/about">About</router-link></b></li>
       
      </ul>
    </nav>

</template>

<script>
// @ is an alias to /src


export default {
  name:'NavbarItem',
  computed: {
    activeClass() {
      if(this.$route.path === '/about') {
        return 'active_link'
      }
      return '';
    },
    homeActive() {
      if(this.$route.path === '/houses') {
        return 'active_link'
      }
      return '';
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0; 
}
.link {
  color: #C3C3C3;
  padding-left: 50px;
  text-decoration: none;
}
.active_link {
  color: black;
}
nav{
  font-family: 'Montserrat', sans-serif;
}
.navbar {
 background-color: #FFFFFF;
 display: flex;
 padding-left: 15%;
 align-items: center;
 position: relative;
}


.flex{
  display: flex;
  gap:var(--gap, 1.5rem);
  
}
img{
  width: 120px;
  padding: 10px;
}
.nav-wrapper{
 
  list-style: none ;
  padding: 0;
  margin: 0;
}



@media screen and (max-width: 40em) 
{
  .navbar{
    display: none;
  }
}
</style>