import React from 'react';

const EditExpensePage = (props) => {

  console.log(props);

  return(
    <div>
      This is my edit expense component. {props.match.params.id}
    </div>
    );
}
export default EditExpensePage;