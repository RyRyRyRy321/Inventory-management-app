import { useState, useEffect } from 'react';
import "../styles/customer_table.css"
import TableEvents from '../scripts/TableEvents'

function ProductTable({productData, tableConfig}){

  var parseData = TableEvents.parseTableObject(productData,tableConfig);

  const [currentProductData, setCurrentProductData] = useState(parseData);

  const headers = TableEvents.getHeaders(tableConfig)
  const accessors = TableEvents.getAccessors(tableConfig)

  useEffect(() => {
    setCurrentProductData(parseData);
  }, [parseData])
  
  return (

      <table className="product-table table table-striped table-bordered">

        <thead className="text-center table-dark">
          <tr>
            <TableHeader headers = {headers}></TableHeader>
          </tr>
        </thead>

        <tbody className="text-start align-middle">
          <TableData data={currentProductData} accessors={accessors}></TableData>
        </tbody>
      </table>
    
  );

}


function TableHeader({headers}){
  return headers.map((currentValue, index) => renderHeaders(currentValue,index));
}

function TableData({data,accessors}){
    return data.map((item) => displayProductRow(item, accessors))
}

function TableActionHeader(){
  return <th scope = 'col'>Actions</th>
}

function displayProductRow(item){

  if (item === null){
      return (<LoadingComponent></LoadingComponent>);
  }

  return(
    <ProductRow key = {item.productId} productItem = {item}></ProductRow>
  );
  
}

function ProductRow({productItem}){

  return(
    <tr>

      {renderEachTableDataPropertyInObject(productItem)}
    </tr>
  );

}

function ProductActionColumn(){

    const handleShowUpdateModal = (event) => {
        setShow(true);
    };

    return (
        <td>
            <button className='btn btn-outline-primary m-1'>Update</button>
            <button className='btn btn-outline-danger m-1'>Delete</button>
        </td>
    );
}

function LoadingComponent(props){
  return (
    <p>Loading...</p>
  );
}

function renderHeaders(header, index){
    return (
        <th key={index} scope = 'col'>{header}</th>
    );
}

function renderTableDataPropertyValue(data){
    return (
        <td>{data}</td>
    );
}


export default ProductTable;