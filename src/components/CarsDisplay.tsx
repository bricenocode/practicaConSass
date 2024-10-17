import { Coches } from "../types"
import { XCircleIcon } from "@heroicons/react/24/outline";

import { useRef, useState } from "react"
import CarDetail from "./CarDetail";

type CarsDisplayProps = {
    coche: Coches
}

export default function CarsDisplay({coche}:CarsDisplayProps) {
    
    const dialogRef = useRef<HTMLDialogElement | null>(null);

    const [carId, setCarId] = useState<number>();

    function handleClick(e:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const button = e.target as HTMLButtonElement;
        setCarId(+button.id)
        dialogRef.current?.showModal()
    }

    function closeModal(){
        dialogRef.current?.close();
        setCarId(0)
    }
    return (
        <>
        <div className={`container__item ${coche.color}`}>
            <img className="container__item--image" src={`img/${coche.image}.png`} alt="" />
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
                    <button 
                    id={`${coche.id}`} 
                    className="container__card--button"
                        onClick={ handleClick}
                    >
                        Más Info
                    </button>
                </div>
            </div>
        </div>
            <dialog className="modal" ref={dialogRef}>
                <CarDetail
                key={carId}
                coche = {coche}
                />
                <div className="modal--close">
                    <button
                        onClick={closeModal}
                    >
                        <XCircleIcon className="icon"/>
                    </button>
                </div>
            </dialog>
    </>
    )
}
