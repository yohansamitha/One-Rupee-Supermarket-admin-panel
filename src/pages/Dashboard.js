import {Helmet} from "react-helmet";
import {Box, Container, Grid} from "@material-ui/core";
import TodayOrders from "../components/dashboard/TodayOrders";
import CompletedOrders from "../components/dashboard/CompletedOrders";
import PendingOrders from "../components/dashboard/PendingOrders";
import TotalProfit from "../components/dashboard/TotalProfit";
import Sales from "../components/dashboard/Sales";
import React, {useState} from "react";
// import LatestOrders from "../components/dashboard/LatestOrders";

export default function Dashboard() {
    const [dashboard, setDashboard] = useState({
        ongoingOrders: 23000,
        completedOrders: 123123,
        pendingOrdersPercentage: "50",
        totalIncome: "2320000",
        weeklyReport: [],
    });

    return (
        <>
            <Helmet>
                <title>One Rupee</title>
            </Helmet>
            <Box
                sx={{
                    backgroundColor: "background.default",
                    minHeight: "100%",
                    py: 3,
                }}
            >
                <Container maxWidth={false}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <TodayOrders ongoingOrders={dashboard.ongoingOrders}/>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <CompletedOrders completedOrders={dashboard.completedOrders}/>
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <PendingOrders
                                pendingOrdersPercentage={dashboard.pendingOrdersPercentage}
                            />
                        </Grid>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <TotalProfit
                                totalIncome={dashboard.totalIncome}
                                sx={{height: "100%"}}
                            />
                        </Grid>
                        <Grid item lg={12} md={12} xl={12} xs={12}>
                            <Sales weeklyReport={dashboard.weeklyReport}/>
                        </Grid>
                        {/* <Grid item lg={12} md={12} xl={12} xs={12}>
                           <LatestOrders />
                        </Grid> */}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
