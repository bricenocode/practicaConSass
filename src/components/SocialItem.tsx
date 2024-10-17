type SocailItemProps = {
    imagen: string
}


export default function SocailItem({imagen} :SocailItemProps){

    return(

        <>
            <li className="footer__container__item"><img className="container__item--img" src={`/img/${imagen}.png` }alt="" /></li>
        </>
    )
}