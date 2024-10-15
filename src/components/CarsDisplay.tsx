import { Coches } from "../types"

type CarsDisplayProps = {
    coche: Coches
}

export default function CarsDisplay({coche}:CarsDisplayProps) {
    
    return (
        <div className={`container__item ${coche.color}`}>
            <img className="container__item--image" src={`../../public/img/${coche.image}.png`} alt="" />
            <div className="container__item--container">
                <h2 className="container__item--brand">
                    {coche.brand}
                </h2>
                <div className="container__card">
                    <p className="container__card--model">
                        {coche.model}
                    </p>
                    <p className="container__card--year">
                        {coche.year}
                    </p>
                    <p className="container__card--price">
                        {coche.price}€
                    </p>
                    <button className="container__card--button">
                        Más Info
                    </button>
                </div>
            </div>
        </div>
    )
}
