import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./card.css";

export default function Cards({
  title,
  description,
  total,
  totalSuccess,
  icon,
}) {
  return (
    <Card sx={{ minWidth: 350 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <div className="info">
          {icon}
          <Typography variant="h5">{total}</Typography>
        </div>
        <div className="desc">
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {description}
          </Typography>
          <Typography sx={{ fontSize: 17 }}>{totalSuccess}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
