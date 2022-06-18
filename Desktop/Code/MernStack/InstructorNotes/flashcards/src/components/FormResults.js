const FormResults = (props) => {
  return (
    <div>
      <h4>Form Data</h4>
      <p>Topic: {props.topic}</p>
      <p>Front: {props.front}</p>
      <p>Back: {props.back}</p>
    </div>
  );
};

export default FormResults;
