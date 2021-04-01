<template>
  <div class="home">
  
  <h1> CyberSnap </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  
  name: "home",
  components: { HelloWorld }, 
    data: function () {
    return {
      rarity: "legendary",
      spaces: []
    }

  },
         created() {
           console.log('getting data')
    this.$http.get('https://hub.snapshot.page/api/spaces').then((data) =>{
      console.log(data)
       return data.json().then((data)=> {
         this.spaces = data;
       })

    })
        
    }
};
</script>
