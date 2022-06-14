import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export enum CardType {
    AUCTION,
    TOKEN,
    USER,
};

const CustomCard: React.FC<{type: CardType}> = ({ type }) => {
    return (
        <Card>
            
        </Card>
    );
};

export default CustomCard;