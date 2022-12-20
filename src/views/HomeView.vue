<template>
  <div class="home">
     <navbar/>
      <h1>
        This is the Homepage
        
      </h1>
     <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  background-color: #F6F6F6;
}
</style>
