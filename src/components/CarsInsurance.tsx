import { Seguro } from "../types"

type CarsInsuranceProps = {
    seguro: Seguro
}

export default function CarsInsurance({seguro}: CarsInsuranceProps) {
    return (
        <div>
            <section>
                <div>
                    <h2>SEGUROS DE COCHES</h2>
                </div>
            </section>
            <div className="insurance">
                <details>
                    <summary>
                    <img src={`../../public/img/${seguro.image}.png`} alt={`Logo de ${seguro.name}`}/>
                    </summary>
                    <h4>{seguro.description}</h4>
                    <ul>
                        {seguro.adventages.map( (adventage) => (
                            <li key={adventage.id} className={`insurance__item--id${adventage.id}`}>{adventage.detail}</li>
                        ))}
                    </ul>
                </details>
                <button><a target="_blank" href={`${seguro.link}`}> Ver Seguro</a></button>
            </div>
        </div>
    )
}
