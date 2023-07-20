
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-16">
            <SectionTitle
             heading={"From our menu"}
             subHeading={'Check it out'}>
            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularMenu.map(item => <MenuItem
                    key={item._id}
                    item={item}>
                    </MenuItem>)
                }
                
            </div>
            <p className="text-center"><button className="mt-6 btn btn-outline border-0 border-b-4">View Full Menu</button></p>
        </section>
    );
};

export default PopularMenu;