import { useNavigate } from "react-router-dom";
import posts from "../redux/posts";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const PopularPosts = () => {
  const navigate = useNavigate();

  const posts = useSelector(state => state.posts)

  console.log("posts:", posts);
  console.log("isArray:", Array.isArray(posts));

  const topPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 2)

  console.log(topPosts)
  return (
    <div className="mt-4">
      <h4>🔥 인기 글</h4>
      {topPosts.map((post, index) => (
        <Card key={index} className="mb-2" onClick={() => navigate(`/board`)} style={{ cursor: 'pointer' }}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              by {post.author} | ❤️ {post.likes}
            </Card.Subtitle>
            <Card.Text>
              {post.content}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PopularPosts