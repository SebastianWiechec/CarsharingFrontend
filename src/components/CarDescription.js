import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import api, { API_TYPES } from "../actions/api";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";
import NotFoundPage from "../pages/404";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  container: {
    marginTop: 80,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: green[600],
  },
  buttonek: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
}));

const piclinks = [
  { id: "1", image: "../OpelAstra/opel-astra.jpg" },
  { id: "2", image: "../ToyotaYaris/toyota-yaris.jpg" },
  { id: "3", image: "../SkodaOctavia/skoda-octavia.jpg" },
  { id: "4", image: "../FordFocus/ford-focus.jpg" },
  { id: "5", image: "../Maybah/Maybah.jpg" },
  { id: "6", image: "../MercedesS550/Mercedes-s550.jpg" },
];

/**
 *
 * @param {*} props
 */
export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [carDesc, setData] = useState({});
  let href = "";
  let user = localStorage.getItem("userId");

  if (!user) href = "/SignIn";
  else href = `/Checkout/${props.match.params.id}`;

  useEffect(() => {
    const fetchData = async () => {
      console.log(props.match.params.id);
      const request = await api
        .request(API_TYPES.CAR)
        .fetchById("/" + props.match.params.id);
      setData(request.data);
      console.log(request.data);
    };

    fetchData();
  }, []);

  const picresult = piclinks.find(({ id }) => id == props.match.params.id);
  if (picresult === undefined) return <Redirect to={NotFoundPage} />;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Nitro-Gear" className={classes.avatar}>
              <h>
                <i>N-G</i>
              </h>
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" href="/">
              <MoreVertIcon />
              Strona główna
            </IconButton>
          }
          title="Nitro-Gear"
          subheader="Info wybranego samochodu"
        />
        <CardMedia
          className={classes.media}
          image={picresult.image}
          title={carDesc.model}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <h2>
              {carDesc.manufacturer} {carDesc.model}
            </h2>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              <h>Opis</h>
            </Typography>
            <Typography paragraph>
              Kolor: <i>{carDesc.color}</i>
            </Typography>
            <Typography paragraph>
              Rok produkcji <i>{carDesc.yofProd}</i>
            </Typography>
            <Typography paragraph>
              Cena za dzień <i>{carDesc.priceDay}</i> PLN
            </Typography>
          </CardContent>
        </Collapse>
        <Container className={classes.buttonek}>
          <Button variant="contained" color="primary" href={href}>
            Zarezerwuj
          </Button>
        </Container>
        <Typography paragraph></Typography>
      </Card>
    </Container>
  );
}
