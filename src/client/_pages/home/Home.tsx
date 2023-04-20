import Card from "@/client/components/Card/Card";
import FrontContent from "./FrontContent/FrontContent";
import BackContent from "./BackContent/BackContent";

const Home = () => {
  return <Card frontContent={<FrontContent />} backContent={<BackContent />} />;
};

export default Home;
