<template>

    <div class="house-wrap">
        <div class="cards">  
            <router-link to="/listing"> <div> 
                <img class="picture--seg" :src="houseData.image" alt=""></div>
            </router-link>

            <div>
                <ul class="text--seg">
                    <li class="seg--one">
                            <b class="place">{{ houseData.location.street }}</b>
                            <div class="icons">
                                <router-link to="/create">
                                <img class="tag--one" src="@/assets/ic_edit@3x.png" alt=""></router-link>
                                <img class="tag--two" src="@/assets/ic_deletex@3x.png" alt="">
                            </div>
                    </li>
                    <li  class="price">
                        € {{ houseData.price }}
                    </li>
                    <li class="text--two">
                        {{ houseData.location.zip }} {{ houseData.location.city }}
                    </li>
                </ul>
                <ul class="second--text">
                    <li class="bed">
                        <img class="tag" src="@/assets/ic_bed@3x.png" alt=""> {{ houseData.rooms.bedrooms }}
                    </li>
                    <li class="bath"> 
                        <img class="tag" src="@/assets/ic_bath@3x.png" alt=""> {{ houseData.rooms.bathrooms }} 
                    </li>
                    <li class="size"> 
                        <img class="tag" src="@/assets/ic_size@3x.png" alt=""> {{ houseData.size }} m2 
                    </li>


                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'HouseItem',
  props: {
    houseData: {
        type: Object
    },
  },
}
</script>

<style scoped>
.cards{
    background-color: #ffffff;
    display: flex;
    font-family: 'montserrat', sans-serif;
    margin: 0px 15% 10px 15%;
   
    

    border-radius: 5px;
    min-height: 120px;
    
}
.picture--seg{
    min-height: 95px;
    max-width: 90px;
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
.text--seg .seg--one{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40.5rem;
   
}
.place{
    font-size: 18px;
    color:#000000;
    margin: 5px;
}

.icons .tag--one{

  height: 16px;
  color: #C3C3C3;
  padding-right: 15px;
}
.icons .tag--two{
  height: 16px;
  color: #C3C3C3;
  padding-right: 15px;
}
.tag{
    height: 14px;
}
.price{
    display: flex;
    gap:var(--gap, 0.3rem);
    align-items: center;
    color: #4A4B4C;
    font-size: 14px;
    font-weight: 600px;
    padding: 3px;
}
.text--two{
    color: #C3C3C3;
    font-size: 14px;
    padding: 3px;
}
.second--text{
    color: #C3C3C3;
    display: flex;
    padding: 0;
    list-style: none;
    gap:var(--gap, 0.5rem);
    font-size: 14px;
    margin: 0px 15px 15px 15px;
}
@media screen and (max-width: 40em) 
{
   .cards{
    margin-left: 5%;
    margin-right: 5% ;
    margin-bottom: 10px;
    height: 110px;
    max-width: auto;
    }

    .text--seg .seg--one{
        display: flex;
        align-items: center;
        gap:var(--gap, 3rem);
        
    }
    .place{
    font-size: 12px;
    padding: 3px;
    }
    .icons .tag--one{
    height: 14px;
    padding-right: 5px;
    }
    .icons .tag--two{
    height: 14px;
    padding-right: 5px;
    }
    .tag{
    height: 12px;
    }
    .price{
    font-size: 12px;
    font-weight: 530;
    padding:3px;
    }
    .text--two{
    font-size: 12px;
    padding: 3px;
    }
    .second--text{
    padding: 3px;
    font-size: 12px;
    }
}    
</style>