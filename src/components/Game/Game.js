import React from 'react'
import './Game.scss'

export default () => {

  const cells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '']

  const handleClick = (e) => {
    e.preventDefault()
    const emptyCell = document.getElementsByClassName('emptyCell')
    const currentOrder = e.target.style.order
    const currentEmptyCell = emptyCell[0].style.order
    
    emptyCell[0].style.order = currentOrder
    e.target.style.order = currentEmptyCell
  }

  return (
    <div className="playField">
      {cells
        .sort(()=>Math.random() - 0.5)
        .map((cell, index) => (
        <div 
          style={{ order: index }}
          className={cell.length === 0 
            ? 'emptyCell'
            : 'cell'} 
          key={cell}
          onClick={handleClick}>
            {cell}
        </div>
      ))}
    </div>
  )
}
