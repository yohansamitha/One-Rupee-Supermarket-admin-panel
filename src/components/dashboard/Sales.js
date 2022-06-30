import {Bar} from "react-chartjs-2";
import {Box, Card, CardContent, CardHeader, colors, Divider, useTheme,} from "@material-ui/core";
import React from "react";

const Sales = ({weeklyReport, ...props}) => {
    const theme = useTheme();

    const data = {
        datasets: [
            {
                backgroundColor: colors.indigo[500],
                barPercentage: 0.5,
                barThickness: 15,
                borderRadius: 4,
                categoryPercentage: 0.5,
                data: [18, 5, 19, 27, 29, 19, 20],
                label: "This week",
                maxBarThickness: 10,
            },
        ],
        labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
    };

    const options = {
        animation: false,
        cornerRadius: 20,
        layout: {padding: 0},
        legend: {display: false},
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            xAxes: [
                {
                    ticks: {
                        fontColor: theme.palette.text.secondary
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false
                    }
                }
            ],
            yAxes: [
                {
                    ticks: {
                        fontColor: theme.palette.text.secondary,
                        beginAtZero: true,
                        min: 0
                    },
                    gridLines: {
                        borderDash: [2],
                        borderDashOffset: [2],
                        color: theme.palette.divider,
                        drawBorder: false,
                        zeroLineBorderDash: [2],
                        zeroLineBorderDashOffset: [2],
                        zeroLineColor: theme.palette.divider
                    }
                }
            ],
        },
        tooltips: {
            backgroundColor: theme.palette.background.paper,
            bodyFontColor: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            borderWidth: 1,
            enabled: true,
            footerFontColor: theme.palette.text.secondary,
            intersect: false,
            mode: "index",
            titleFontColor: theme.palette.text.primary,
        },
    };

    return (
        <Card {...props}>
            <CardHeader
                title="Latest Sales"
                subheader="Last 7 days"
            />
            <Divider/>
            <CardContent>
                <Box
                    sx={{
                        height: 400,
                        position: "relative",
                    }}
                >
                    <Bar data={data} options={options}/>
                </Box>
            </CardContent>
        </Card>
    );
};

export default Sales;
