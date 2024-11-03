import { useState } from 'react';
import './App.css';

function App() {

  const [id, setId] = useState('');
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [foto, setFoto] = useState('');

  const [classInserir, setClassInserir] = useState('');
  const [classAlterar, setClassAlterar] = useState('sumir');

  const Cadastrar = (e) => {
    e.preventDefault()

    if (produto === "") {
      alert("Por favor preencha o campo nome do produto")
    } else if (valor === "") {
      alert("Por favor preencha o campo valor do produto")
    } else if (quantidade === "") {
      alert("Por favor preencha o campo quantidade do produto")
    } else if (foto === "") {
      alert("Por favor preencha o campo foto do produto")
    } else {
      alert("Produto cadastrado com sucesso!")
    }
  }


  return (
    <div className='container'>
      <h1 className='mt-3 mb-3'>Cadastro de Produtos</h1>

      <form onSubmit={Cadastrar}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={produto}
              className="form-control"
              placeholder="Nome do Produto"
              onChange={(e => setProduto(e.target.value))}
            />
          </div>

          <div className="col">
            <input
              type="text"
              value={valor}
              placeholder="Valor"
              className="form-control"
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="col">
            <input
              type="text"
              placeholder="Qtd"
              value={quantidade}
              className="form-control"
              onChange={(e) => setQuantidade(e.target.value)}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              value={foto}
              className="form-control"
              placeholder="Url da imagem"
              onChange={(e) => setFoto(e.target.value)}
            />
          </div>
        </div>

        <button type='submit' className={`btn btn-outline-success ${classInserir}`}>Inserir</button>
        <button className={`btn btn-outline-primary ${classAlterar}`}>Salvar</button>


      </form>

      <table className='table table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nome do Produto</th>
            <th scope='col'>Valor</th>
            <th scope='col'>Qtd</th>
            <th scope='col'>Imagem</th>
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
              <img width={40} src="https://m.media-amazon.com/images/I/613PZt698DL._AC_SX679_.jpg" alt="imagem do produto" />
            </td>
            <td>
              <div className='btn-group d-flex gap-1'>
                <button className='btn btn-outline-warning'>
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button className='btn btn-outline-danger'>
                  <i className="fa-solid fa-trash"></i>
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
