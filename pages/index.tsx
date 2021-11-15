import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { intervalToDuration } from "date-fns";
import { useState } from "react";

const startBefore = new Date("2021-11-13T23:00+11:00");
const startAfter = new Date("2022-01-18T10:00+11:00");
const end = new Date("2021-12-11T12:25+11:00");

const duration1 = intervalToDuration({ start: startBefore, end });
const duration2 = intervalToDuration({ start: startAfter, end });

const Home: NextPage = () => {
  // countdown every second via setTimeout()
  const [start, setStart] = useState(new Date());
  const { days, hours, minutes, seconds } = intervalToDuration({ start, end });
  setTimeout(() => setStart(new Date()), 990);

  return (
    <div style={{ marginTop: "40vh" }}>
      <Head>
        <title>countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="w-75">
        <Row>
          <Col>
            <span className="fs-1">{days}</span>
            <small className="text-muted">days</small>
          </Col>
          <Col>
            <span className="fs-1">{hours}</span>
            <small className="text-muted">hours</small>
          </Col>
          <Col>
            <span className="fs-1">{minutes}</span>
            <small className="text-muted">minutes</small>
          </Col>
          <Col>
            <span className="fs-1">{seconds}</span>
            <small className="text-muted">seconds</small>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted">to go!</p>
          </Col>
        </Row>
      </Container>

      <Container className="d-none">
        <Row>
          <Col>
            before:
            <pre>{JSON.stringify(duration1, null, 2)}</pre>
          </Col>
          <Col>
            after:
            <pre>{JSON.stringify(duration2, null, 2)}</pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
