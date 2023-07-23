function ListGroup() {
  let items = ["New York", "Paris", "San Fran", "Tokyo", "London"];

  // items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(e) => console.log(e)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
