<template>
  <div id="app1">
        <div class="o" v-show="voceGanhou"> 
            <img src="http://vcaetano.com.br/img/restart.svg" @click="resetar()" width="35" style="cursor:pointer;">
            <button @click="$router.push({name:'principal'})"> Voltar </button> 
        </div> 
    <div class="b">  
      <div :class="{traB:traB}"></div>  
      <div v-show="voceGanhou">
        <img :src="escolhido.img" width="500" height="275"/>   
        <div v-for="i in 4" :key="i" :class="{blocoA:true,blocoErro:escolhidos[i-1].erro,blocoCerto:escolhidos[i-1].certo}" @click="clicar(escolhidos[i-1])">
          <span>{{escolhidos[i-1].nome}}</span>
        </div>
      </div>
      <div v-show="!voceGanhou">
        <p>Porcetagem de acertos : {{((this.quantAcertos/(this.quantAcertos+this.quantErros))*100).toFixed(1)}}</p>
        <p>Porcetagem de erros : {{((this.quantErros/(this.quantAcertos+this.quantErros))*100).toFixed(1)}}</p>
        <div @click="jogarNovamente()" style="cursor:pointer;">
          Jogar novamente
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {    
  name: 'App', 
  data(){
    return{  
        quantAcertos:0,
        quantErros:0,
        car:true,
        traB:false,
        animesEmbaralhados:[],      
        escolhido:null,
        animes:[
        {id:1,nome:'Naruto',acerto:0,img:'http://vcaetano.com.br/img/img2.jpg',erro:false,certo:false},
        {id:2,nome:'Bleach',acerto:0,img:'http://vcaetano.com.br/img/img1.jpeg',erro:false,certo:false},
        {id:3,nome:'Samurai X',acerto:0,img:'http://vcaetano.com.br/img/img3.jpg',erro:false,certo:false},
        {id:4,nome:'Cowboy Bebop',acerto:0,img:'http://vcaetano.com.br/img/img4.jpg'},
        {id:5,nome:'Fullmetal Alchemist',acerto:0,img:'http://vcaetano.com.br/img/img5.jpg',erro:false,certo:false},
        {id:6,nome:'Tokyo Ghoul',acerto:0,img:'http://vcaetano.com.br/img/img6.jpeg',erro:false,certo:false},
        {id:7,nome:'Hunter x Hunter',acerto:0,img:'http://vcaetano.com.br/img/img7.jpg',erro:false,certo:false},
        {id:8,nome:'One Piece',acerto:0,img:'http://vcaetano.com.br/img/img8.jpg',erro:false,certo:false},
        {id:9,nome:'Code Geass',acerto:0,img:'http://vcaetano.com.br/img/img9.jpg',erro:false,certo:false},
        {id:10,nome:'Sword Art Online',acerto:0,img:'http://vcaetano.com.br/img/img10.jpg',erro:false,certo:false},
        {id:11,nome:'Fairy Tail',acerto:0,img:'http://vcaetano.com.br/img/img11.jpg',erro:false,certo:false},
        {id:12,nome:'Ataque dos Titãs',acerto:0,img:'http://vcaetano.com.br/img/img13.jpg',erro:false,certo:false},
        {id:13,nome:'Neon Genesis Evangelion',acerto:0,img:'http://vcaetano.com.br/img/img12.jpg',erro:false,certo:false},
        {id:14,nome:'One-Punch Man',acerto:0,img:'http://vcaetano.com.br/img/img14.jpg',erro:false,certo:false},
        {id:15,nome:'JoJo s Bizarre Adventure',acerto:0,img:'http://vcaetano.com.br/img/img15.jpg',erro:false,certo:false},
        {id:16,nome:'Kaichou wa Maid-sama!',acerto:0,img:'http://vcaetano.com.br/img/img16.jpg',erro:false,certo:false},
      ]  ,
      escolhidos:[]
    }
  },
  computed:{
    voceGanhou(){
      return this.escolhidos.length <=4 ? false : true
    }
  },
  methods:{
    resetar(){   
        if(this.car){     
            this.car = false 
            this.traB = true     
            this.jogarNovamente()
            setTimeout(()=>{
                this.traB = false
                this.car = true
            },370)
        }
    },
    jogarNovamente(){
      for(let n of this.animes){
        n.acerto = 0
      }
      this.animesEmbaralhados = this.shuffle(this.animes)
      this.getEscolhidos()       
    },
    clicar(anime){
      if(this.car){
        this.car = false      
       if(this.escolhido.id == anime.id){
        anime.acerto = 1        
        anime.certo = true
        anime.erro = false
        this.quantAcertos++
      }else{        
        anime.certo = false
        anime.erro = true
        this.quantErros++
      }
      setTimeout(()=>{
        this.traB = true
      },370)
       this.shuffle(this.animesEmbaralhados)
      setTimeout(()=>{              
          anime.certo = false
          anime.erro = false     
          this.getEscolhidos()
          this.car = true
        },370)   
      setTimeout(()=>{
        this.traB = false
      },730)
      } 
    },
    shuffle(array) {
      var m = array.length, t, i;      
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    },
    getEscolhidos(){
      this.escolhidos =  this.animesEmbaralhados.filter(r => r.acerto == 0)    
      let i = Math.floor(Math.random() * 4);
      this.escolhido = this.escolhidos[i]
    }
  },
  mounted(){
    this.animesEmbaralhados = this.shuffle(this.animes)
    this.getEscolhidos() 
  }
}
</script>

<style>
#app1 {  
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#app1 .o{
    width: 500px;
    margin:20px 0px;
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
} 
#app1 .o button{
    background: #3a5899;
    color: #fff;
    border: none;
    padding: 7px 35px;
    font-weight: 600;
    border-radius: 5px;
    transition: 0.5s all;
}
#app1 .o button:hover{
    background: #192847;
}
#app1 .o button:focus{
    outline: none;
}
#app1 div.b{
  background: #fff;
  padding: 10px;
  box-shadow: 0 3px 14px #00000029;
  border-radius: 5px;
  position:relative;
}
#app1 div.traB{
  position:absolute;
  width:100%;
  height:100%;
  background:#fff;
  z-index:4;
  top:0;
  border-radius:5px;
  left:0;
  opacity: 1;
  transform: 5s all;
}
#app1 .blocoA{
    border: 1px solid #bbb;
    background: #f4f4f4;
    display: flex;
    height: 55px;
    width: 500px;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-top: 10px;
}
#app1 .blocoErro{
  background:red !important;
  color:#fff !important;
  border-color: red !important;
}
#app1 .blocoCerto{
  background:green !important;
  color:#fff !important;
   border-color: green !important;
}
#app1 .blocoA:hover{
  border-color: #3a5899;
  background: #3a5899;
}
#app1 .blocoA:hover{
  color:#fff;
}
@media only screen and (max-width: 600px) {
    #app1 .blocoA {   
        height: 45px;
        width: 300px;   
        font-size: 15px; 
    }
    #app .b img{
        width: 300px !important;
        height: 190px !important;
    }
    #app1 .o {
        width: 300px;
    }
}
</style>
