<template>
        <div class="create">
            <navbar/>
            <img class="back-img" 
            src="@/assets/img_background@3x.png" alt="">
        <div class="container">

                <div class="segment">
                    <div class="wrapper">
                        <router-link to="/listing"> 
                            <img class="arrow" src="@/assets/ic_back_grey@3x.png" alt=""></router-link> 
                            <b class="text-two">Back to detail Page</b> 
                    </div>
                    <h3>Edit Listing</h3>
                    
                </div>
                
                <div class="segOne">
                        <h4 class="text">
                            Street name*
                        </h4>
                        <input type="text" 
                        class="bar"   
                        placeholder="    Stokvisstraat">
                </div>
                <div class="seg--two">
                        <div>
                            <h4 class="text">
                                House number*
                            </h4>
                            <input type="text" 
                            class="bar--two"   
                            placeholder=" 132">
                        </div>
                        
                        <div>
                            <h4 class="text">
                                Additional (optional)
                            </h4>
                            <input type="text" 
                            class="bar--two"   
                            placeholder="  e.g A">
                        </div>
                </div>

                <div class="seg--three">
                        <h4 class="text">
                            Postal Code*
                        </h4>
                        <input type="text" 
                        class="bar"   
                        placeholder="    1110 AA">
                </div>

                <div class="seg--three">
                        <h4 class="text">
                            City*
                        </h4>
                        <input type="text" 
                        class="bar"   
                        placeholder="    Amsterdam">
                </div>

                <div class="seg--four">
                        <h4 class="text">
                            Upload picture (PNG or JPG)
                        </h4>
                        <div class="image">
                            <img class="upload-img"
                            src="@/assets/img_placeholder_house@3x.png" alt="">
                        </div>
                </div>

                <div class="seg--three">
                        <h4 class="text">
                            Price*
                        </h4>
                        <input type="text" 
                        class="bar"   
                        placeholder="    e.g €500.000">
                </div>

                <div class="seg--two">
                        <div>
                            <h4 class="text">
                                Size*
                            </h4>
                            <input type="text" 
                            class="bar--two"   
                            placeholder=" 120m2">
                    </div>
                        
                    <div>
                            <h4 class="text">
                                Garage*
                            </h4>
                            <input type="text" 
                            class="bar--two"   
                            placeholder="  YES">
                    </div>
                </div>

                <div class="seg--two">
                        <div>
                            <h4 class="text">
                                Bedrooms*
                            </h4>
                            <input type="text" 
                            class="bar--two"   
                            placeholder="  3">
                        </div>
                        
                        <div>
                            <h4 class="text">
                                Bathrooms*
                            </h4>
                            <input type="text" 
                            class="bar--two"   
                            placeholder="  2">
                        </div>
                </div>

                <div class="seg--three">
                        <h4 class="text">
                            Construction*
                        </h4>
                        <input type="text" 
                        class="bar"   
                        placeholder="    10-08-2005">
                </div>

                <div class="seg--three">
                        <h4 class="text">
                            Description*
                        </h4>
                        <input type="text" 
                        class="bar--three"   
                        placeholder="   Enter Description">
                </div>
                        
                <div class="final--seg">
                        <button type="button" class="button"> 
                   <b class="final-text"> Post </b> </button>
                </div>
                 <Footer/>
        </div>
       
    </div>

 
    

</template>
<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'NewView',
  components: {
    Navbar,

    Footer

  }
}
</script>
<style scoped>
.create{
    max-width: 100%;
    font-family: 'montserrat', sans-serif;
    
}
.back-img{
    position: relative;
    width: 100%;
    height: auto;
}
.container{
    position: absolute;
    top: 80px;
    left: 15%;

    display: block;
}
.wrapper{
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 30px;
}
.arrow{
    max-height: 16px;
}
.text-two{
    padding-left: 10px;
    
    font-weight: 450;
    font-size: 16px;
}
h3{
    font-size: 22px;
    padding-bottom: 10px;
}
.text{
    font-size: 14px;
    font-weight: 520;
}
.bar{
    background-color: #FFFFFF;
    display: block;
    border: none;
    min-width: 300px;
    min-height: 35px;
    padding: 0px;

    border-radius: 5px;
    
}
.seg--two{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.bar--two{
    background-color: #FFFFFF;
    display: block;
    border: none;
    min-width: 145px;
    min-height: 35px;
    padding: 0px;

    border-radius: 5px;   
}
.bar--three{
    background-color: #FFFFFF;
    display: block;
    border: none;
    min-width: 300px;
    min-height: 100px;
    padding: 0px;

    border-radius: 5px; 
}
.button{
    background-color: #EB5440;
    color: #FFFFFF;
    min-width: 250px;
    min-height: 35px;
    font-size: 15px;
    border: none;
    border-radius: 10px;
}

.final--seg{
    padding: 10px;
}

.upload-img{
    height: 90px;
    width: 90px;
    object-fit: cover; 
    object-position: 0 100%;
    padding: 0px;
    border-radius: 5px;

    position: relative;
}
@media screen and (max-width: 40em) 
{
    
    .back-img{
        position: relative;
        top: 55rem;
        height: 100%;
        max-width: 100%;


    }
  .container{
      top: 10px;
      left: 5px;
      right: 5px;
background-color: #F6F6F6;
        
     
  }
  .segment{
      display: flex;
        align-items: center;
        gap:var(--gap, 5.5rem);
        padding-bottom: 5px;
  }
  .arrow{
      margin-right: 2%;
  }
  .text-two{
      display: none;
  }
  h3{
      font-size: 16px;
  }
  .segOne{
      padding-left: 10px;
      
  }
  .text{
      padding-top: 0px;
      padding-left: 5px;
  }
  .bar{
      padding-left: 5px;
  }
   .bar--two{
      padding-left: 5px;
  }
  .seg--two{
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-left: 10px;
      padding-right: 10px;
  }
  .seg--three{
      padding-left: 10px;
      padding-right: 10px;
  }
 .seg--four{
     padding-left: 10px;
      padding-right: 10px;

 }
 .final--text{
     color: #FFFFFF;
 }
}
</style>