import {Link as RouterLink} from "react-router-dom";
import PropTypes from "prop-types";
import {AppBar, Box, Hidden, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import InputIcon from "@material-ui/icons/Input";
import Logo from "./Logo";
import React from "react";

const DashboardNavBar = ({onMobileNavOpen, ...rest}) => {

    return (
        <AppBar elevation={0} {...rest}>
            <Toolbar>
                <RouterLink to="/">
                    <Logo/>
                </RouterLink>
                <Box sx={{flexGrow: 1}}/>
                <Hidden lgDown>
                    <IconButton color="inherit" onClick={logout}>
                        <InputIcon/>
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onMobileNavOpen}>
                        <MenuIcon/>
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

DashboardNavBar.propTypes = {
    onMobileNavOpen: PropTypes.func,
};

export default DashboardNavBar;

function logout() {
    alert("something went wrong, Please contact admin");
}
