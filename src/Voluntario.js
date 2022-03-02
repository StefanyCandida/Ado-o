import React, {Component} from 'react'
import styled from 'styled-components'
import  facebook from './Facebook.png'
import  insta from './insta.jpg'
import cachorroT from "./pincher.jpg"
import cachorroP from "./poodle.jpg"
import cachorroS from "./pastor.jpg"

import gatoO from "./gato-angorá.jpg"
import gatoL from"./gato-srd.jpg"
import gatoG from "./persa-com-angora.webp"
import interroga from "./download.jpg"


const Pets = styled.div`
font-size: 4rem;  
height: 30vh;
width: 100%;
text-align: center;
background-image: url(./dog este.jpg);`
const Foto = styled.div`
  
  height: 30vh;
  width: 60vh;
    display: flex;
    justify-content:flex-end;
 `
 
  const Btn = styled.button`
  height: 50%;
  width: 10%;
  font-size: 1.5rem;
  border-radius: 10%;
  border:3px solid fuchsia;`

   const P = styled.p`
   font-weight: 200;
   font-size: 1rem;`

   const Header = styled.header`
      
   `
   const Redes = styled.div`
   height: 10vh;
   width: 100%;    
   display: flex;
   justify-content:center;
   background-color:pink;
   `
   const Rede = styled.img`
   height: 100%;
   width: 100%;
   border-radius:10%;
   display: flex;
  justify-content:space-between;
  background-color:pink;
   
   `
   const Ul = styled.ul`
   width:97%;
   height: 10vh;
   font-size: 2rem;
   display: flex;
   justify-content:space-between;
   flex-direction:colunm;
   background-color: pink;
   list-style: none;
   font-weight:600;
   `

  const Li= styled.li`

    `
    const A= styled.a`
text-decoration:none;    `



export default class adote extends Component{
  state = {
    dogs:[{name:'Tulio', breed:'pincher', age:'5 years', image:<img src={cachorroT}/>},
    {name:'Pipoca', breed:'poodle', age:'9 years', image:<img src={cachorroP}/>},
    {name:'Spike', breed:'Pastor', age:'2 years', image:<img src={cachorroS}/>},
    {name:'Mistério', breed:'Mistério', age:'Mistério', image:<img src={interroga}/>}
  ],

    cats:[{name:'Oliver', breed:'angorá', age:'1 years', image:<img src={gatoO}/>},
    {name:'Lola', breed:'persa', age:'2 years',image:<img src={gatoL}/>},
    {name:'Garfield', breed:'malandro', age:'1 years', image:<img src={gatoG}/>},
    {name:'um Mistério', breed:'um Mistério', age:'Mistério', image:<img src={interroga}/>}
  ],
    list : [],
    dados : [{
      informas:'',
    }]
   
}

dogList = () =>{
    this.setState({list : this.state.dogs.map((item) =>(
        <div>
            
            <P>Meu nome é {item.name} sou um cachorro da raça {item.breed} e tenho {item.age} esse sou eu:</P>
            <Foto ClassName='foto'>{item.image}</Foto>
        </div>   ))})}


catList = ()=>{
    this.setState({list : this.state.cats.map((item) =>(
      <div ClassName='foto'>
        
        <P>Meu nome é {item.name} sou um Gato da raça {item.breed} e tenho {item.age} esse sou eu:</P>
        <Foto>{item.image}</Foto>
        </div>  ))})}

clear = () => {
  this.setState({list: this.state.list.map((item) =>(
    <div>
      <h2></h2>
      </div>  
        ))})}
entrar = ()=>{
   this.setState({list : this.state.dados.map((item) =>(
    <div>
      <form>
       <label>Nome:<input></input></label> 
       <label>Endereço:<input></input></label>
       <label>Email:<input></input></label>
       <label>Idade:<input></input></label>
      <Btn>Enviar</Btn>
      </form>
          
      </div>  ))})}

  render(){
    return(
      <body>
        <Header>
          <div>            
       
       <nav>
      <Ul>
			<A href='App.js'><Li>Home</Li></A>
			<A href='Sobre.js'><Li>Sobre</Li></A>
			<A href='Voluntario.js'><Li>Seja Voluntário</Li></A>
       <Btn onClick={this.entrar}>Entrar</Btn>
		</Ul>
    </nav>      
      
            
          </div>
        </Header>

        <main>
        <div>
      <form>
       <label>Nome:<input></input></label> 
       <label>Endereço:<input></input></label>
       <label>Email:<input></input></label>
       <label>Idade:<input></input></label>
      <Btn>Enviar</Btn>
      </form>
          
      </div>  <Pets> 
                <h1>ADOÇÃO PET</h1>
        </Pets>
        <div>
             <Btn onClick={this.dogList}>DOGS</Btn> 
             <Btn onClick={this.catList}>CATS</Btn>
             <Btn onClick={this.clear}>CLEAR</Btn>             
             <h2>{this.state.list}</h2>

         </div>
        </main>

        <footer>

        <Redes> 
        <a href='https://www.instagram.com/adoteumamigodf/'><Rede src={insta} alt="instagram"/></a>
      <a href='https://clubedogato.org.br/#sobre'><Rede src={facebook} alt="facebook"/> </a>
                 
        </Redes>   

        </footer>        
      </body>
    )
    }
}