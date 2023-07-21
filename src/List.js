// Create List component

function List(props) {
  const listItem = props.item.map((items) => <li>{items}</li>);
  return (
    <>
      <ul>{listItem}</ul>
    </>
  );
}
export default List;
