import axios from "axios";
import "../App.css";

const SERVER_PORT = 4000;

const Home = () => {
  const hostedRedirect = async () => {
    try {
      const response = await axios.get(
        `http://localhost:${SERVER_PORT}/payment-session`,
      );
      const redirectUrl = response.data;
      window.location.replace(redirectUrl);
    } catch (error) {
      console.error("Error starting payment session:", error);
      alert(`There was an error starting the payment session: ${error}`);
    }
  };

  return (
    <div className="checkout">
      <div className="group">
        <h1>Order Summary</h1>
        <img src="/sock.png" alt="Sock Clothing" />
        <div className="description">
          <h3>Order total: $17.50</h3>
        </div>
      </div>
      <button className="button" onClick={hostedRedirect}>
        Buy Now
      </button>
    </div>
  );
};

export default Home;
