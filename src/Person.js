//Create react component
function Person(props) {
  return (
    <>
      <p>
        Name : {props.personName} and age : {props.personAge}
      </p>
    </>
  );
}
export default Person;
