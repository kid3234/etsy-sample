import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Rating,
  Link,
  Breadcrumbs,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import Navbar from "../../components/Navbar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Detail = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: 2,
          marginBottom: 2,
        }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ textAlign: "center" }}
        >
          <Link underline="hover" color="inherit" href="/">
            Homepage
          </Link>
          <Link underline="hover" color="inherit" href="/jewelry">
            Jewelry
          </Link>
          <Link underline="hover" color="inherit" href="/jewelry/necklaces">
            Necklaces
          </Link>
          <Typography color="text.primary">Soccer Ball Necklace</Typography>
        </Breadcrumbs>
      </Container>
      <Container
        maxWidth="xxxl"
        sx={{
          paddingX: 10,
          marginTop: 2,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="xxl"
          sx={{ display: "flex", gap: 4, width: "100%", marginTop: 2 }}
        >
          <Grid container spacing={1}>
         
            <Grid item xs={2} sm={2}>
              <Grid container direction="column" spacing={2}>
                {["thumb1.jpg", "thumb2.jpg", "thumb3.jpg"].map(
                  (thumb, index) => (
                    <Grid item key={index}>
                      <CardMedia
                        component="img"
                        height="40"
                        image={`/watch.jpg`} 
                        alt={`Thumbnail ${index + 1}`}
                        style={{
                          cursor: "pointer",
                          borderRadius: 8,
                          border: "1px solid #ddd",
                        }}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>

           
            <Grid item xs={10} sm={10}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Soccer Ball Necklace"
                  
                  image="/watch.jpg" 
                  title="Soccer Ball Necklace"
                  style={{
                    borderRadius: 8,
                    border: "1px solid #ddd",
                  }}
                />
              </Card>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: 40 }}>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Container sx={{ width: "500px" }}>
                  <Typography variant="h6">
                    Other reviews from this shop
                  </Typography>
                  <Rating value={5} readOnly />
                  <Typography variant="body2" gutterBottom>
                    "This review comes so late but Dovile was so amazing and
                    thoughtful and the necklace is perfect!"
                  </Typography>
                </Container>
                <List>
                  <ListItem>
                    <ListItemText primary="Item quality: 5" />
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Shipping: 5" />
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Customer service: 5" />
                    <ListItemIcon>
                      <StarIcon />
                    </ListItemIcon>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="h6" sx={{ color: "#E65F29" }}>
              Rare find
            </Typography>
            <Typography variant="h4" gutterBottom>
              USD 50.79
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              Local taxes included (where applicable)
            </Typography>
            <Typography variant="h5" gutterBottom>
              Soccer Ball Necklace-Football Beaded Necklace-Soccer Fans Gift...
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              by DreamBeadsDovi
            </Typography>
            <Rating value={5} readOnly />
            <Typography variant="body2" gutterBottom>
              Returns & exchanges accepted
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{
                marginTop: 10,
                backgroundColor: "black",
                width: "100%",
                maxWidth: "400px",
                borderRadius: 20,
              }}
            >
              Add to cart
            </Button>

            <Card style={{ marginTop: 20 }}>
              <CardContent>
                <Typography variant="h6">Item details</Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Made by DreamBeadsDovi" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Materials: Glass" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chain style: Bead" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Necklace length: 42 Centimeters" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card style={{ marginTop: 20 }}>
              <CardContent>
                <Typography variant="h6">About this item</Typography>
                <Typography variant="body2" gutterBottom>
                  Soccer Ball Necklace-Football Beaded Necklace-Soccer Fans
                  Gift-Soccer Ball Charm Necklace-Ball Charm-Football Charm
                  Necklace-Green Necklace
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

export default Detail;
