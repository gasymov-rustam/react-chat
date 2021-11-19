import { Box, Button, Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import Load from "../Load/Load";
import styles from "./Login.module.css";
import firebase from "firebase";

const Login = () => {
    const { auth } = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const { user } = await auth.signInWithPopup(provider);
        console.log(user);
    };

    if (loading) return <Load />;
    return (
        <Container>
            <Grid container className={styles.wrapper}>
                <Grid className={styles.form}>
                    <Box p={5}>
                        <Button variant={"outlined"} onClick={login}>
                            Log in with Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
