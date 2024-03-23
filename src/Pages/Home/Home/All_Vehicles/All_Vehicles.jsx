import { useEffect, useState } from "react";
import Car from "./Car";

const All_Vehicles = () => {
    const [cars, setCars] = useState([]);

    const url = 'data.json'

    const loadData = async() => {
        const res = await fetch(url)
        const data = await res.json()
        setCars(data);
    }

    useEffect(() => {
        loadData();
    },[])
    return (
        <div>
            <h1 className="text-7xl font-bold">Explore All Vehicles. {cars.length}</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-10">
                {
                    cars.map(car => <Car key={car.id} car={car}></Car>)
                }
            </div>
        </div>
    );
};

export default All_Vehicles;
