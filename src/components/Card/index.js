import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useNavigate } from 'react-router-dom';
export default function CardComponent({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.id}`, { state: { product: data } });
  };
  return (
    <Card sx={{ maxWidth: 250, cursor: 'pointer' }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="40%"
          image={data?.item_details?.image_url}
          alt={data?.name}
          sx={{ height: "100px" }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              flexDirection: 'column',
              
              mb: 1,
            }}
          >
            <Typography
              gutterBottom
              variant="body2"
              component="div"
              sx={{
                fontWeight: "bold",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
                maxWidth: "80%",
              }}
            >
              {data?.item_details?.description}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{display: 'flex', alignItems: 'center' }}>
              {data?.price.currency} <span> {data?.price.amount}</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Rating
              name="half-rating-read"
              defaultValue={data?.seller?.rating}
              precision={0.5}
              readOnly
              size="small"
            />
            <Typography variant="body2" color="text.secondary">
              ({data?.seller?.total_reviews})
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
