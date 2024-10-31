import './App.css'

function App() {

  return (
    <div className='container'>
      <h1>Cadastro de Produtos</h1>

      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Nome do Produto"
              className="form-control"
            />
          </div>

          <div className="col">
            <input
              type="text"
              placeholder="Valor"
              className="form-control"
            />
          </div>

        </div>

        <div className="row">

        </div>

        <button className='btn btn-outline-success'>Inserir</button>
        <button className='btn btn-outline-primary'>Salvar</button>

      </form>

      <table>

      </table>

    </div>
  )
}

export default App
