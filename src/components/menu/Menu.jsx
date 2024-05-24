import React from 'react'
import './menu.css'


const Menu = () => {
  return (
    <div className='menu'>
        <div className="menu__title">
            <h2 className='menu__title-title'>Меню</h2>
        </div>
        <div className="menu__wrapper">
            <div className="menu__food">
                <div className='menu__description'>
                    <h3>МЕНЮ БЛЮД</h3>
                    <p>Наше меню предлагает вкусные блюда, приготовленные из свежих и качественных ингредиентов. Каждое блюдо – это гармония вкусов и ароматов, которая понравится каждому. Насладитесь разнообразными закусками, основными блюдами и десертами!</p>
                </div>
            </div>
            <div className="menu__drink">
                <div className='menu__description'>
                        <h3>МЕНЮ БЛЮД</h3>
                        <p>Наше меню предлагает вкусные блюда, приготовленные из свежих и качественных ингредиентов. Каждое блюдо – это гармония вкусов и ароматов, которая понравится каждому. Насладитесь разнообразными закусками, основными блюдами и десертами!</p>
                </div>
            </div>
        </div>
  
    </div>
  )
}

export default Menu