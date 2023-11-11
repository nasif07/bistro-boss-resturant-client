import Cover from "../../../routes/shared/cover/Cover";
import MenuItem from "../../../routes/shared/menuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {items.map(item => <MenuItem item={item} key={item._id}></MenuItem>)}
            </div>
        </div>
    );
};

export default MenuCategory;