<template>
    <div class="hero">
        
        <div class="container">
         <div class="page">
             <div>
                 <ul class="page-wrapper">
                     <li class="text"> <b> Houses</b> </li>
                     <li> <router-link to="/new"> <button type="button" class="button"> 
                        <img class="img--one" src="@/assets/ic_plus_white@3x.png" alt="">  <img class="img--two" src="@/assets/ic_plus_grey@3x.png" alt=""><b class="text-two">CREATE NEW </b> </button></router-link> </li>
                       
                 </ul>
             </div>
         </div>
     </div>


    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'HeroItem'
}
</script>

<style scoped>
.houses{
   font-family: 'montserrat', sans-serif;

}
.page{
    margin: 0px 20px 2px 0px;
    padding-left: 15%;
    padding-right: 15%;
}

.page-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    padding: 5px;
    height: 100px;
 
}
.page-wrapper .text{
    font-size: 22px;
    font-family: 'montserrat', sans-serif;
}
.img--one{
    height: 12.5px;
    padding-right: 5px;
}
.img--two{
    display: none;
}
.text-two{
    font-size: 12px;
    font-family: 'montserrat', sans-serif;
}
.button{
    background-color: #EB5440;
    color: #FFFFFF;
    width: 150px;
    font-size: 15px;
    padding: 10px;
    border: none;
    border-radius: 10px;
}
@media screen and (max-width: 40em) 
{
    .page{
        margin: 0;
        padding: 0;
    }
    .page-wrapper .text{
        padding-left: 40%;
    }
 .text-two{
     display: none;
 }
 .button{
    background-color: #F6F6F6;
     
 }
 .img--one{
    display: none;
 }
 .img--two{
    display:inline-flex;
    height: 20px;
    padding-right: 6%;
    padding-left: 6%;
 }
}
</style>