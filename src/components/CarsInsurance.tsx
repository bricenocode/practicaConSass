import { Seguro } from "../types"

type CarsInsuranceProps = {
    seguro: Seguro
}

export default function CarsInsurance({seguro}: CarsInsuranceProps) {
    return (
        <> 
        <div>
            <div className="insurance">
                <details className="insurance__details">
                    <summary className="insurance__summary">
                    <img className="insurance__summary--img" src={`../img/${seguro.image}.png`} alt={`Logo de ${seguro.name}`}/>
                    </summary>
                    <div className="insurance__box">
                        <h4 className="insurance__details--title">{seguro.description}</h4>
                        <ul className="insurance__details--adventages">
                            {seguro.adventages.map( (adventage) => (
                                <li key={adventage.id} className={`insurance__item--id${adventage.id}`}>{`+ ${adventage.detail}`}</li>
                            ))}
                        </ul>
                    </div>
                </details>
            </div>
            <button className="insurance__button"><a target="_blank" href={`${seguro.link}`}> Ver Seguro</a></button>
        </div>
    </>
    )
}
