import {Avatar, Card, CardContent, Grid, Typography} from "@material-ui/core";
import {indigo} from "@material-ui/core/colors";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import React from "react";

const TotalProfit = ({totalIncome, ...props}) => (
    <Card {...props}>
        <CardContent>
            <Grid container spacing={3} sx={{justifyContent: "space-between"}}>
                <Grid item>
                    <Typography color="textSecondary" gutterBottom variant="h6">
                        TOTAL PROFIT
                    </Typography>
                    <Typography color="textPrimary" variant="h3">
                        $ {totalIncome ? totalIncome : "0.00"}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: indigo[600],
                            height: 56,
                            width: 56,
                        }}
                    >
                        <AttachMoneyIcon/>
                    </Avatar>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);

export default TotalProfit;
