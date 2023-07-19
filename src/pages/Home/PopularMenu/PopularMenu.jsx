import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then((res) => res.json())
        .then((data) => {
            const popularMenu = data.filter(item => item.category === 'popular');
            setMenu(popularMenu);
        })
    },[])
    return (
        <section className="mb-16">
            <SectionTitle
             heading={"From our menu"}
             subHeading={'Check it out'}>
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    menu.map(item => <MenuItem
                    key={item._id}
                    item={item}>
                    </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;