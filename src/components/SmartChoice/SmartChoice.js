import { Switch } from 'antd'
import React, { useState } from 'react'
// import 'antd/dist/antd.css'
import './SmartChoice.scss'

export const SmartChoice = () => {
  const [good, setGood] = useState(false)
  const [cheap, setCheap] = useState(false)
  const [fast, setFast] = useState(false)

  const onChangeGood = () => {
    setGood(!good)
    if (fast && cheap) setCheap(!cheap)
  }
  const onChangeCheap = () => {
    setCheap(!cheap)
    if (good && fast) setFast(!fast)
  }
  const onChangeFast = () => {
    setFast(!fast)
    if (good && cheap) setGood(!good)
  }

  return (
    <div className="switch">
      <span className="switch__header">Choose work scheme</span>
      <div className="switch__wrapper">
        <Switch 
          className="switch__item"
          checkedChildren="Good" 
          unCheckedChildren="Good" 
          onChange={onChangeGood}
          checked={good}/>
        <Switch 
          className="switch__item"
          checkedChildren="Cheap" 
          unCheckedChildren="Cheap" 
          onChange={onChangeCheap}
          checked={cheap}/>
        <Switch 
          className="switch__item"
          checkedChildren="Fast" 
          unCheckedChildren="Fast" 
          onChange={onChangeFast}
          checked={fast}/>
      </div>
    </div>
  )
}

// export default SmartChoice