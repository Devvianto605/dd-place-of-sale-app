/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import DefaultFooter from "examples/Footers/DefaultFooter";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";
import RenderMenus from "items/RenderMenus";

// Presentation page sections
// import Counters from "pages/Presentation/sections/Counters";
// import Information from "pages/Presentation/sections/Information";
// import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
// import Pages from "pages/Presentation/sections/Pages";
// import Testimonials from "pages/Presentation/sections/Testimonials";
// import Download from "pages/Presentation/sections/Download";

// Presentation page components
// import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
// import footerRoutes from "footer.routes";

// Images
import coverImg from "assets/images/cover/img-cover-01.jpg";

function Overview() {
  return (
    <>
     
      <MKBox
        minHeight={{ xs: "35vh", lg: "75vh" }}
        width="100%"
        sx={{
          backgroundImage: `url(${coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Card sx={{backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),}}>
            <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
              <MKTypography
                variant="h3"
                color="primary"
                mt={{ xs: 0, lg: -1 }}
                mb={{ xs: 0, lg: 1 }}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size.xl,
                  },
                })}
              >
                หน้าจัดการ ร้านแหนมเนือง@Hat-yai{" "}
              </MKTypography>
              <MKTypography
                variant="body3"
                color="primary"
                textAlign="center"
                px={{ xs: 6, lg: 12 }}
                mt={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size.md,
                    
                  },
                })}
              >
                กดเปิดโต๊ะ เพื่อเปิดโตํะใหม่
              </MKTypography>
            </Grid>
          </Card>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      > sth
          </Card>
    </>
  );
}

export default Overview;
