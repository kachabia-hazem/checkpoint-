import ListGroup from 'react-bootstrap/ListGroup';
import BasicExample from './card';

function HorizontalExample() {
  return (
    <ListGroup horizontal style={{padding:"200px"}}>
      <BasicExample/>
      <BasicExample/>
      <BasicExample/>
    </ListGroup>
  );
}

export default HorizontalExample;