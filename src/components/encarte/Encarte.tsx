import { Row } from "reactstrap";
import CustomButton from "../customButton/CustomButton";
import CustomCard from "../customCard/CustomCard";
import TipoDeEncarte from "./encarteComponents/TipoDeEncarte";


export default function Encarte() {
  return (
    <>
      <h3>
        Encartes
      </h3>
      <Row>
        <div className="left-side">
          <CustomButton buttonText={"Adicionar"}/>
        </div>
      </Row>
      <h6>
        TIPO DE ENCARTE
      </h6>
         <CustomCard doesHavePadding={false}>
          <TipoDeEncarte/>
        </CustomCard>
      </>
  )
}
