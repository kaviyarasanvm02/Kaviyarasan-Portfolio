import React from "react";
import { motion } from "framer-motion";
import { 
  Box, Container, Grid, Typography, Button, Card, 
  CardMedia, CardContent, Link 
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { blogData } from "../../data/constants";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handleNavigate = (blogId) => {
    navigate(`/blog-details/${blogId}`);
  };

  // Slice the blogData to show only 9 blogs (3x3 grid)
  const displayedBlogs = blogData.slice(0, 9);

  return (
    <div>
      {/* Animated Header */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Box
          py={4}
          textAlign="center"
          sx={{
            backgroundColor: "#1E1E1E",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "30vh",
          }}
        >
          <Typography variant="h4" fontWeight={700} sx={{ fontSize: "60px" }}>Latest Blogs</Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <Link href="/" underline="hover" color="inherit">Home</Link> / Blogs
          </Typography>
        </Box>
      </motion.div>

      {/* Blog List Section */}
      <Container
        maxWidth="lg" // Changed from "xl" to "lg" for a narrower container
        sx={{
          paddingBottom: { xs: 4, md: 7 },
          position: "relative",
          zIndex: 1,
          backgroundColor: "#1E1E1E",
          backgroundPosition: "center",
        }}
      >
        <Grid container spacing={3}> {/* Reduced spacing between cards */}
          {displayedBlogs.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}> {/* Adjusted for 3x3 grid */}
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  backgroundColor: "#2a2a2a",
                  color: "white",
                  borderRadius: "12px",
                  border: "1px solid #444",
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.15)",
                  },
                  maxWidth: "100%", // Ensure the card doesn't exceed its container
                }}
              >
                {/* Blog Image */}
                <Box sx={{ position: "relative", overflow: "hidden", height: "200px" }}> {/* Reduced image height */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={post.image}
                    alt={post.title}
                    sx={{
                      transition: "transform 0.6s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Box>

                {/* Blog Content */}
                <CardContent sx={{ padding: 2 }}>
                  <Typography variant="body2" color="#a5a5a5" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <CalendarMonthIcon sx={{ fontSize: 14, color: "#a5a5a5" }} />
                    {post.date}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mt: 1,
                      color: "#fff",
                      fontWeight: 600,
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#a5a5a5",
                      },
                    }}
                  >
                    <a href={post.link} style={{ textDecoration: "none", color: "inherit" }}>
                      {post.title.length > 30 ? post.title.slice(0, 30) + "..." : post.title}
                    </a>
                  </Typography>

                  <Typography variant="body2" sx={{ color: "#d1d1d1", mt: 1 }}>
                    {post.description.length > 50 ? post.description.slice(0, 50) + "..." : post.description}
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      textTransform: "capitalize",
                      backgroundColor: "#7b64a7",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#5a3f7c" },
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                      cursor: "pointer",
                    }}
                    onClick={() => handleNavigate(post.id)}
                  >
                    View Details
                    <ArrowForwardIcon sx={{ marginLeft: 1, fontSize: 20 }} />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Blog;