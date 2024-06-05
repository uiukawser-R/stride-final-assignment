import { useLoaderData } from "react-router-dom";
import Banner from "../Componentes/Home/Banner";
import Products from "../Componentes/Home/Products";
import EventManagement from "../Componentes/Home/EventManagement";

const Home = () => {
    const data=useLoaderData();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Products data={data}></Products>
            <EventManagement></EventManagement>
        </div>
    );
};

export default Home;