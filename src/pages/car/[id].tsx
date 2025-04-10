// src/pages/car/[id].tsx
import { NextPage } from "next";
import { useRouter } from "next/router";

const CarPage: NextPage = () => {
  const router = useRouter();

  const { asPath, pathname } = useRouter();
  console.log(asPath, pathname);

  return <div>Car page:</div>;
};

export default CarPage;
