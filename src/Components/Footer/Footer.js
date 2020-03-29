import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Grid container>
            <Grid item lg={6} sm={12}>
              <h1>My Simple Blog    </h1>
            </Grid>
            <Grid item lg={6} sm={12}>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
              <h1>Hello World</h1>
            </Grid>
          </Grid>
        </Container>
        <div style={{ backgroundColor: "rgb(4, 26, 153)" }}>
          <h2>Copy Right @ Dileep Amrani</h2>
        </div>
      </div>
    );
  }
}

export default Footer;
