import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../../api";
import Comment from "./Comment";
import CommentAddForm from "./CommentAddForm";

function Comments({ portfolioOwnerId, userState }) {
  const [comments, setComments] = useState([]);

  
  useEffect(() => {
    // GET 요청, 세팅
    Api.get("comment/readComment", portfolioOwnerId).then((res) => setComments(res.data));
  }, [portfolioOwnerId]);
  

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-start">방명록</Card.Title>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            setComments={setComments}
            isEditable={comment.writer_id === userState.user?.id}
          />
        ))}
        {
          <CommentAddForm
            portfolioOwnerId={portfolioOwnerId}
            setComments={setComments}
          />
        }
      </Card.Body>
    </Card>
  );
}

export default Comments;
