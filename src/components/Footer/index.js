import React from "react";
import {
  Box,
  Typography,
  Container,
  Stack,
  IconButton,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Bio } from "../../data/constants";

const FooterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(4, 0),
  background:
    "linear-gradient(100.26deg, rgba(0, 102, 255, 0.05) 42.33%, rgba(150, 0, 225, 0.05) 127.07%)",
}));

const FooterWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const LeftSection = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1),
  alignItems: "flex-start",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: "1.5rem",
  color: "#854cda",
  marginBottom: theme.spacing(2),
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: "#fff",
  "&:hover": {
    color: "#854cda",
  },
}));

const ContactItem = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
  color: "#fff",
}));

const ContactHeading = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontWeight: "bold",
  fontSize: "1.2rem",
  borderBottom: "2px solid #854cda",
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  marginTop: theme.spacing(3),
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper maxWidth="lg">
        {/* Left Section */}
        <LeftSection>
          <ContactHeading>Contact Info</ContactHeading>
          <ContactItem>
            <PhoneIcon />
            <Typography variant="body1">9025185752</Typography>
          </ContactItem>
          <ContactItem>
            <EmailIcon />
            <Typography variant="body1">
              <a
                href="mailto:kaviyarasanvm02@gmail.com"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                  borderBottom: "2px solid #854cda",
                  display: "inline-block",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.borderBottom = "2px solid #854cda")
                }
                onMouseLeave={(e) => (e.target.style.borderBottom = "none")}
              >
                kaviyarasanvm02@gmail.com
              </a>
            </Typography>
          </ContactItem>
          <ContactItem>
            <LocationOnIcon />
            <Typography variant="body1">Chennai, India</Typography>
          </ContactItem>
        </LeftSection>

        {/* Right Section */}
        <RightSection>
          <Logo variant="h1">Kaviyarasan Vedappan</Logo>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <SocialIconButton href={Bio.facebook} target="display">
              <FacebookIcon />
            </SocialIconButton>
            <SocialIconButton href={Bio.X} target="display">
              <TwitterIcon />
            </SocialIconButton>
            <SocialIconButton href={Bio.linkedin} target="display">
              <LinkedInIcon />
            </SocialIconButton>
            <SocialIconButton href={Bio.instagram} target="display">
              <InstagramIcon />
            </SocialIconButton>
          </Stack>

          <CopyrightText variant="body2">
            Copyright © {new Date().getFullYear()} Kaviyarasan. All rights
            reserved.
          </CopyrightText>
        </RightSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
