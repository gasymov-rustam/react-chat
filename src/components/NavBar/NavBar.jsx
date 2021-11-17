import styles from "./NavBar.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../../utils/consts";
const NavBar = () => {
    const user = false;
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container>
                    {user ? (
                        <Button variant={"outlined"}>Sign Up</Button>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={"outlined"}>Login</Button>
                        </NavLink>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
