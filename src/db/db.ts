import {Coches, Seguro} from '../types/index'

export const coches: Coches[] = [
    {
        "id": 1,
        "color":"white",
        "brand": "Toyota",
        "model": "Corolla",
        "year": 2022,
        "price": 18000,
        "image": "corolla",
        "description": "El Toyota Corolla es uno de los automóviles más vendidos de todos los tiempos. Conocido por su fiabilidad, eficiencia de combustible y asequibilidad, es una opción popular para familias y personas que se desplazan a diario. El modelo 2022 continúa este legado con características avanzadas de seguridad y una experiencia de conducción suave.",
        "doors": 4,
        "horsepower": 139,
        "transmission": "automático",
        "engine": "2.0L 4 cilindros",
        "fuelType": "gasolina",
        "creator": "Tatsuo Hasegawa"
    },
    {
        "id": 2,
        "color":"white",
        "brand": "Honda",
        "model": "Civic",
        "year": 2023,
        "price": 22000,
        "image": "hondaCivic",
        "description": "El Honda Civic es un automóvil compacto que combina un diseño deportivo con practicidad. A lo largo de los años, ha ganado reputación por ser divertido de conducir sin perder su asequibilidad. El Civic 2023 presenta un rediseño elegante, tecnología moderna y una mejor eficiencia de combustible.",
        "doors": 4,
        "horsepower": 158,
        "transmission": "manual",
        "engine": "2.0L 4 cilindros",
        "fuelType": "gasolina",
        "creator": "Yoshio Nakamura"
    },
    {
        "id": 3,
        "color":"black",
        "brand": "Ford",
        "model": "Mustang",
        "year": 2021,
        "price": 35000,
        "image": "fordMustang",
        "description": "El Ford Mustang es un icónico automóvil deportivo estadounidense que debutó en 1964. Conocido por su rendimiento poderoso y diseño audaz, se ha convertido en un símbolo de la cultura automovilística de Estados Unidos. El Mustang 2021 ofrece un rendimiento emocionante con un motor V8 y dinámicas de conducción avanzadas.",
        "doors": 2,
        "horsepower": 450,
        "transmission": "manual",
        "engine": "5.0L V8",
        "fuelType": "gasolina",
        "creator": "Lee Iacocca"
    },
    {
        "id": 4,
        "color":"red",
        "brand": "Tesla",
        "model": "Model S",
        "year": 2023,
        "price": 80000,
        "image": "teslaModelS",
        "description": "El Tesla Model S es un sedán de lujo totalmente eléctrico que revolucionó el mercado de vehículos eléctricos. Desde su lanzamiento, ha establecido el estándar para el rendimiento eléctrico, con una aceleración increíble y una batería de largo alcance. El modelo 2023 incluye las últimas funciones de autopiloto y tecnología interior superior.",
        "doors": 4,
        "horsepower": 1020,
        "transmission": "automático",
        "engine": "Motor eléctrico dual",
        "fuelType": "eléctrico",
        "creator": "Elon Musk"
    },
    {
        "id": 5,
        "color":"blue",
        "brand": "BMW",
        "model": "Series 3",
        "year": 2022,
        "price": 45000,
        "image": "bmwSerie3",
        "description": "El BMW Serie 3 es un sedán deportivo que ofrece el equilibrio perfecto entre rendimiento y lujo. Ha sido durante mucho tiempo un referente en su clase por su dinámica de conducción, ofreciendo tanto confort como agilidad. El modelo 2022 incluye un sistema de infoentretenimiento avanzado y características de asistencia al conductor.",
        "doors": 4,
        "horsepower": 255,
        "transmission": "automático",
        "engine": "2.0L 4 cilindros turbo",
        "fuelType": "gasolina",
        "creator": "Claus Luthe"
    },
    {
        "id": 6,
        "color":"grey",
        "brand": "Audi",
        "model": "A4",
        "year": 2023,
        "price": 40000,
        "image": "audiA4",
        "description": "El Audi A4 es un sedán compacto premium que combina un diseño sofisticado con tecnología de vanguardia. Conocido por su conducción suave y su interior lujoso, el A4 ha sido una opción popular entre los profesionales. El modelo 2023 incluye funciones avanzadas de conectividad y un diseño exterior renovado.",
        "doors": 4,
        "horsepower": 201,
        "transmission": "automático",
        "engine": "2.0L 4 cilindros turbo",
        "fuelType": "gasolina",
        "creator": "Peter Schreyer"
    },
    {
        "id": 7,
        "color":"blue",
        "brand": "Mercedes-Benz",
        "model": "Class C",
        "year": 2022,
        "price": 50000,
        "image": "mercedezClaseC",
        "description": "El Mercedes-Benz Clase C es un sedán de lujo que ha establecido el estándar para la refinación y el confort. Ofrece una experiencia de conducción lujosa con una gama de potentes opciones de motor, y ha sido un pilar en la línea de Mercedes. El modelo 2022 trae tecnología mejorada y actualizaciones de diseño sofisticado.",
        "doors": 4,
        "horsepower": 255,
        "transmission": "automático",
        "engine": "2.0L 4 cilindros turbo",
        "fuelType": "gasolina",
        "creator": "Bruno Sacco"
    },
    {
        "id": 8,
        "color":"yellow",
        "brand": "Volkswagen",
        "model": "Golf",
        "year": 2021,
        "price": 25000,
        "image": "volkswagenGolf",
        "description": "El Volkswagen Golf es un hatchback compacto que ha ganado reputación por ser práctico, divertido de conducir y económico. Desde su introducción en 1974, ha sido un favorito en Europa y en todo el mundo. El Golf 2021 ofrece tecnología avanzada y una experiencia de conducción bien equilibrada.",
        "doors": 4,
        "horsepower": 147,
        "transmission": "manual",
        "engine": "1.4L 4 cilindros turbo",
        "fuelType": "gasolina",
        "creator": "Giorgetto Giugiaro"
    },
    {
        "id": 9,
        "color":"grey",
        "brand": "Chevrolet",
        "model": "Camaro",
        "year": 2020,
        "price": 38000,
        "image": "chevroletCamaro",
        "description": "El Chevrolet Camaro es un clásico muscle car americano, rivalizando con el Ford Mustang durante décadas. Conocido por su estilo agresivo y sus potentes opciones de motor, el Camaro ofrece un rendimiento sobresaliente en la carretera. El modelo 2020 incluye características de rendimiento avanzadas y un interior modernizado.",
        "doors": 2,
        "horsepower": 275,
        "transmission": "manual",
        "engine": "2.0L 4 cilindros turbo",
        "fuelType": "gasolina",
        "creator": "Henry Haga"
    },
    {
        "id": 10,
        "color":"blue",
        "brand": "Nissan",
        "model": "Altima",
        "year": 2023,
        "price": 24000,
        "image": "nissanAltima",
        "description": "El Nissan Altima es un sedán mediano conocido por su comodidad, seguridad y fiabilidad. Ofrece una excelente eficiencia de combustible y una gama de características modernas, convirtiéndolo en una opción popular para familias y conductores cotidianos. El Altima 2023 incluye opciones de tracción en las cuatro ruedas y tecnologías avanzadas de seguridad.",
        "doors": 4,
        "horsepower": 188,
        "transmission": "automático",
        "engine": "2.5L 4 cilindros",
        "fuelType": "gasolina",
        "creator": "Shiro Nakamura"
    },
    {
        "id": 11,
        "color": "green",
        "brand": "Hyundai",
        "model": "Kona",
        "year": 2019,
        "price": 22000,
        "image": "hyundaiKona",
        "description": "El Hyundai Kona 2019 es un SUV subcompacto que ofrece un diseño elegante y moderno con un manejo ágil. Está disponible con tracción en las cuatro ruedas y tiene varias opciones de motorización, incluidas versiones eléctricas. Es perfecto para aquellos que buscan un vehículo pequeño con las comodidades de un SUV.",
        "doors": 4,
        "horsepower": 147,
        "transmission": "automático",
        "engine": "2.0L 4 cilindros",
        "fuelType": "gasolina",
        "creator": "Luc Donckerwolke"
    },
    {
        "id": 12,
        "color": "orange",
        "brand": "Hyundai",
        "model": "Tucson",
        "year": 2020,
        "price": 28000,
        "image": "hyundaiTucson",
        "description": "El Hyundai Tucson 2020 es un SUV compacto popular por su fiabilidad y comodidad. Ofrece un interior amplio, un diseño exterior moderno y varias características de tecnología avanzada y seguridad. Es ideal para familias o conductores que buscan un vehículo confiable y práctico.",
        "doors": 4,
        "horsepower": 181,
        "transmission": "automático",
        "engine": "2.4L 4 cilindros",
        "fuelType": "gasolina",
        "creator": "Peter Schreyer"
    }
];

