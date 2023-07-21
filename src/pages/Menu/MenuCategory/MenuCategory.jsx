import { Link } from "react-router-dom";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({img, title, item}) => {
    return (
        <div>
            {title && <MenuCover img={img} title={title}></MenuCover>}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
                {
                    item.map(item => <MenuItem
                    key={item._id}
                    item={item}>
                    </MenuItem>)
                }
            </div>
            <Link to="/order"><p className="text-center"><button className="mt-8 btn btn-outline border-0 border-b-4 mb-16">Order Your Favourite Food </button></p></Link>
        </div>
    );
};

export default MenuCategory;