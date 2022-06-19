import Card from "../card/card.component";
import './card-list.styles.css'

const CardList = ({ monsters }) => ( // no need to de-structuring parameters as we pass only oine parameter, no return we implicitly return coz nothing else to return
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Card monsters={monster}></Card>
            )
        })}
    </div>
)

export default CardList;