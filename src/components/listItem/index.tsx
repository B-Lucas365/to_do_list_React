import React, {useState} from 'react'
import * as C from './style'
import { Item} from '../../types/Item'

type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done)
    
    const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }
    return (
        <C.Container done={isChecked}>
          <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={handle}
          />
          <label>{item.name}</label>  
        </C.Container>
    )
}