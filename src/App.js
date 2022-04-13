
import React, {useState,useEffect} from 'react';
import './style.css';


function App() {

  const[nutri,setNutri] = useState([]);
  let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
  useEffect(() =>{
     function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
      .then((response) => response.json())
      .then((json)=>{
        console.log(json);
        setNutri(json)
      })
    }
    loadApi();
  },[])

  return (
   <div className="container">
     <header>
       <strong>
         React Nutri
       </strong>
     </header>
    <div>
    {nutri.map((item)=>{
       <article key = {item.id} className="post">
         <storng className="titulo">{item.titulo}</storng>
         <img src = {item.capa} alt = {item.titulo} className="capa"></img>
         <p className="subtitulo">
           {item.subtitulo}
         </p>
         <a className="botao">Acessar</a>
       </article>
     })}
    </div>
    
   </div>
  );
}

export default App;
