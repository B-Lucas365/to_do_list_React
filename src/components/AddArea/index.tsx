import React, { useState, KeyboardEvent} from 'react'
import * as C from './style'

type Props = {
    onEnter: (taskName:string) => void
}
export const AddArea = ({onEnter}:Props ) => {
    const [inputText, setInputText] = useState('')

    const handleInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setInputText(event.target.value)
    }

    const handleKeyUp = (e:KeyboardEvent) =>{
        if(e.code === 'Enter' && inputText !=='') {
            onEnter(inputText)
            setInputText('')
        }
    }

    return (
        <C.Container>
            <div className='image'> + </div>
            <input 
                type="text"  
                placeholder='Adicione uma Tarefa'
                value={inputText}
                onChange={handleInput}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}