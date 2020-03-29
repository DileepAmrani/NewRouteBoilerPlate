import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Navbar , Footer} from "../../Components"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { MdTextFields } from "react-icons/md";
import { FaUserTag, FaCalendarAlt } from "react-icons/fa";
import Paper from "@material-ui/core/Paper";
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile">
        <Navbar path={() => this.props.history.push('/login')}/>
        <div style={{ backgroundColor: "#157ec6" }}>
          <Paper
            style={{
              padding: "10px 0",
              backgroundColor: "#318BCC",
              color: "#fff"
            }}
          >
            <Container>
              <span className="creat-post-heading">Create a New Post ....</span>
              <br />
              <TextField
                id="standard-multiline-flexible"
                label="Enter Title Here"
                multiline
                fullWidth
                style={{color: "#fff"}}
              />
              <br />
              <textarea
                className="textArea"
                placeholder=" Enter Description Here ....."
              ></textarea>
              <br />
              <Button
                variant="contained"
                style={{ backgroundColor: "#1A7EC6", color: "#fff" }}
              >
                POST NOW
              </Button>
            </Container>
          </Paper>
        </div>

        <Container>
          <Paper elevation={2} className="paper">
            {" "}
            <br />
            <Grid container>
              <Grid item lg={6} sm={12}>
                <MdTextFields size={35} />
                <span className="title">Hello World </span>
                <br />
              </Grid>
              <Grid item xs={12}>
                <p>
                  Randomized dummy text. by this text-generator is suitable for
                  greeking, typesetting, layouts for websites, and WYSIWYG Web
                  development, either Lorem Ipsum Randomized dummy text. by this
                  text-generator is suitable for greeking, typesetting, layouts
                  for websites, and WYSIWYG Web development, either Lorem Ipsum
                  Randomized dummy text. by this text-generator is suitable for
                  greeking, typesetting, layouts for websites, and WYSIWYG Web
                  development, either Lorem Ipsum
                </p>
              </Grid>
              <Grid item lg={6} sm={12}>
                <FaUserTag size={20} />
                <span className="author">Dileep Kumar</span>
                <br />
                <FaCalendarAlt size={20} />
                <span className="date">06-07-1999</span> <br />
                <br />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "red", color: "#fff" }}
                >
                  DELETE POST
                </Button>{" "}
                &nbsp;
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#d2df00", color: "#fff" }}
                >
                  EDIT POST
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Profile;
