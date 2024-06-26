import { useLoaderData } from "react-router-dom";
import Banner from "../Componentes/Home/Banner";
import Products from "../Componentes/Home/Products";
import EventManagement from "../Componentes/Home/EventManagement";
import Spekar from "./Spekar";
import EventGallery from "./EventGellary";
import Review from "./Review";
import Contact from "./Contact";

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Products data={data}></Products>
            <EventManagement></EventManagement>
            <EventGallery></EventGallery>
            <Review></Review>
            <Spekar></Spekar>
            <Contact></Contact>
        </div>
    );
};

export default Home;