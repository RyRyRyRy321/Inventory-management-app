import { Stack } from "react-bootstrap";
import { useRouteError } from "react-router-dom";


function ProductErrorPage(){

    const error = useRouteError();

    return (
        <>
            <Stack className="align-items-center">
                <h2>Table is not available</h2>

                <p>{error.message}</p>
            </Stack>
   
        </>
    );
}

export default ProductErrorPage;