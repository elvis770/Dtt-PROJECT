<template>
  <div class="houses">
    <navbar />
    <hero />
    <second />
    <div v-for="house in houses" :key="house.id">
      <house :houseData="house" />
    </div>
    

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Second from "@/components/Second.vue";
import House from "@/components/House.vue";
// import axios from "axios";

export default {
  name: "HousesView",
  components: {
    Navbar,
    Hero,
    Second,
    House,
    Footer,
  },
  mounted() {
    // axios.get('https://api.intern.d-tt.nl/api/houses', {
    //   headers: {
    //     'X-Api-Key': 'J7KscX4VO9jvTGHalMnbL0fS5WwuRxCr',
    //   },
    // }).then(res => res.json()).then(data => {
    //   console.log('data', data);
    // })
  },
  data() {
    return {
      houses: [
        {
          id: 2,
          image: "https://api.intern.d-tt.nl/uploads/house1.jpg",
          price: 123,
          rooms: {
            bedrooms: 1,
            bathrooms: 1,
          },
          size: 500,
          description: "oui",
          location: {
            street: "street 20",
            city: "assas",
            zip: "asasdd",
          },
          createdAt: "2020-05-07",
          constructionYear: 2000,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 3,
          image: "https://api.intern.d-tt.nl/uploads/house2.jpg",
          price: 969000,
          rooms: {
            bedrooms: 3,
            bathrooms: 1,
          },
          size: 153,
          description:
            "Dit bijzondere appartement is gelegen op de bel-etage en in het souterrain van een Rijks monumentaal grachten pand ter hoogte van de 'Negen-straatje'. Deze woning kenmerkt zich door de vele originele details die behouden zijn. Bij de renovatie is met de grootste aandacht zorg gedragen voor het conserveren van de oorspronkelijke stijlelementen. Met name in de monumentale stijlkamer aan de voorzijde van de woning. Terwijl de keuken dan weer modern en state of the art is.",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1016 BV",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 4,
          image: "https://api.intern.d-tt.nl/uploads/house3.jpg",
          price: 795000,
          rooms: {
            bedrooms: 3,
            bathrooms: 1,
          },
          size: 153,
          description:
            "Heerlijk licht en groot bovenhuis van 153 m² met eigen opgang. Het karakteristieke pand uit 1886 staat op EIGEN GROND en ligt in de populaire Oosterparkbuurt. De woning ligt op een steenworp afstand van het mooie Oosterpark en de Dappermarkt. Alle denkbare voorzieningen vindt u in de buurt. Zeer goed bereikbaar met zowel de auto als het openbaar vervoer en op loopafstand van het NS station Muiderpoort.",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1092 CK",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 5,
          image: "https://api.intern.d-tt.nl/uploads/house4.jpg",
          price: 1500000,
          rooms: {
            bedrooms: 5,
            bathrooms: 2,
          },
          size: 160,
          description:
            "Op een top locatie in Oud-Zuid ligt dit zojuist hoogwaardige gerenoveerde dubbel bovenhuis van 160 m² (NEN-meting) met eigen opgang vanaf de straat en met ruim dakterras en nieuwe fundering.",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1071 EV",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 6,
          image: "https://api.intern.d-tt.nl/uploads/house5.jpg",
          price: 725000,
          rooms: {
            bedrooms: 6,
            bathrooms: 3,
          },
          size: 157,
          description:
            "Op een prachtige locatie in het buitengebied van Amsterdam hebben wij onlangs dit vrijstaande woonhuis in de verkoop gekregen. De woning is gelegen op maar liefst 570 m2 eigen grond en heeft een rondom gelegen prachtig aangelegde tuin met diverse terrassen waarvan een aan het water is gelegen. Genoeg over het buitenleven, je bent vast nieuwsgierig naar wat het binnenshuis voor jou in petto heeft!",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1067 TV",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 7,
          image: "https://api.intern.d-tt.nl/uploads/house6.jpg",
          price: 645000,
          rooms: {
            bedrooms: 3,
            bathrooms: 1,
          },
          size: 95,
          description:
            "Midden in het centrum van Amsterdam ligt, met uitzicht op het Oosterdok en het Centraal Stationsgebied, dit monumentale appartementencomplex, OP EIGEN GROND!",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1012 AE",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 8,
          image: "https://api.intern.d-tt.nl/uploads/house7.jpg",
          price: 1175000,
          rooms: {
            bedrooms: 4,
            bathrooms: 3,
          },
          size: 185,
          description:
            "Thans mogen we aanbieden, een riante benedenwoning op EIGEN GROND met een wel zeer royale woonkamer! Een parel met vrij uitzicht over het achterliggende Amsterdamse Bos.",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1081 JP",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 9,
          image: "https://api.intern.d-tt.nl/uploads/house8.jpg",
          price: 1300000,
          rooms: {
            bedrooms: 3,
            bathrooms: 1,
          },
          size: 116,
          description:
            "Op de derde en vierde (bovenste) etages van een historisch grachtenpand in het hart van de Jordaan, vindt u deze unieke en zeer ruime designwoning van 116 m2 met open karakter, twee grote slaapkamers en een balkon aan de achterzijde met uitkijk op de Westertoren. De woning kent een bijzonder luxe afwerking en is volledig onder interieur architectuur gerealiseerd in 2016. De woning is per direct bewoonbaar en wordt opgeleverd “as is” (rekeninghoudend met de roerende zakenlijst).",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1016 TS",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 10,
          image: "https://api.intern.d-tt.nl/uploads/house9.jpg",
          price: 475000,
          rooms: {
            bedrooms: 4,
            bathrooms: 1,
          },
          size: 89,
          description:
            "Op een werkelijk fenomenale plek midden in het centrum van Amsterdam ligt dit sfeervolle en lichte dubbele bovenhuis met 3 slaapkamers en een woonoppervlakte van bijna 90 m². Het appartement bevindt zich op eigen grond op de 6e en 7e (bovenste) etages van een traditioneel wijnpakhuis gelegen aan het rustige gedeelte van de Spuistraat.",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1012 TS",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
        {
          id: 11,
          image: "https://api.intern.d-tt.nl/uploads/house10.jpg",
          price: 500000,
          rooms: {
            bedrooms: 3,
            bathrooms: 1,
          },
          size: 97,
          description:
            "De woning is gelegen in een Rijksmonument aan het begin van de Spuistraat net om de hoek bij het oude Kattegat en de Koepelkerk. De ligging van het pand is ideaal. Op loopafstand van het Centraal Station maar ook van o.a. de Kalverstraat en Nieuwendijk met een diversiteit aan winkels. En om de hoek treft u een supermarkt waar u terecht kunt voor de dagelijkse boodschappen.",
          location: {
            street: "Oud Heinstraat 23",
            city: "Amsterdam",
            zip: "1012 TS",
          },
          createdAt: "2020-05-07",
          constructionYear: 2020,
          hasGarage: false,
          madeByMe: false,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  background-color: #f6f6f6;
  margin: 0;
}
</style>
