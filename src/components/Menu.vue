<template>

    <div class="menu">  
      <router-link to="/listing">  <div> 
             <img class="picture--seg" src="@/assets/img_placeholder_house@3x.png" alt="">
        </div></router-link>

        <div>
            <ul class="text--seg">
                <li class="text--one">
                   <b> Stokavisstraat 132</b>
                </li>
                <li  class="price">
                    <img class="tag" src="@/assets/ic_price@3x.png" alt=""> 500.000
                </li>
                <li class="text--two">
                     1011 AA Amsterdam
                </li>
            </ul>
            <ul class="second--text">
                <li class="bed">
                    <img class="tag" src="@/assets/ic_bed@3x.png" alt=""> 1
                </li>
                <li class="bath"> 
                    <img class="tag" src="@/assets/ic_bath@3x.png" alt=""> 1 
                </li>
                <li class="size"> 
                    <img class="tag" src="@/assets/ic_size@3x.png" alt=""> 120 m2 
                </li>


            </ul>
        </div>


        
    </div>
    
</template>

<script>
// @ is an alias to /src

export default {
  name:'MenuItem',
  props: {
    houseData: {
        type: Object
    },
  },
}
</script>

<style scoped>
.menu{
    background-color: #ffffff;
    display: flex;
    font-family: 'montserrat', sans-serif;
    margin-bottom: 10px;
   

    border-radius: 5px;
   min-height: 100px;
    width: 300px;
    margin-right: 5px;
}
.picture--seg{
    height: 80px;
    width: 60px;
    object-fit: cover; 
    object-position: 0 100%;
    margin: 10px 0px 5px 10px;
    border-radius: 5px;
}
.text--seg{
    list-style: none;
    text-decoration: none;
    margin: 5px;
    padding: 5px 5px 0px 5px;
}
.text--seg .text--one{
    text-decoration: none;
    font-size: 12px;
    color:#000000;
     margin: 5px 5px 5px 5px;
}
.tag{
    height: 12px;
}
.price{
    display: flex;
    gap:var(--gap, 0.3rem);
    align-items: center;
    color: #4A4B4C;
    font-size: 12px;
    padding: 3px;
}
.text--two{
    color: #C3C3C3;
    font-size: 10px;
    padding: 3px;
}
.second--text{
    color: #C3C3C3;
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    gap:var(--gap, 0.5rem);
    font-size: 10px;
    margin: 0px 15px 15px 15px;
}
@media screen and (max-width: 40em) 
{
 .menu{
     width: auto;
 }
 .picture--seg{
     width: 80px;
 }
}
</style>