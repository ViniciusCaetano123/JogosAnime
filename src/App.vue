<template>
  <div id="app">   
     <router-view />
  </div>
</template>

<script>

export default {    
  name: 'App', 
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(241, 240, 240);
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
 background:url('http://vcaetano.com.br/img/84631.jpg') no-repeat;
    background-size:cover;
}

</style>
