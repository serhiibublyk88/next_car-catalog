import { FC } from "react";
import Layout from "@/components/layout/Layout";
import { ICarData } from "@/interfaces/car.interface";
import CarItem from "@/components/ui/car/CarItem";

const Home: FC<ICarData> = ({cars}) => {
  return (
    <Layout
      title="Home"
      description="We love our customers? we like to sale cars"
    >
      <div style={{ textAlign: "center" }}>Home</div>
      {cars.length ? cars.map(car =><CarItem key={car.id} car={car}/>): <div>Cars not found</div>}
    </Layout>
  );
};

export default Home;
