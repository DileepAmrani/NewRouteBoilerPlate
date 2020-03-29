import React from "react";
import { Navbar, Footer } from "../../Components";
import "./Home.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { MdTextFields } from "react-icons/md";
import { FaUserTag, FaCalendarAlt } from "react-icons/fa";
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: "Hello World",
          author: "Dileep Kumar",
          date: "06-07-1999",
          description:
            "Randomized dummy text. by this text-generator is suitable for greeking, typesetting, layouts for websites, and WYSIWYG Web development, either Lorem Ipsum Randomized dummy text. by this text-generator is suitable for greeking, typesetting, layouts for websites, and WYSIWYG Web development, either Lorem Ipsum Randomized dummy text. by this text-generator is suitable greeking, typesetting, layouts for websites, and WYSIWYG Web development, either Lorem Ipsum"
        },
        {
          title: "Hello World",
          author: "Dileep Kumar",
          date: "06-07-1999",
          description:
            "Randomized dummy text. by this text-generator is suitable for greeking, typesetting, layouts for websites, and WYSIWYG Web development, either Lorem Ipsum Randomized dummy text. by this text-generator is suitable for greeking, typesetting, layouts for websites, and WYSIWYG Web development, either Lorem Ipsum Randomized dummy text. by this text-generator is suitable greeking, typesetting, layouts for websites, and WYSIWYG Web development, either Lorem Ipsum"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Navbar login="Login" path={()=>this.props.history.push('/login')}/>
        <div>
          <h1>News Feed</h1>
        </div>
        <Container>
          <Paper elevation={2} className="paper">
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
                <span className="date">06-07-1999</span>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={2} className="paper">
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
                <span className="date">06-07-1999</span>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={2} className="paper">
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
                <span className="date">06-07-1999</span>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={2} className="paper">
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
                <span className="date">06-07-1999</span>
              </Grid>
            </Grid>
          </Paper>

          <Paper elevation={2} className="paper">
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
                <span className="date">06-07-1999</span>
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Home;
