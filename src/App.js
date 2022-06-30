import {useRoutes} from "react-router";
import routes from "./routes";
import {ThemeProvider} from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import theme from "./theme";
import React from "react";

function App() {
    const routing = useRoutes(routes(getAuthState()));
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            {routing}
        </ThemeProvider>
    );
}

export default App;

function getAuthState() {
    // return {authStatus:true, userType:"CASHIER"};
    return {authStatus: true, userType: "ADMIN"};
}
