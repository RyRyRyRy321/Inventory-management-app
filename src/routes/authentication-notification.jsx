import { Container } from "react-bootstrap";

export function AuthNotification(){

    return(
        <Container className="text-center w-200" >
            <h2>Authentication is Required!</h2>

            <p>To access the inventory and view the products, you need to log in with your account. Logging in ensures a secure and personalized experience. If you already have an account, click on the "Login" button below to proceed to the login page.</p>

        </Container>
    )

}
