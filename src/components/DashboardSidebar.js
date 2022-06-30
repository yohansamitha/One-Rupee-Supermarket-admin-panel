import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {Avatar, Box, Divider, Drawer, Hidden, List, Typography,} from "@material-ui/core";
import {
    BarChart as BarChartIcon,
    ShoppingBag as ShoppingBagIcon,
    User as UserIcon,
    Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";

const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    jobTitle: "Super Admin",
    name: "Siripala Perera",
};

const adminNavItems = [
    {
        href: "/admin/dashboard",
        icon: BarChartIcon,
        title: "Dashboard",
    },
    {
        href: "/app/customers",
        icon: UsersIcon,
        title: "Customers",
    },
    {
        href: "/app/products",
        icon: ShoppingBagIcon,
        title: "Products",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    },
];

const cashierNavItems = [
    {
        href: "/admin/dashboard",
        icon: BarChartIcon,
        title: "admin",
    },
    {
        href: "/app/customers",
        icon: UsersIcon,
        title: "Customers",
    },
    {
        href: "/app/products",
        icon: ShoppingBagIcon,
        title: "Products",
    },
    {
        href: "/app/account",
        icon: UserIcon,
        title: "Account",
    }
];

const DashboardSidebar = ({userType, onMobileClose, openMobile}) => {
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    function getNavList(item) {
        return (<NavItem
            href={item.href}
            key={item.title}
            title={item.title}
            icon={item.icon}
        />);
    }

    const content = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                }}
            >
                <Avatar
                    // component={RouterLink}
                    src={user.avatar}
                    sx={{
                        cursor: "pointer",
                        width: 64,
                        height: 64,
                    }}
                    // to="/app/account"
                />
                <Typography color="textPrimary" variant="h5">
                    {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{p: 2}}>
                <List>
                    {userType === 'ADMIN' ? (
                        adminNavItems.map((item) => (
                            getNavList(item)
                        ))
                    ) : (
                        cashierNavItems.map((item) => (
                            getNavList(item)
                        )))}
                </List>
            </Box>
            <Box sx={{flexGrow: 1}}/>
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                    PaperProps={{
                        sx: {
                            width: 256,
                        },
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden lgDown>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                            width: 256,
                            top: 64,
                            height: "calc(100% - 64px)",
                        },
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

DashboardSidebar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
    onMobileClose: () => {
    },
    openMobile: false,
};

export default DashboardSidebar;
