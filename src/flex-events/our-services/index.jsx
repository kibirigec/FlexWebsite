import { useParams } from "react-router-dom";

// Import all rental components
import ServiceOne from "./1";
import ServiceTwo from "./2";
import ServiceThree from "./3";
import ServiceFour from "./4";
import ServiceFive from "./5";
import ServiceSix from "./6"


const ServiceComponents = {
  "1": ServiceOne,
  "2": ServiceTwo,
  "3": ServiceThree,
  "4": ServiceFour,
  "5": ServiceFive,
  "6": ServiceSix,


  // Continue adding up to "10"
};

const ServicePage = () => {
  const { id } = useParams(); // Get Service ID from URL
  const ServiceComponent = ServiceComponents[id]; // Get the corresponding component

  // If Service ID is invalid, show a 404 message
  if (!ServiceComponent) {
    return <h1>Service Not Found</h1>;
  }

  return <ServiceComponent />;
};

export default ServicePage;
