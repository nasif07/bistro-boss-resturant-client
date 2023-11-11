import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featuredItem from "../../../assets/featured.jpg"
import "./Features.css"

const Featured = () => {
    return (
        <div className="features-item bg-fixed my-20">
            <div className="pt-8" style={{backgroundColor: "rgba(21, 21, 21, 0.70)"}} >
            <SectionTitle
            subheading={"Check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            </div>
            <div style={{backgroundColor: "rgba(21, 21, 21, 0.70)"}} className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredItem} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ad tempore magni quod quisquam dolores debitis itaque excepturi ipsum sit possimus voluptatibus atque vitae ex necessitatibus natus, modi iure praesentium. Similique dolor minima blanditiis quae? Explicabo ipsa expedita repellat unde dolorem ad itaque incidunt ex! Ipsum eveniet assumenda expedita doloribus.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white mt-6">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;