import React from 'react'
import PageDefault from '../../../componets/PageDefault'
import { Link } from 'react-router-dom'

export default function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <Link to="/">Ir para Home</Link>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
    </PageDefault>
  )
}
