import './App.css'

function App() {

  return (
    <div className='container'>
      <h1 className='mt-3 mb-3'>Cadastro de Produtos</h1>

      <form>
        <div className="row mb-3">
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

          <div className="col">
            <input
              type="text"
              placeholder="Qtd"
              className="form-control"
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              placeholder="Url da imagem"
              className="form-control"
            />
          </div>

        </div>

        <div className='btn-group d-flex gap-3'>
          <button className='btn btn-outline-success'>Inserir</button>
          <button className='btn btn-outline-primary'>Salvar</button>
        </div>

      </form>

      <table className='table table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome do Produto</th>
            <th scope='col'>Valor</th>
            <th scope='col'>Qtd</th>
            <th scope='col'>Url da imagem</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>1</th>
            <td>Nome do Produto</td>
            <td>Valor</td>
            <td>Qtd</td>
            <td>
              <img width={100} src="https://m.media-amazon.com/images/I/613PZt698DL._AC_SX679_.jpg" alt="imagem do produto" />
            </td>
            <td>
              <div className='btn-group d-flex gap-1'>
                <button className='btn btn-outline-warning'>
                <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='btn btn-outline-danger'>
                <i class="fa-solid fa-trash"></i>
                </button>
              </div>                                   
            </td>
          </tr>
        </tbody>

      </table>

    </div>
  )
}

export default App
