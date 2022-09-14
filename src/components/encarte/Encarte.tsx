import { Container,Row } from "reactstrap";
import CustomButton from "../customButton/CustomButton";


export default function Encarte() {
  return (
    <>
      <h3>
        Encartes
      </h3>
      <Container>
        <Row>
          <div className="left-side">
            <CustomButton buttonText={"Adicionar"}/>
          </div>
        </Row>
      </Container>
      </>
  )
}
