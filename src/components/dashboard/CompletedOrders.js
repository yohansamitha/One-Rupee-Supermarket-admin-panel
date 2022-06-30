import {Avatar, Card, CardContent, Grid, Typography,} from "@material-ui/core";
import {green} from "@material-ui/core/colors";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";
import React from "react";

const CompletedOrders = ({completedOrders, ...props}) => (
    <Card sx={{height: "100%"}} {...props}>
        <CardContent>
            <Grid container spacing={3} sx={{justifyContent: "space-between"}}>
                <Grid item>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                        Completed Orders
                    </Typography>
                    <Typography color="textPrimary" variant="h3">
                        {completedOrders}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: green[600],
                            height: 56,
                            width: 56,
                        }}
                    >
                        <PeopleIcon/>
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default CompletedOrders;
