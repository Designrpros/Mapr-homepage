/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
/* eslint-disable */

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

import AllProjects from "assets/images/Allprojects.jpg";
import CustomChecklists from "assets/images/Detailview.png";
import PDF from "assets/images/PDF.png";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <MKBox display="flex" flexDirection="column" alignItems="center">
              <DefaultCounterCard
                count={1}
                title="All Projects View"
                description="Display All Projects on a map"
              />
              <img src={AllProjects} alt="Allprojects" style={{ maxWidth: "100%", height: "auto" }} />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MKBox display="flex" flexDirection="column" alignItems="center">
              <DefaultCounterCard
                count={2}
                title="Project"
                description="track your hours, materials, checklists"
              />
              <img src={CustomChecklists} alt="Custom Checklists" style={{ maxWidth: "100%", height: "auto" }} />
            </MKBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <MKBox display="flex" flexDirection="column" alignItems="center">
              <DefaultCounterCard
                count={3}
                title="export as pdf"
                description="Export everything as a pdf"
              />
              <img src={PDF} alt="PDF" style={{ maxWidth: "100%", height: "auto" }} />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;