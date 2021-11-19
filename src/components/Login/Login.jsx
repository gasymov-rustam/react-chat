import { Box, Button, Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import Load from "../Load/Load";
import styles from "./Login.module.css";
import firebase from "firebase";

const Login = () => {
  const { auth } = useContext(Context);
  const [loading] = useAuthState(auth);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    console.log(provider);
  };

  if (loading) return <Load />;
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justify={"center"}
        className={styles.wrapper}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems={"center"}
          direction={"column"}
          className={styles.form}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
