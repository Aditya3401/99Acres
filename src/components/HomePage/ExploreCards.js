import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { DarkTypography, LightTypography } from "../Common";
import EastIcon from "@mui/icons-material/East";

const ExploreCards = ({
  id,
  imageSrc,
  lightText,
  titleText1,
  titleText2,
  sublineText1,
  sublineText2,
  btnText,
}) => {
  return (
    <>
      {id === 3 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <LightTypography text={"ARE YOU AN OWNER?"} />
          <DarkTypography
            text1={"Sell or Rent your property faster"}
            text2={"with 99acres"}
          />
        </Box>
      )}
      {id === 4 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              mt: 1,
              color: "#041533",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "28px",
              fontFamily: "Open Sans",
            }}
          >
            Our services for owners
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#42526E",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",
              fontFamily: "Open Sans",
            }}
          >
            Make your life easier with our services
          </Typography>
          <Box
            sx={{
              minHeight: "393px",
              minWidth: "512px",
              background: "#fff5e4",
              mt: 2,
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{
                padding: "76px 40px 40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              <img
                src="assets/d_hp_owner_assist_benefits.webp"
                alt="assistImage"
                style={{ width: "35%" }}
              />
              <Typography
                sx={{
                  mt: 3,
                  color: "#041533",
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "28px",
                  fontFamily: "Open Sans",
                }}
              >
                Get assistance in selling faster
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  color: "#8993A4",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  fontFamily: "Open Sans",
                }}
              >
                Dedicated Relationship manager to help you sell your property{" "}
                <br />
                faster
              </Typography>
              <Button
                disableRipple
                sx={{
                  textTransform: "none",
                  color: "#0078DB",
                  fontSize: "14px",
                  fontWeight: 700,
                  lineHeight: "20px",
                  p: 0,
                  ":hover": {
                    background: "none",
                  },
                  mt: 1,
                  display: "flex",
                }}
              >
                Explore now
                <EastIcon sx={{ ml: 1 }} />
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <Box sx={{ mt: 4, display: "flex", alignItems: "center", mb: 3 }}>
        <img
          src={imageSrc}
          alt="exploreImage"
          style={{ borderRadius: "8px" }}
        />
        <Box sx={{ ml: 8 }}>
          <LightTypography text={lightText} />
          <Typography
            sx={{
              mt: 1,
              color: "#091E42",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "40px",
              fontFamily: "Open Sans",
            }}
          >
            {titleText1} <br /> {titleText2}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: "#42526E",
              fontSize: "16px",
              fontWeight: 400,
              fontFamily: "Open Sans",
            }}
          >
            {sublineText1} <br /> {sublineText2}
          </Typography>
          <Button
            disableRipple
            sx={{
              mt: 3,
              background: "#0078DB",
              padding: "16px 24px",
              fontSize: "16px",
              lineHeight: "20px",
              fontWeight: 700,
              color: "#fff",
              fontFamily: "Open Sans",
              textTransform: "capitalize",
              ":hover": {
                background: "#006AC2",
              },
            }}
          >
            {btnText}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ExploreCards;
