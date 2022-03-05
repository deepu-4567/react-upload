import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ImageRendering.css";

export class ImageRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        {
          url: "image1.jpg",
          ready: false,
          error: false,
        },
      ],
    };
  }
  render() {
    let { ready } = this.state;
    return (
      <div className="img-rendrng">
        <Container className="py-5">
          <Row>
            <Col xs={9} sm={9} md={6} lg={10} xl={10}>
              <div>
                {!ready ? (
                  <img
                    className="img"
                    src="https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91iKhzu-4c2hPFN.jpg"
                    alt="img"
                  />
                ) : (
                  ""
                )}
                {!ready ? (
                  <img
                    className="img"
                    src="https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICb.jpg"
                    alt="img"
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                {!ready ? (
                  <i class="fas fa-exclamation-triangle fa-2x text-danger"></i>
                ) : (
                  <img
                    className="img"
                    src="https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91j5-eCEW5j1nOY.jpg"
                    alt="img"
                  />
                )}
                {!ready ? (
                  ""
                ) : (
                  <img
                    className="img"
                    src="https://cdn.quicksell.co/-LfPe0CWGEWcVYQTYbDw/products/-MVpx91hJWM9aEdBMICd.jpg"
                    alt="img"
                  />
                )}
              </div>
            </Col>
            <Col xs={3} sm={3} md={6} lg={2} xl={2}>
              <div>
                <i className="fas fa-exclamation-triangle fa-2x text-light bg-danger"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImageRendering;
