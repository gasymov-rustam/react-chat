import styles from "./AppRouter.module.css";
import { privateRoutes, publicRoutes } from "../../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../..";
const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    return user ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} exact={true} />
            ))}
            <Redirect to={CHAT_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} component={Component} />
            ))}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
