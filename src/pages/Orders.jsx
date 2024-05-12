import React from "react";
import axios from "axios";
import Card from "../components/Card/index";
import AppContext from "../context";

function Orders() {
  const { onAddToFavorite, addToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://662b9d6cde35f91de158e41b.mockapi.io/orders"
        );
        // console.log(data.map((obj) => obj.items.flat()));
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Error when requesting orders');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between  mb-40">
        <h1>My orders</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
