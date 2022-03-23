import * as C from './App.Styles'
import {useState} from  'react'
import {Item} from './types/Item'
import { ListItem} from './components/listItem'
import { AddArea} from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1 , name: 'Reunião', done: false},
  ])

  const handleAddTask = (taskName:string) =>{
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }


  return (
    <C.Container >
      <C.Area>
        <h1>Lista de Tarefas</h1>
        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App

