import WelcomeLotte from "../assets/welcome_lotte.json";
import { Player } from "@lottiefiles/react-lottie-player";

const HomePage = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Player
      autoplay
      loop
      src={WelcomeLotte}
      style={{ height: "500px", width: "800px" }}
    />
  </div>
);

export default HomePage;
