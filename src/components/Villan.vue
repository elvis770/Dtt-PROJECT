<template>
    <div class="villan">
        <img class="image" src="@/assets/img_placeholder_house@3x.png" alt="">
        <ul class="part--one">
          <li class="text"> <b>
            Stokvisstraat 132</b>
            <div class="icons">
              <router-link to="/create">
              <img class="tag--one" src="@/assets/ic_edit@3x.png" alt=""></router-link>
              
              <img class="tag--two" src="@/assets/ic_deletex@3x.png" alt="">
            </div>
            
          </li>
          <li class="ams">
            <img class="tag" src="@/assets/ic_location@3x.png" alt=""> 1011 AA Amsterdam
          </li>
            <div class="list--one">
                <li>
                  <img class="tag" src="@/assets/ic_price@3x.png" alt=""> 500.000
                </li>
                <li>
                  <img class="tag" src="@/assets/ic_size@3x.png" alt=""> 120 m2
                </li>
                <li>
                  <img class="tag" src="@/assets/ic_construction_date@3x.png" alt=""> Built in 1990
                </li>
            </div>
            <div class="list--two">
            <li>
                  <img class="tag" src="@/assets/ic_bed@3x.png" alt=""> 1
                </li>
                <li>
                  <img class="tag" src="@/assets/ic_bath@3x.png" alt=""> 1
                </li>
                <li>
                  <img class="tag" src="@/assets/ic_garage@3x.png" alt=""> Yes
                </li>
           </div>
          <div>
            <p class="long--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
           esse cillum Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
           laborum.
            </p>
          </div>
        </ul>
        
    </div>
</template>

<script>



export default {
  name:'VilanItem',
  props: {
    houseData: {
        type: Object
    },
  },

}
</script>

<style scoped>
.villan{
  background-color: #ffffff;
  box-sizing: border-box;
  font-family: 'montserrat', sans-serif;

  width: 600px;
  margin-left: 15%;
}
.villan .image{
  height: 380px;
  width: 600px;
}
.villan .part--one{
  list-style: none;
}
.villan .text{
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  color: #000000;
   font-family: 'montserrat', sans-serif;
}
.villan .icons{
  padding-right: 15px;
}
.villan .tag--one{
  height: 12px;
  color: #C3C3C3;
  padding-right: 15px;
}
.villan .tag--two{
  height: 12px;
  color: #C3C3C3;
}
.villan .tag{
  height: 12px;
  color: #C3C3C3;
}
.villan .ams{
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0px 5px 0px;
}
.villan .list--one{
  color: #4A4B4C;
  display: flex;
  gap:var(--gap, 1.5rem);
  list-style: none;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0px 5px 0px;
}
.villan .list--two{
  color: #4A4B4C;
  display: flex;
  gap:var(--gap, 1.5rem);
  list-style: none;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0px 5px 0px;
}
.villan .long--text{
  color: #4A4B4C;
  font-size: 14px;
  font-weight: 400;
  padding-bottom: 20px;
}
@media screen and (max-width: 40em) 
{
  .villan{
    position: absolute;
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    margin-bottom: 50px;
    width: 100%;
    top: 280px;
    left: 0;
    right: 0;
    border-radius: 50px 50px 0px 0px;
  }
  .villan .image{
    display: none;
  }
  .villan .icons{
    display: none;
  }

  .text{
    padding-top: 30px;
    font-size: 10px;
  }
  .long--text{
    padding-right: 50px;
  }
}
</style>