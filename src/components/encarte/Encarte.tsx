import { ReactElement,MouseEventHandler } from 'react'
import { Row, Col } from "reactstrap";
import { TbEdit } from 'react-icons/tb';
import { BsTrash } from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi';
import CustomButton from "../customButton/CustomButton";
import CustomCard from "../customCard/CustomCard";
import TipoDeEncarte from "./encarteComponents/TipoDeEncarte";
import IconContainer from './encarteComponents/IconContainer';

 export type Icon = {
  text: string;
  icon: ReactElement;
  onClick?:MouseEventHandler<MouseEvent>
};

export default function Encarte() {
 
  const iconsList: Icon[] = [
    {
      text: 'editar',
      icon:<TbEdit size={20} className="icon-action"/>
    },
    {
      text: 'exculir',
      icon: <BsTrash size={20} className="icon-action"/>
    },
    {
      text: 'exportar em .csv',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
    {
      text: 'exportar em .pdf',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
  ]
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
      <h6 className="mt-5">
        ENCARTES POR SAZONALIDADE
      </h6>
      <Row>
        <Col lg={6}>
          <Row>
            {
              iconsList.map((item) => {
                return (
                  <IconContainer text={item.text} icon={item.icon} />
                )
              })
            }
          </Row>
        </Col>
        <Col>
        </Col>
       
      </Row>
      </>
  )
}
