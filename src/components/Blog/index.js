import { Box, Button, Container, Grid, Typography, Chip } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { blogData } from "../../data/constants";

const HomePageBlog = () => {
  const navigate = useNavigate();

  return (
    <section id="blog">
      <Box sx={{ py: 6, position: "relative" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} data-aos="fade-up">
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "1.8rem", md: "3rem" },
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                My Latest Blogs
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="xl">
        <Grid container spacing={3} justifyContent="center">
          {blogData.slice(0, 3).map((blog, index) => (
            <Grid
              item
              lg={4}
              md={6}
              sm={6}
              xs={12}
              key={blog.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Box
                sx={{
                  borderRadius: 5,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
                  backgroundColor: "#151515",
                  padding: 2,
                  height: "100%",
                  flexDirection: "column",
                  display: "flex",
                }}
                onClick={() => navigate(`/blog-details/${blog.id}`)}
              >
                <Box className="blog-image">
                  <Link to={`/blog-details/${blog.id}`}>
                    <img
                      src={blog.image}
                      alt="Blog Post"
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                  </Link>
                </Box>
                <Box className="blog-content" sx={{ padding: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6a6484",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <CalendarMonthIcon sx={{ fontSize: 16 }} /> {blog.date}
                  </Typography>
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      gap: 0.5,
                      flexWrap: "wrap",
                    }}
                  >
                    {blog.tags?.split(",").map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag.trim()}
                        sx={{
                          backgroundColor: "#fff",
                          color: "#000",
                          fontWeight: "bold",
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      mt: 2,
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {blog.title.length > 40
                      ? blog.title.slice(0, 40) + "..."
                      : blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#b3b3b3",
                      mt: 1,
                    }}
                  >
                    {blog.description.length > 60
                      ? blog.description.slice(0, 60) + "..."
                      : blog.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={6} textAlign="center" data-aos="fade-up">
        <Button
  variant="contained"
  sx={{
    mt: 4,
    textTransform: "capitalize",
    backgroundColor: "#7b64a7", 
    color: "#fff",
    padding: "12px 24px",  
    borderRadius: "5px",  
    fontWeight: "bold",  
    fontSize: "1rem",  
    "&:hover": {
      backgroundColor: "#18182e", 
      transform: "scale(1.05)",  
    },
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",  
  }}
  onClick={() => navigate("/blog")}
>
  View All
</Button>

        </Grid>
      </Container>
    </section>
  );
};

export default HomePageBlog;