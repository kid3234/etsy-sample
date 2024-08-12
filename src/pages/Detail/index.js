import React, { useEffect, useState } from "react";
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
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import Navbar from "../../components/Navbar";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const { product } = location.state || {};

  console.log(product);

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobileView = windowDimensions.width <= 768;

  if (!product) {
    return <Typography>No product data found.</Typography>;
  }

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
          <Typography color="text.primary">Product Detail</Typography>
        </Breadcrumbs>
      </Container>

      <Container
        maxWidth="xxxl"
        sx={{
          paddingX: isMobileView ? 2 : 10,
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
          sx={{
            display: "flex",
            gap: 4,
            flexDirection: isMobileView ? "column" : "row",
            width: "100%",
            marginTop: 2,
          }}
        >
          <Grid container spacing={2}>
            {isMobileView ? (
              <>
                <Grid item xs={12}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="Soccer Ball Necklace"
                      image={product?.item_details?.image_url}
                      title={product?.name}
                      sx={{
                        borderRadius: 2,
                        border: "1px solid #ddd",
                        width: "100%",
                        maxHeight: 600,
                        objectFit: "cover",
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center", marginTop: 2 }}>
                  <Typography variant="h6" sx={{ color: "#E65F29" }}>
                    Rare find
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    USD {product?.price?.amount}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {product?.price?.price_details}
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className="text-justify"
                  >
                    {product?.item_details?.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    by {product?.seller?.name}
                  </Typography>
                  <Rating value={5} readOnly />
                  <Typography
                    variant="body2"
                    gutterBottom
                    className="text-justify"
                  >
                    Returns & exchanges accepted
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      marginTop: 2,
                      backgroundColor: "black",
                      width: "100%",
                      maxWidth: "400px",
                      borderRadius: 2,
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
                          <ListItemText
                            primary={`Made by ${product?.seller?.name}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Materials: ${product?.highlights?.material}`}
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Clolor: ${product?.highlights?.color}`}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>

                  <Card style={{ marginTop: 20 }}>
                    <CardContent>
                      <Typography variant="h6">About this item</Typography>
                      <Typography variant="body2" gutterBottom>
                        {product?.item_details?.description}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Container
                    sx={{
                      width: "500px",
                      display: "flex",
                      gap: 2,
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <div className="flex gap-2 items-start ">
                      <Typography variant="h6">
                        Other reviews from this shop
                      </Typography>
                      <Rating value={product?.seller?.rating} readOnly />
                      <Typography>
                        ({product?.seller?.total_reviews})
                      </Typography>
                    </div>

                    <div>
                      {product?.reviews.map((data) => {
                        return (
                          <>
                            <Rating value={data?.rating} readOnly />
                            <Typography>{data?.text}</Typography>
                          </>
                        );
                      })}
                    </div>
                  </Container>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={2} sm={2}>
                  <Grid container direction="column" spacing={2}>
                    {["thumb1.jpg", "thumb2.jpg", "thumb3.jpg"].map(
                      (thumb, index) => (
                        <Grid item key={index}>
                          <CardMedia
                            component="img"
                            height="160"
                            image={product?.item_details?.image_url}
                            alt={`Thumbnail ${index + 1}`}
                            sx={{
                              cursor: "pointer",
                              borderRadius: 2,
                              border: "1px solid #ddd",
                              width: "100%",
                              maxHeight: 160,
                              objectFit: "cover",
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
                      image={product?.item_details?.image_url}
                      title={product?.name}
                      sx={{
                        borderRadius: 2,
                        border: "1px solid #ddd",
                        width: "100%",
                        maxHeight: 600,
                        objectFit: "cover",
                      }}
                    />
                  </Card>

                  <Grid container spacing={2} style={{ marginTop: 40 }}>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: "flex", justifyContent: "space-evenly" }}
                    >
                      <Container
                        sx={{
                          width: "500px",
                          display: "flex",
                          gap: 2,
                          flexDirection: "column",
                        }}
                      >
                        <div className="flex gap-2 items-center">
                          <Typography variant="h6">
                            Other reviews from this shop
                          </Typography>
                          <Rating value={product?.seller?.rating} readOnly />
                          <Typography>
                            ({product?.seller?.total_reviews})
                          </Typography>
                        </div>

                        <div>
                          {product?.reviews.map((data) => {
                            return (
                              <>
                                <Rating value={data?.rating} readOnly />
                                <Typography>{data?.text}</Typography>
                              </>
                            );
                          })}
                        </div>
                      </Container>

                      {isMobileView ? (
                        ""
                      ) : (
                        <List>
                          <ListItem className="flex items-center justify-between">
                            <ListItemText primary="Item quality: 5" />
                            <ListItemIcon>
                              <StarIcon />
                            </ListItemIcon>
                          </ListItem>
                          <ListItem className="flex items-center justify-between">
                            <ListItemText primary="Shipping: 5" />
                            <ListItemIcon>
                              <StarIcon />
                            </ListItemIcon>
                          </ListItem>
                          <ListItem className="flex items-center justify-between">
                            <ListItemText primary="Customer service: 5" />
                            <ListItemIcon>
                              <StarIcon />
                            </ListItemIcon>
                          </ListItem>
                        </List>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>

          {!isMobileView && (
            <>
              <Grid item xs={12} sm={5}>
                <Typography variant="h6">Product Details</Typography>
                <Typography variant="h4" gutterBottom>
                  USD {product?.price?.amount}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {product?.price?.price_details}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {product?.item_details?.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  by {product?.seller?.name}
                </Typography>
                <Rating value={5} readOnly />
                <Typography variant="body2" gutterBottom>
                  Returns & exchanges accepted
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    marginTop: 2,
                    backgroundColor: "black",
                    width: "100%",
                    maxWidth: "400px",
                    borderRadius: 2,
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
                        <ListItemText
                          primary={`Made by ${product?.seller?.name}`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Materials: ${product?.highlights?.material}`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`Clolor: ${product?.highlights?.color}`}
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
                <Card style={{ marginTop: 20 }}>
                  <CardContent>
                    <Typography variant="h6">About this item</Typography>
                    <Typography variant="body2" gutterBottom>
                      {product?.item_details?.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </>
          )}
        </Container>
      </Container>
    </div>
  );
};

export default Detail;
