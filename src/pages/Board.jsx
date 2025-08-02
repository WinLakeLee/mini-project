import { useEffect, useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Pagination,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost, updatePost, deletePost } from "../redux/posts";
import axios from "axios";

export default function Board() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 5;

  useEffect(() => {
    axios.get("/src/data/posts.json").then((res) => {
      dispatch(addPost(res.data));
    });
  }, [dispatch]);

  const handleSubmit = () => {
    if (title && content) {
      const newPost = {
        id: Date.now(),
        title,
        content,
        author: author || "anonymous",
        likes: 0,
      };
      dispatch(addPost([newPost, ...posts]));
      setTitle("");
      setContent("");
      setAuthor("");
      setPage(1);
    }
  };

  const handleUpdate = (id) => {
    dispatch(updatePost({ id, title: editTitle, content: editContent }));
    setEditId(null);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.title.includes(search) ||
      p.content.includes(search) ||
      p.author.includes(search)
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">📝 게시판</h2>
      <Card className="mb-4">
        <Card.Body>
          <Form.Control
            className="mb-2"
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            as="textarea"
            className="mb-2"
            placeholder="내용"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Form.Control
            className="mb-2"
            placeholder="작성자"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Button onClick={handleSubmit}>작성</Button>
        </Card.Body>
      </Card>

      <Form.Control
        className="mb-4"
        placeholder="검색 (제목/내용/작성자)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {paginatedPosts.map((post) => (
        <Card className="mb-3" key={post.id}>
          <Card.Body>
            {editId === post.id ? (
              <>
                <Form.Control
                  className="mb-2"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <Form.Control
                  as="textarea"
                  className="mb-2"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                <Button
                  variant="success"
                  className="me-2"
                  onClick={() => handleUpdate(post.id)}
                >
                  저장
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setEditId(null)}
                >
                  취소
                </Button>
              </>
            ) : (
              <>
                <h5>{post.title}</h5>
                <p>{post.content}</p>
                <small className="text-muted">작성자: {post.author}</small>
                <div className="mt-2">
                  <Button
                    size="sm"
                    className="me-2"
                    onClick={() => {
                      setEditId(post.id);
                      setEditTitle(post.title);
                      setEditContent(post.content);
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(post.id)}
                  >
                    삭제
                  </Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      ))}

      {totalPages > 1 && (
        <Pagination className="justify-content-center">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Pagination.Item
              key={idx}
              active={page === idx + 1}
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </Container>
  );
}
