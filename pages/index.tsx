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
  const [now, setNow] = useState(new Date());
  const { days, hours, minutes, seconds } = intervalToDuration({
    start: now,
    end,
  });
  setTimeout(() => setNow(new Date()), 990);

  return (
    <div>
      <Head>
        <title>countdown</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="header">metamon</h1>
        <Alert variant="primary">metamon</Alert>
      </Container>

      <Container className="fs-1">
        <Row>
          <Col>{days}</Col>
          <Col>{hours}</Col>
          <Col>{minutes}</Col>
          <Col>{seconds}</Col>
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
