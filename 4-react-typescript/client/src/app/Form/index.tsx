import { useState, useEffect } from "react";
import { useFormValidation } from "../../hooks/useFormValidation";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Form = () => {
  const classes = useStyles();
  const initialValues = { title: null, content: null };
  const [article, setArticle] = useState({ ...initialValues });
  const { validate, isValid } = useFormValidation();

  const handleOnChange = (e: any) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    validate(article);
  }, [article, validate]);
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Add Article
      </Typography>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              onChange={handleOnChange}
              variant="outlined"
              required
              fullWidth
              id="title"
              label="article title"
              name="title"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={handleOnChange}
              variant="outlined"
              required
              fullWidth
              multiline
              rows={4}
              id="content"
              label="your article"
              name="content"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={!isValid}
          className={classes.submit}
        >
          Add
        </Button>
      </form>
    </div>
  );
};
export default Form;
