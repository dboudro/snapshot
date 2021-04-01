<template>
  <div class="home">
  
  <h1 class=""> CyberSnap </h1>
  
<div v-for="space in this.spaces" class="inline-block rounded-lg m-2 w-64 h-64 border border-gray-400">
<h1 class="text-bold text-2xl mt-3 h-32  table w-full">{{space.name}} </h1>    
     </div>  
  
  
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
