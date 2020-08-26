<template>
  <div class="banner">
      <div class="quadrado"> 
          <button :class="{play:true,playActive:playActive}" @click="jogar()"> 
              Play
          </button>
          <div :class="{opcoes:true,opcoesActive:opcoesActive}">
              <button @click="$router.push({name:'jogos',params:{id:1}})">Facil</button>
              <button @click="$router.push({name:'jogos',params:{id:2}})">Intermediario</button>
              <button @click="$router.push({name:'jogos',params:{id:3}})">Insano</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            playActive:false,
            opcoesActive:false
        }
    },
    methods:{
        jogar(){
            this.playActive = !this.playActive
            this.opcoesActive = !this.opcoesActive
        },        
    }

}
</script>

<style>
.banner{
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
}
.banner button.play{
    width: 310px;
    height: 90px;
    font-size: 36px;
    font-weight: 600;
    border: none;
    color: #fff;
    background: #f7b733;
    border-radius: 5px;
    transition: 0.6s all;
    transform: translate(0px,0px);
    opacity: 1;
}
.banner button.play:hover{
    background: #c38d20;
}
.banner button:focus{
    outline: none;
}
.banner button.playActive{
  transform: translate(0px,-420px);
  opacity: 0;
}
.banner .opcoes{
    display:flex;
    flex-direction: column;
    width: 300px;    
    transition: 0.6s all;  
    position:absolute;
    left:-100%;  
    top:50%;
    margin-right:50%;   
    transform: translate(-50%, -50%)
}
.banner .opcoesActive{
    left:50%; 
}
.banner .opcoesActive button{
    height:50px;
    border:none;
    background: #f7b733;
    border-radius: 5px;
    font-size:18px; 
    color:#fff;
    font-weight:600;
    margin-top:20px;
}
.banner .opcoesActive button:focus{
    outline: none;
}
.banner .opcoesActive button:hover{
    background: #c38d20;
}
</style>