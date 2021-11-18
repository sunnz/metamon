import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { intervalToDuration } from "date-fns";
import { useState } from "react";
import parrotGif from "../public/parrot.gif";

// the date to count down to
const end = new Date("2021-12-11T12:25+11:00");

// generate some static durations for testing
const startBefore = new Date("2021-11-13T23:00+11:00");
const startAfter = new Date("2022-01-18T10:00+11:00");
const durationBefore = intervalToDuration({ start: startBefore, end });
const durationAfter = intervalToDuration({ start: startAfter, end });

const Home: NextPage = () => {
  // countdown every second via setTimeout()
  const [start, setStart] = useState(new Date());
  const { days, hours, minutes, seconds } = intervalToDuration({ start, end });
  setTimeout(() => setStart(new Date()), 990);

  // still counting down?
  const isCountingDown = start < end;

  return (
    <div style={{ marginTop: "40vh" }}>
      <Head>
        <title>countdown for metamon!</title>
        <link rel="icon" href="/parrot.gif" type="image/gif" />
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
            <p className="text-muted">
              {isCountingDown ? (
                <>to go!</>
              ) : (
                <>
                  <Image src={parrotGif} alt="yes!" height={50} width={50} />
                  <Image src={parrotGif} alt="yes!" height={50} width={50} />
                  <Image src={parrotGif} alt="yes!" height={50} width={50} />
                  <Image src={parrotGif} alt="yes!" height={50} width={50} />
                  <Image src={parrotGif} alt="yes!" height={50} width={50} />
                  metamon&apos;s here!
                </>
              )}
            </p>
          </Col>
        </Row>
      </Container>

      {false && (
        <Container>
          <Row>
            <Col>
              before:
              <pre>{JSON.stringify(durationBefore, null, 2)}</pre>
            </Col>
            <Col>
              after:
              <pre>{JSON.stringify(durationAfter, null, 2)}</pre>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Home;
