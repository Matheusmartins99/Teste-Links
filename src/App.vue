<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app { 
  
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  
}

.modal-header {
    border: none !important;
}

.modal-body{
 
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
}

.modal-footer{
    display: none !important;
}

.btn .btn-primary{
  display: none;
}

.close{
  border: none;
  background-color: transparent;
}



</style>
