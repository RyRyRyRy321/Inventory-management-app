import ProductTable from "../components/ProductTable";


export default function Product(){
    return (
        <>
            <h1>Product table</h1>

            <hr></hr>

            <p>
            This is a dynamic data table component that connects the backend and frontend of a web application using RESTful APIs. It retrieves data from the server and presents it in a structured tabular format, allowing users to easily view and interact with the information.
            </p>

            <ProductTable></ProductTable>
        </>
    );
}