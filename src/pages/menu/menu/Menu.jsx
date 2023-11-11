import HelmetTitle from "../../../components/helmetTitle/HelmetTitle";
import Cover from "../../../routes/shared/cover/Cover";
import cover from "../../../assets/menu/banner3.jpg"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuCategory from "../menuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    return (
        <div>
            <HelmetTitle>Menu</HelmetTitle>
            <Cover img={cover} title={"our menu"}></Cover>
            {/* main cover */}
            <SectionTitle subheading={"Don't miss"} heading={"today's offer"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertImage}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImage}></MenuCategory>
            <MenuCategory items={salad} title="salad" coverImg={saladImage}></MenuCategory>
            <MenuCategory items={soup} title="soup" coverImg={soupImage}></MenuCategory>
        </div>
    );
};

export default Menu;