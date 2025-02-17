import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../../data/constants";
import { Box, Typography, Card, CardContent, CardMedia, Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <Container sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h4" color="error">Blog Not Found</Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ mt: 2 }}
          onClick={() => navigate("/blog")}
        >
          Go Back to Blogs
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={() => navigate(-1)} 
        sx={{ mb: 2, textTransform: "capitalize" }}
      >
        Back
      </Button>

      <Card sx={{ borderRadius: 3, overflow: "hidden", backgroundColor: "#151515", color: "#fff" }}>
        <CardMedia
          component="img"
          height="400"
          image={blog.image}
          alt={blog.title}
          sx={{ objectFit: "cover" }}
        />

        <CardContent sx={{ p: 3 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {blog.title}
          </Typography>

          <Typography variant="body2" color="gray" sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            Published on: {blog.date}
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {blog.description}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default BlogDetails;
