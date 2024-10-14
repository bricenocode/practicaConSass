
export type Coches = {
    id:number,
    color: string,
    brand: string,
    model: string, 
    year:number,
    price: number,
    image: string,
    description: string,
    doors: number,
    horsepower: number,
    transmission: string,
    engine: string,
    fuelType: string,
    creator: string
}

export type Seguro = {
    id: number,
    name: string,
    link: string,
    image: string,
    description: string, // Corregido "desciption"
    adventages: {
        id: number,
        detail: string
    }[]
}