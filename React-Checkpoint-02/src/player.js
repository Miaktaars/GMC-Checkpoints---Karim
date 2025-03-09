import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import top10Players from './players';

export default function Player({ name="None", team="None", nationality="None", jerseyNumber="None", age="None", imageURL="None" }) {
    return (


        <Card style={{ width: '18rem', marginBottom: "15px" }} key={name}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Text>Team: {team}</Card.Text>
                <Card.Text>Nationality: {nationality}</Card.Text>
                <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
                <Card.Text>Age: {age}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>


    );
}
