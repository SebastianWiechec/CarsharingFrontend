import { React } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Image404 from "./image404.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url("+Image404+")",
        backgroundSize: "cover",
    },
    Header: {
        fontSize: "13.7em",
        marginTop: "30px",
        minHeight: "32px",
        fontWeight: "700",
        marginBottom: "25px",
        lineHeight: "1.15em",
        
    },
    Header2: {
        fontSize: "2.25rem",
        marginTop: "0px",
        marginBottom: "8px",
        lineHeight: "1.5em",
    },
    Links: {
        fontSize: "1.125rem",
        marginTop: "0px",
        marginBottom: "8px",
        lineHeight: "1.4em",   
        '&:hover':{
            color: "#ddd"
        },
        '&:visited':{
            color: "#ccc"
        },
        '&:link':{
            color: "#ddd"
        },
        '&:active':{
            color: "#FFF"
        }        
    },
    Container:{
      fontWeight: "300",
      top: "40%",
      left: "50%",
      position: "absolute",
      width: "100%",
      transform: "translate(-50%, -50%)",
      maxWidth: "880px",
      textAlign: "center",
      boxSizing: "border-box",      
      color: "#FFF",
      letterSpacing: "normal !important"
    }
  }));

const NotFoundPage =()=>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.Container}>
                <h1 className={classes.Header}>404</h1>
                <h2 className={classes.Header2}>
                    Strona nieodnaleziona :(
                </h2>
                <p className={classes.Links}>
                    <Link to="/" className={classes.Links}>Powrót na stronę główną</Link>
                </p>
            </div>
        </div>
        
    )
}
export default NotFoundPage;
