
import React, {useState,useEffect} from 'react';
import './style.css';


function App() {

  const[nutri,setNutri] = useState([]);
  
  useEffect(() =>{
     function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
      .then((response) => response.json())
      .then((json)=>{
        console.log(`JSOn ===>`,json);
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
   


      {console.log(`Var Nutri ===>`,nutri)}
        {nutri.map((item)=>{
          return(
              <article key = {item.id} className="post">
          <storng className="titulo">{item.titulo}</storng>
          <img src = {item.capa} alt = {item.titulo} className="capa"></img>
          <p className="subtitulo">
            {item.subtitulo}
          </p>
          <a href = "#" className="botao">Acessar</a>
        </article>
          )
      })}
   
  
    
   </div>
  );
}

export default App;
