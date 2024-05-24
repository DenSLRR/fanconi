import React from 'react'
import './cards.css'


const Card = (props) => {
    
    return (
        <div style={props.bgimage} id='events' className='card'>
            <div className="card__image">
                <div className="card__date">
                    <div className="card__date_block">
                        <p className='card__date_block-day'>{props.day}</p>
                        <p className='card__date_block-month'>{props.month}</p>
                    </div>
                </div>
                <div className="card__description">
                    <p className='card__description-name'>{props.name}</p>
                    <p className='card__description-start'>{props.start}</p>
                </div>
            </div>
            {/* <button className={props.status}><a href="#">{props.activity}</a></button> */}
        </div>
    )

}


const Cards = () => {
  return (
    <div className='cards'>
        <div className="cards__title">
            <h2>События</h2>
        </div>
        <div className="cards__container">
            <Card bgimage={{
                background: "url('https://s3-alpha-sig.figma.com/img/9bff/23d2/7d4e0bca2a3043ea67bc0179e70d610c?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F71Gyq~nMH4DAyXYzx3QtaJdvJrwYB0aB~UxjldyBjHdzqFqkTnRPhYFpLyxyepYBUH8rTDY7Cu~eOjxzqzkA8KkAa-YN-UDzDbAyfopaFJ1yhVrdkDgTTA39DAIdbEFyIQWLkoFhX9yAsmpJy-zXuBX3i~IVoMGj1gDSM72s3txN3~it7wFmmMGanBZqWgfVoJut4aC0v4qa~suT~IQ3ghEv8210iNQ0DBDWIf~hsNRukf7aZyBBy3Cas-KHCNFVQHsvPd0AlYa5~xIFm08cs2OhaepQY1ke1qhF8mXgLUeB~IbtNIsU-WNwrzypGZIzOpSa3N7j5rPD~1~n-aI2w__')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }} 
                status={'card-btn card__active'} 
                day={'29'} month={'Мая'} 
                name={'CITYFOX REGENERATE'} 
                start={'Начало в 20:42'} 
                activity={'купить билет'} />
            <Card bgimage={{
                background: "url('https://s3-alpha-sig.figma.com/img/6420/8935/d6f780db1e12a8aa57d97e2ab821e9b9?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TDg0rDCsGo9pqER3vTrwFcRmgM9wafWeDeNkdWxzZh~qtJMquHcvrxC1cTopxDwXu1SgxsNqTRxYrMvW4tFsV-FrE6m9plqmWssQEssjHtHFZ5qUkHDESL-9eHeGH1wj-YPkW~NbawjhHMKLGTdEoFy5M3BlFopTxB5hmX9fDp0lA4C3uimdG1s-eocl4p1~kHgJxK~I1uQ2Jdd56l56qADWuR98owDG4fiK3OOEHXaaKxU6OClX04zxyd2noSBJRz1bdcX4rmrkV0L608Xt4NnPM4txYCXn73O1lU801K6cVUH8awsXQ3--FfWKIoB~UN6ctKADyKPNNfZ50G9mhA__')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }} 
                status={'card-btn '} 
                day={'16'} month={'Мая'} 
                name={'CITYFOX REGENERATE'} 
                start={'Начало в 20:42'} 
                activity={'срок истек'} />    
            <Card bgimage={{
                background: "url('https://s3-alpha-sig.figma.com/img/b45b/a62b/b5d9079da47cf690ad552af63a7de127?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GhhI502Hz-xdiSAMGZVJAwoHqE9UM228pInY1vjnaxgjS7rnbLXxv3g9tIaNHRQnnbUEPAvMaNRZLs1w87drlAVUWkpn8mkyEmB97G3lry6u4xMx7QTE35bjZGhdGU5w2UXzkwKxyEiNqc5ymHGZJ4SiPbsPOsdSObLcUH9evXtY6oyNDWa1usNfA-PGSaudqDjOm721CDEutwjOeE5WSINgROzI81G-oix0b2fp9Ui5ryMPa8PeneGfKKISybH8Ll0vyiUjHpeYh06SgVO5UiP2BmWrW2MxSJw7ihcOVKgL8A9grJJD5Q6rrkij27G5KaZzVCvZroefAR9Uu9nxfg__')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }} 
                status={'card-btn '} 
                day={'7'} month={'Мая'} 
                name={'CITYFOX REGENERATE'} 
                start={'Начало в 20:42'} 
                activity={'срок истек'} />
            <Card bgimage={{
                background: "url('https://s3-alpha-sig.figma.com/img/ee7a/ed96/b070f8765625ae65173e04e08f81d406?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czTH4Hj1r9PXwFi-98-YgweocYpPUKsz4eq6e3eUOarApoXyMFDdjY~jyYFoPB5ORnB0mGlYTfdGS73XMsVTkciz5lhXIzdXfUJ3DBW1xoJCqYIJIH7JY5wKq-Q31lglCJKccV2Gz0VEKFUJqt98EfBmXJjAII442waGd5TINUpKa1GgiJnD9LTbL0jUEmVKSFaUgcYHe-gsVwa6XfMb6-ckzJLQyfUtEX1uG71uVcSvF9AClHh-1QLPPREcyD6fxKjOqIveV96qlq7oT6S39GaiqFqvNDm~JTHN2isf7XSAiqfM2MzE9AphQzj-EE3zHd8k-vOctpOuzLSonrYVeA__')",
                backgroundPosition: 'center',
                backgroundSize: 'cover'
                }} 
                status={'card-btn '} 
                day={'1'} month={'Мая'} 
                name={'CITYFOX REGENERATE'} 
                start={'Начало в 20:42'} 
                activity={'срок истек'} />
        </div>
    </div>
  )
}

export default Cards