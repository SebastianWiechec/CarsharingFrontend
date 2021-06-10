import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import api, { API_TYPES } from "../../actions/api";
import ResponsiveDialog from "../Modal";

function Modal(txt) {
  return <ResponsiveDialog text={txt} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 120,
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  container: {
    marginTop: 180,
  },
}));

const steps = [
  "Adres wysyłki",
  "Szczegóły płatności",
  "Sprawdź swoje zamówienie",
];

/**
 *
 */

async function sendTransaction(ReviewData) {
  let newTransaction = {
    Transaction: 0,
    User: ReviewData.User,
    Car: parseInt(ReviewData.CarDesc.idCar),
    Price: ReviewData.CarDesc.priceDay,
    IsEnd: false,
    IsReturned: false,
    StartDate: new Date(ReviewData.startDate),
    EndDate: new Date(ReviewData.endDate),
  };
  console.log("newTransaction");
  console.log(newTransaction);
  await api
    .request(API_TYPES.TRANSACTIONS)
    .create(newTransaction)
    .then((response) => {
      if (response.data == "Ok") {
        Modal(response.data);
      }
    });
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [carDesc, setData] = React.useState({});
  let userId = localStorage.getItem("userId");
  let date = new Date().toISOString().slice(0, 10);

  const [ReviewData, setReview] = React.useState({
    CarDesc: carDesc,
    Transaction: "",
    User: userId,
  });
  const handleChange = (e) => {
    console.log(date);
    setReview((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await api
        .request(API_TYPES.CAR)
        .fetchById("/" + props.match.params.id);
      setData(request.data);
      setReview((prevState) => ({
        ...prevState,
        CarDesc: request.data,
      }));
    };

    fetchData();
  }, []);

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm value={ReviewData} onChange={handleChange} />;
      case 1:
        return <PaymentForm value={ReviewData} onChange={handleChange} />;
      case 2:
        return <Review value={ReviewData} onChange={handleChange} />;
      default:
        throw new Error("Unknown step");
    }
  }

  async function handleNext() {
    if (activeStep == 2) await sendTransaction(ReviewData);
    else setActiveStep(activeStep + 1);
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    type="submit"
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
