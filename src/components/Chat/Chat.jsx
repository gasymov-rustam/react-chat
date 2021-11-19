import { Button, Container, Grid, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import styles from "./Chat.module.css";
const Chat = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );

    const sendMessage = () => {
        console.log(value);
    };
    return (
        <Container>
            <Grid container className={styles.wrapper}>
                <div className={styles["chat-box"]}></div>
            </Grid>
            <Grid
                container
                direction={"column"}
                alignItems={"flex-end"}
                style={{ width: "80%" }}
            ></Grid>
            <TextField
                variant={"outlined"}
                fullWidth
                rowsMax={2}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button onClick={sendMessage} variant={"outlined"}>
                Send
            </Button>
        </Container>
    );
};

export default Chat;
