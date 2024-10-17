import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

export default function Galery(){

    const images = [
        {
            original: "https://www.hyundai.com/eu/dam/sites/global/models/nx4-/visualizer-assets/visualizer-ICE/Hyundai_Tucson-Basis_B6C_N9300_Cam04.jpg",
            thumbnail: "https://www.hyundai.com/eu/dam/sites/global/models/nx4-/visualizer-assets/visualizer-ICE/Hyundai_Tucson-Basis_B6C_N9300_Cam04.jpg",
        },
        {
            original: "https://i0.wp.com/www.negociosmagazine.com/wp-content/uploads/2019/01/Kona_Hyundai_2019_1.jpg",
            thumbnail: "https://i0.wp.com/www.negociosmagazine.com/wp-content/uploads/2019/01/Kona_Hyundai_2019_1.jpg",
        },
        {
            original: "https://noticias.coches.com/wp-content/uploads/2009/08/Volkswagen-Fox-205-12.jpg",
            thumbnail: "https://noticias.coches.com/wp-content/uploads/2009/08/Volkswagen-Fox-205-12.jpg",
        },
        {
            original: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/03/522551-chevrolet-camaro-zl1-2016.jpg?tf=3840x",
            thumbnail: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/03/522551-chevrolet-camaro-zl1-2016.jpg?tf=3840x",
        },
        {
            original: "https://www.autonocion.com/wp-content/uploads/2024/08/Nissan-Altima-2025-0.jpg",
            thumbnail: "https://www.autonocion.com/wp-content/uploads/2024/08/Nissan-Altima-2025-0.jpg",
        },
        {
            original: "https://content.media.ccdn.es/api/v1/cnet-media/images/00/003dcb9d-29c9-4172-9670-a1b6de1afcdd?rule=articleBodyImage",
            thumbnail: "https://content.media.ccdn.es/api/v1/cnet-media/images/00/003dcb9d-29c9-4172-9670-a1b6de1afcdd?rule=articleBodyImage",
        },
        ];
    return(
        <section id='galery' className='galery'>
            <div>
                <h2>Galeria de Fotos</h2>
                <div className="galery">
                    <ImageGallery items={images}/>
                </div>
            </div>
        </section>
    )
}