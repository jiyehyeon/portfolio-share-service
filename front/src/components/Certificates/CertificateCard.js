import { Card, Button, Row, Col } from "react-bootstrap";
import * as Api from "../../api";

const CertificateCard = ({ certificate, isEditable, setIsEditing }) => {
  const certificatetDelete = () => {
    Api.delete("certificate/delete", {
      id: "",
    });
  };

  console.log(certificate);
  return (
    <Card.Text>
      <Row className="align-items-center">
        <Col>
          {certificate.title}
          <br />
          <span className="text-muted">{certificate.description}</span>
          <br />
          <span className="text-muted">
            {certificate.when_date.substring(0, 10)}
          </span>
        </Col>
        {isEditable && (
          <Col xs lg="1">
            <Button
              variant="outline-info"
              size="sm"
              onClick={() => setIsEditing((prev) => !prev)}
              className="mr-3"
            >
              편집
            </Button>
          </Col>
        )}

        <Col xs lg="1">
          <Button
            onClick={certificatetDelete}
            variant="outline-danger"
            size="sm"
            className="mr-3"
          >
            삭제
          </Button>
        </Col>
      </Row>
    </Card.Text>
  );
};

export default CertificateCard;
