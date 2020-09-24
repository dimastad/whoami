import { Switch } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'
import './SmartChoice.scss'

const SmartChoice = () => {

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  return (
    <div className="switch">
      <span className="header">Фильтр работ</span>
      <div className="switch__wrapper">
        <Switch 
          className="switch__item"
          checkedChildren="Good" 
          unCheckedChildren="Good" 
          onChange={onChange} />
        <Switch 
          className="switch__item"
          checkedChildren="Cheap" 
          unCheckedChildren="Cheap" 
          onChange={onChange} />
        <Switch 
          className="switch__item"
          checkedChildren="Fast" 
          unCheckedChildren="Fast" 
          onChange={onChange} />
      </div>
    </div>
  )
}

export default SmartChoice