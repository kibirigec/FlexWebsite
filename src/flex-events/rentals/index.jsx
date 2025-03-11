import { useParams } from "react-router-dom";

// Import all rental components
import RentalOne from "./1";
import RentalTwo from "./2";
import RentalThree from "./3";
import RentalFour from "./4";
import RentalFive from "./5";
import RentalSix from "./6";
import RentalSeven from "./7";
import RentalEight from "./8";
import RentalNine from "./9";
import RentalTen from "./10";


const rentalComponents = {
  "1": RentalOne,
  "2": RentalTwo,
  "3": RentalThree,
  "4": RentalFour,
  "5": RentalFive,
  "6": RentalSix,
  "7": RentalSeven,
  "8": RentalEight,
  "9": RentalNine,
  "10": RentalTen,

  // Continue adding up to "10"
};

const RentalPage = () => {
  const { id } = useParams(); // Get rental ID from URL
  const RentalComponent = rentalComponents[id]; // Get the corresponding component

  // If rental ID is invalid, show a 404 message
  if (!RentalComponent) {
    return <h1>Rental Not Found</h1>;
  }

  return <RentalComponent />;
};

export default RentalPage;
