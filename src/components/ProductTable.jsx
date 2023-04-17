import { useState, useEffect } from 'react';
import "../styles/customer_table.css"

function ProductTable({productData}){

  const [currentProductData, setCurrentProductData] = useState(productData);

  useEffect(() => {
    setCurrentProductData(productData);
  }, [productData])


    const headers = ["Product Id",
        "Product name",
        "Category",
        "Product description",
        "Quantity",
        "Alert quantity",
        "Product price",
        "Unit price",
        "Discount"
    ];

  return (

      <table className="product-table table table-striped table-bordered">

        <thead className="text-center table-dark">
          <tr>
            <TableHeader headers = {headers}></TableHeader>
            <TableActionHeader></TableActionHeader>
          </tr>
        </thead>

        <tbody className="text-start align-middle">
          <TableData data={currentProductData}></TableData>
        </tbody>
      </table>
    
  );

}

function TableHeader({headers}){
  return headers.map((currentValue, index) => renderHeaders(currentValue,index));
}

function TableData({data}){
  return data.map((item) => displayProductRow(item))
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
    <>
      <tr>

        {renderEachTableDataPropertyInObject(productItem)}
          


        <ProductActionColumn></ProductActionColumn>
      </tr>
    </>
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

function renderEachTableDataPropertyInObject(product){
  return Object.keys(product).map((key) => {
    return renderTableDataPropertyValue(product[key])
  })
}

function renderTableDataPropertyValue(productData){
    return (
        <td>{productData}</td>
    );
}

const tableConfig = [
  {
    header: 'Product Id',
    accessor: 'productId'
  },
  {
    header: 'Product name',
    accessor: 'productName'
  }

]



export default ProductTable;