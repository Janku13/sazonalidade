import { ReactElement,MouseEventHandler } from 'react'
import { Row, Col } from "reactstrap";
import { TbEdit } from 'react-icons/tb';
import { BsTrash } from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi';
import CustomButton from "../customButton/CustomButton";
import CustomCard from "../customCard/CustomCard";
import TipoDeEncarte from "./encarteComponents/TipoDeEncarte";
import IconContainer from './encarteComponents/IconContainer';
import CustomTable from '../customTable/CustomTable';

 export type Icon = {
  text: string;
  icon: ReactElement;
  onClick?:MouseEventHandler<MouseEvent>
};

export default function Encarte() {
  const produtosIcons: Icon[] = [
    {
      text: 'exportar em .csv',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
    {
      text: 'exportar em .pdf',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
  ]
  const sazonalidadeIconsList: Icon[] = [
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
      <Col lg={6}>
        <Row>
          {
            sazonalidadeIconsList.map((item) => {
                return (
                  <IconContainer text={item.text} icon={item.icon} />
                )
            })
          }
        </Row>
      </Col>
      <CustomCard doesHavePadding={true}>
        <CustomTable/>
      </CustomCard>
      <h6 className="mt-5">
        LIST DE PRODUTOS
        SAZONALIDADE - ARRAIÁ
      </h6>
        <Col lg={6}>
          <Row>
            {
              produtosIcons.map((item) => {
                return (
                  <IconContainer text={item.text} icon={item.icon} />
                )
              })
            }
          </Row>
      </Col>  
      <CustomCard doesHavePadding={true}>
        <CustomTable/>
      </CustomCard>
      </>
  )
}
