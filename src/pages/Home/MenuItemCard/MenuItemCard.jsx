import { useEffect, useState } from "react";
import CardDisplay from "./CardDisplay";


const MenuItemCard = () => {
    const [menuCards, setMenuCard] = useState([])
    useEffect(()=> {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => setMenuCard(data))
    },[])
    return (
        <>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {
                menuCards.slice(0,6).map(menuCard => 
                <CardDisplay
                key={menuCard._id}
                menuCard={menuCard}>
                </CardDisplay>)
            }
            
        </div>
        <p className="text-center"><button className="mt-4 md:mt-12 mb-24 btn btn-outline border-0 border-b-4">Order Your Food</button></p>
        </>
    );
};

export default MenuItemCard;