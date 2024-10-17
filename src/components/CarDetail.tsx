import { Coches } from "../types";

type CarsDisplayProps = {
    coche: Coches,
}



export default function CarDetail({coche}:CarsDisplayProps) {

    return (
        <>
        <div className="carDetail">
            <div className="carDetail__image">
                <img src={`img/${coche.image}.png`} alt={`imagen de coche ${coche.brand} ${coche.model}`} />
            </div>
            <div id={`${coche.id}`} className="carDetail__details">
                    <div className="carDetail__details--title" >
                        <p>{coche.brand}</p>
                        <p>{coche.model}</p>
                        <p>{coche.year}</p>
                        <p>{coche.color}</p>
                        <p>{coche.price}€</p>
                    </div>
                    <div className="carDetail__details--content" >
                        <p><span>Creador: </span>{coche.creator}</p>
                        <p><span>Motor: </span>{coche.engine}</p>
                        <p><span>Combustible: </span>{coche.fuelType}</p>
                        <p>{coche.horsepower}<span>CV</span></p>
                        <p><span>Puertas: </span>{coche.doors}</p>
                        <p><span>Transmisión: </span>{coche.transmission}</p>
                    </div>
                    <div className="carDetail__details--desc" >
                        <p>{coche.description}</p>
                    </div>
            </div>
        </div>
        </>
    )
}
