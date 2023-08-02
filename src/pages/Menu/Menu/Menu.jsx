import { Helmet } from "react-helmet-async";
import MenuCover from "../../Shared/MenuCover/MenuCover";
import coverImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <MenuCover img={coverImg} title={"OUR MENU"}></MenuCover>
      {/* offered item */}
      <SectionTitle subHeading={"dont't miss"} heading={"today's offer"}></SectionTitle>
      <MenuCategory item={offered}></MenuCategory>
      {/* dessert item */}
      <MenuCategory item={dessert} title="dessert" img={dessertImg}></MenuCategory>
      {/* pizza item */}
      <MenuCategory item={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* salad item */}
      <MenuCategory item={salad} title={"salad"} img={saladImg}></MenuCategory>
      {/* soup item */}
      <MenuCategory item={soup} title={"soup"} img={soupImg}></MenuCategory>
      
    </div>
  );
};

export default Menu;
