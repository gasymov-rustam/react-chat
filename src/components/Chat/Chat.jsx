import { Avatar, Button, Container, Grid, TextField } from "@material-ui/core";
import { useContext, useState } from "react";
import { Context } from "../..";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import styles from "./Chat.module.css";
import Load from "../Load/Load";

const Chat = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );

    const sendMessage = async () => {
        firestore.collection("messages").add({
            id: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setValue("");
    };

    if (loading) {
        return <Load />;
    }
    return (
        <Container>
            <Grid container className={styles.wrapper}>
                <div className={styles["chat-box"]}>
                    {messages.map((message) => (
                        <div
                            style={{
                                margin: 10,
                                border:
                                    user.id === message.id ? "2px solid green" : "2px dashed red", //проверяем если это сообщение того пользователя который сейчас за компом то есть его сообщение то выкрашиваем рамку в один цвет если нет то в другой
                                marginLeft: user.uid !== message.uid ? "auto" : "10px", // так же размещаем сообщение на кэране свое с одной стороны чужое с другой
                                width: "fit-content",
                                padding: 5,
                            }}
                        >
                            <Grid container>
                                <Avatar src={message.photoURL} />
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    ))}
                </div>
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
