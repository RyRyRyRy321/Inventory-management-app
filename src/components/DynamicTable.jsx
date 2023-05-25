import { Component } from "react";
import  TableEvents  from "../scripts/TableEvents"

function DynamicTable({data,tableConfig,idPropertyName}){


  const headers = TableEvents.getHeaders(tableConfig);
  const dynamicData = TableEvents.parseTableObject(data,tableConfig)
  
  
  return(
      <table className="table table-striped table-bordered">

      <thead className="text-center table-dark">
        <tr>
          <TableHeader headers = {headers}></TableHeader>
        </tr>
      </thead>

      <TableBody tableData = {dynamicData} idPropertyName={idPropertyName}></TableBody>
    </table>
  );
  
}


function TableHeader({headers}){
    return headers.map((currentValue) => renderHeaders(currentValue));
}


function TableBody({tableData, idPropertyName}){

  return (
    <tbody className="text-start align-middle">
      {tableData.map((currentValue) => iterateTableRow(currentValue,idPropertyName))} 
    </tbody>
  );


}

function iterateTableRow(rowData, idPropertyName){

  return (
    <tr key = {rowData[idPropertyName]}>
      {Object.keys(rowData).map((key) => {
        return <td key={key}>{rowData[key]}</td>
      })}
    </tr>
  )

}


function renderHeaders(header, index){
    return (
        <th key={index} scope = 'col'>{header}</th>
    );
}


export default DynamicTable;