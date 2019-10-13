import React from 'react';
import '../containers/App.css';



function Home() {
  return (
    
      <div className="content">
        <p>
          Reserve um <strong>laboratório</strong> de maneira mais prática 
        </p>
        <form>
          <label htmlFor="matricula">MATRÍCULA *</label>
          <input
           type="email"
           id="matricula" 
           placeholder="Digite aqui a sua matrícula"
           />
          <label htmlFor="password">PASSWORD *</label>
           <input
           type="password"
           id="password" 
           placeholder="Digite aqui a sua senha"
           />
           <button className="btn" type="submit" on_click="/">ENTRAR</button>
        </form>
      </div>
    
  );
}

export default Home;