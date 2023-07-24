import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like/Like";
import Message from "./components/Message";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Option2 from "./components/Option2";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "bob" } });
  };

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["mushroom"],
  });

  const handlePizza = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  };

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 2 },
    ],
  });

  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 2 ? { ...item, quantity: 5 } : item
      ),
    });
  };

  return (
    <div>
      <Like onClick={() => console.log("liked")} />
      <Message />
      <Message />
      <Message />
      <br />
      <Button />
      <br />
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      <ExpandableText >llentesque. Eget
        velit aliquet sagittis id consectetur. Ornare suspendisse sed nisi lacus
        sed viverra tellus in hac. Magna fringilla urna porttitor rhoncus dolor
        purus non enim praesent. Laoreet suspendisse interdum consectetur libero
        id. Purus sit amet luctus venenatis. Massa massa ultricies mi quis
        hen
      </ExpandableText>
      <Option2 >Hey Will</Option2>
    </div>
  );
}

export default App;
