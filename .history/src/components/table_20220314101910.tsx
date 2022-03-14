import styles from '../styles/Table.module.css'

export default function Table() {
  return (
    <div id="table-container">
      <h1 id="tableTitle">Lista de registros</h1>
      <table>

        <thead>
          <th>Nome</th>
          <th>Data de Criação</th>
          <th>Última vez modificado</th>
          <th>Ações</th>
        </thead>

        <tbody>
          <tr>
            <td>Clientes</td>
            <td>10/03/2022</td>
            <td>14/03/2022</td>
            <td>Modificar | Excluir</td>
          </tr>
          <tr>
            <td>Clientes</td>
            <td>10/03/2022</td>
            <td>14/03/2022</td>
            <td>Modificar | Excluir</td>
          </tr>
          <tr>
            <td>Clientes</td>
            <td>10/03/2022</td>
            <td>14/03/2022</td>
            <td>Modificar | Excluir</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}