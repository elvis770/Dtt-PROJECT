<template>
    <div class="second">
        

              <div>
                  <div>
                      <ul class="second--page">
                          <li >
                              <div class="search--box">
                                  <button><img class="picture" src="@/assets/ic_search@3x.png" alt="" width="30px">  </button>
                                    <input 
                                    type="text" 
                                    class="search--bar"   
                                    src="@/assets/ic_search@3x.png"
                                    placeholder="Search for a house"
                                    v-model="query"
                                    @click="fetchHouse"
                                    >
                                   
                              </div>
                              
                          </li>
                          <li>
                            <div class="second-page-wrapper">                           
                                <p class="tag-one"> <b class="text--tag">Price</b></p>
                                <p class="tag-two"> <b class="text--tag"> Size </b></p>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>

    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name:'SecondItem',
  data (){
    return{
      api_key: '8_MCTZsW2JNpzlY-VayUFidRe37bfcHw',
      url_base: 'https://api.intern.d-tt.nl/api/houses',
      query:'',
      house: {}
    }
  },
  methods: {
      fetchHouse (e) {
       if(e.key == "Enter")
              fetch (`${this.url_base} house?q=${this.query} ${this.api_key}`)
              .then( res =>{
                  return res.json();
              }).then(this.setResults);
          
      },
      setResults (results) {
          this.house = results; 
      }
  }
}
</script>

<style scoped>
.second--page{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px 2px 0px;
    padding-left: 15%;
    padding-right: 15%;
    padding-bottom: 20px;
    font-family: 'montserrat', sans-serif;
}

.search--box{
    display: flex;
    align-items: center;
    background-color: #E8E8E8;

    border-radius: 5px;
}
button{
    border: none;
    background-color: #E8E8E8;
}
.search--box .search--bar{
    background-color: #E8E8E8;
    display: block;
    border: none;
    width: 300px;
    min-height: 30px;
    padding-right: 0px;
    
}
.second-page-wrapper{
    display: flex;
    padding-right: 15%;
}


.tag-one{
    padding: 10px 50px 10px 50px;
    background-color: #EB5440;
    border-radius: 5px 0px 0px 5px ;
}
.tag-two{
    padding: 10px 50px 10px 50px;
     background-color: #C3C3C3;
    border-radius: 0px 5px 5px 0px ; 
}
.text--tag{
    font-size: 14px;
    color: #ffffff;
}

@media screen and (max-width: 40em) 
{
    .second{
        margin: 0;
        padding: 0;
    }
    .second--page{
        display: block;
        align-content: center;
        margin: 0;
        padding-left: 6%;
        padding-right: 6%;
    }
   .search--box{
       padding-left: 6%;
       padding-right: 6%;
       width: auto;
   }
   .second-page-wrapper{
       width: auto;
    padding-right: 0;
    padding-left: 0;
}
   .tag-one{
       padding: 10px 65px 10px 62px;
   }
   .tag-two{
       padding: 10px 62px 10px 65px;
   }
}
</style>