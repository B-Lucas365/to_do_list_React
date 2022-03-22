import * as C from './App.Styles'
import {useState} from  'react'
import {Item} from './types/Item'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1 , name: 'Reunião', done: false}
  ])

  return (
    <C.Container >
      <C.Area>
        <h1>Lista de Tarefas</h1>

        {list.map((item, index) => (
          <div>{item.name}</div>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App