export const seguros: Seguro[] = [
    {   
        id:1,
        name: 'Mutua',
        link: 'https://www.mutua.es/seguros-coche/calcular/?dis=dis:redes:auto2024:mejorprecio:coche:adevinta:cochenet:ros:pp:l:mejorprecio:marketplace:pc:noneroscotizador&dclid=COz95PGzi4kDFZBcpAQdZHot7A',
        image: 'mutuaLogo',
        description: 'Mutua es la aseguradora líder en experiencia de cliente en España. Los números les avalan con 90 años de experiencia y 13 millones de asegurados.',
        adventages: [
            {   
                id:1,
                detail:'El taller que tu elijas: Más de 7.000 talleres concertados en España',
            },
            {   
                id:2,
                detail:'Piezas originales para tu coche en todas las reparaciones',
            },
            {   
                id:3,
                detail:'Asistencia en viaje: Si la grúa tarda más de 1 hora, te dan 100 €',
            },
            {   
                id:4,
                detail:'Llevan tu coche a pasar la ITV',
            },
            {   
                id:5,
                detail:'Facilidades de pago. Paga en 3 veces sin intereses',
            },
            {   
                id:6,
                detail:'Descuentos con tu tarjeta SOY',
            }
        ]
    },
    {   
        id:2,
        name: 'Mapfre',
        link: 'https://segurosdecoche.mapfre.es/?origen=PAdev&utm_campaign=mapfrees_acquisition_prospecting&utm_source=coches.net&utm_medium=marketplace&utm_term=coche&utm_content=calcula-emailing&dclid=CKmJmMK_jokDFdVmHQkdNb4eCw',
        image: 'mapfreLogo',
        description: 'Antes de elegir tu Seguro de coche, piensa en quién te ofrece un plan de pago a 12 meses. Seguros MAPFRE. El seguro que elegirías cuando más lo necesitas. Contrata ahora tu seguro con MAPFRE y disfruta de asistencia en KM0, plan de pago a 12 meses. Además, garantía de por vida en reparaciones de chapa y pintura en nuestros Centros de Servicio ¡Calcula tu precio!',
        adventages: [
            {   
                id:1,
                detail:'Asistencia en carretera desde el km.0.',
            },
            {   
                id:2,
                detail:' Ahora con el plan de pagos puedes pagar tu seguro en 12 meses.',
            },
            {   
                id:3,
                detail:'Hasta 3 siniestros sin subida de precio.',
            },
            {   
                id:4,
                detail:'Reparación en Centros de Servicio y Talleres MAPFRE.',
            },
            {   
                id:5,
                detail:'Repuestos originales en caso de robo, incendio o daño.',
            },
            {   
                id:6,
                detail:'Desplazamiento del taller al domicilio.',
            }
        ]
    },
    {   
        id:3,
        name: 'Linea Directa',
        link: 'https://www.lineadirecta.com/presupuesto/presupuesto_coches.init.faces?from=B270011&idServicio=&utm_source=coches.net&utm_medium=dis&utm_term=N491203.149771COCHES.NET&utm_content=bnr_1x1_coche_enero-marketplace_01-24&utm_campaign=linea-directa_fijos_ao_02-01-2024&dclid=CPK1nuS_jokDFbFBpAQdUuUTIQ',
        image: 'lineaDirectaLogo',
        description: 'Pagues lo que pagues, llévate una bajada en tu seguro de coche con Línea Directa.',
        adventages: [
            {   
                id:1,
                detail:'Vehículo de sustitución también por avería',
            },
            {   
                id:2,
                detail:'Servicio de recogida y entrega del vehículo a reparar',
            },
            {   
                id:3,
                detail:'Servicio de IT',
            },
            {   
                id:4,
                detail:'Asistencia en viaje desde KM. 0',
            },
            {   
                id:5,
                detail:'Sustitución y cambio de neumáticos',
            }
        ]
    }
]
