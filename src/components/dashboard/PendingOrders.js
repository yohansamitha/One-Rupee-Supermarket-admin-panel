import {Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography,} from "@material-ui/core";
import {orange} from "@material-ui/core/colors";
import InsertChartIcon from "@material-ui/icons/InsertChartOutlined";
import React from "react";

const PendingOrders = ({pendingOrdersPercentage, ...props}) => (
    <Card sx={{height: "100%"}} {...props}>
        <CardContent>
            <Grid container spacing={3} sx={{justifyContent: "space-between"}}>
                <Grid item>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                        Order On Progress
                    </Typography>
                    <Typography color="textPrimary" variant="h3">
                        {pendingOrdersPercentage ? pendingOrdersPercentage : "0.00"}%
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: orange[600],
                            height: 56,
                            width: 56,
                        }}
                    >
                        <InsertChartIcon/>
                    </Avatar>
                </Grid>
            </Grid>
            <Box sx={{pt: 3}}>
                <LinearProgress
                    value={parseFloat(pendingOrdersPercentage)}
                    variant="determinate"
                />
            </Box>
        </CardContent>
    </Card>
);

export default PendingOrders;
