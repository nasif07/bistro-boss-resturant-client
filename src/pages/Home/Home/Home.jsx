import HelmetTitle from "../../../components/helmetTitle/HelmetTitle";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Featured from "../featured/Featured";
import PopularMenu from "../popularMenu/PopularMenu";
import Testomonials from "../testomonials/Testomonials";

const Home = () => {
    return (
        <div>
            <HelmetTitle>Home</HelmetTitle>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testomonials></Testomonials>
        </div>
    );
};

export default Home;