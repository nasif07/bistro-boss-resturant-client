import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import MenuItem from "../../../routes/shared/menuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading={"From Our Menu"}
                subheading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {menu.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4  mt-6">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;