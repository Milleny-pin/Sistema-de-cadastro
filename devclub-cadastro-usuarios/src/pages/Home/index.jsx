
import './style.css'
import Trash from '../../assets/trash.png'
function Home() {

  return (
  
      <div className='container'>
        <form>
          <h1> Cadastro de Usuários</h1>
          <input name='nome'type='text'/>
          <input name='email'type='email'/>
          <input name='endereço'type='text'/>
          <button type='button'>Cadastrar</button>
        </form>
        <div>
          <div>
            <p>Nome:</p>
            <p>Endereço: </p>
            <p>Email</p>
          </div>
          <button> <img src='{Trash'></img></button>
        </div>
        
      </div>
      
  )
}

export default Home
