import React, { useState } from 'react';
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '@/styles/MngdITServics.module.css';
import icon1 from '../public/images/app-support.png'
import icon2 from '../public/images/help-desk.png'
import icon3 from '../public/images/software-plateform.png'
import icon4 from '../public/images/backend-process.png'
import icon5 from '../public/images/desktop-support.png'
import icon6 from '../public/images/server-support.png'
import icon7 from '../public/images/contact-center.png'
import icon8 from '../public/images/data-center.png'
import icon9 from '../public/images/network.png'


const ManagedITServics = () => {

    return (
        <>
            <section className={`${styles.manageITService} scroll scroll-service`} data-section-name="scroll-service">
                <Container>
                    <Row className={styles.manageITServiceRow}>
                        <Col xl={12}>
                            <div className={styles.manageITServ}>
                                <h2>Managed IT Services</h2>
                                <p>
                                    Globally, IT outsourcing is a well-proven and highly successful “managed services” business model. Crystallite can help you infuse<br />
                                    efficiency in your IT operations by providing End-to-End managed services of all network components vis-a-vis Routers,<br />
                                    Switches, LAN, Servers and Desktops, and value-added service networks like POS Network, ATM Network, SCADA
                                </p>
                            </div>
                        </Col>
                        <Col xl={12}>
                            <div className={styles.manageServc}>
                                <h5>WHAT CRYSTALLITE OFFERS</h5>
                            </div>
                            <div className={styles.manageServIcons}>
                                <Row className={styles.iconMainRow}>
                                    <Col xl={12}>
                                        <Row className={styles.iconRow}>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon1}
                                                        alt="Application_Support"
                                                    />
                                                    <p>Application Support</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon2}
                                                        alt="Help_Desk"
                                                    />
                                                    <p>Help Desk</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon3}
                                                        alt="Software_Platform"
                                                    />
                                                    <p>Software and Platform Services</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon4}
                                                        alt="Back_End_Processing"
                                                    />
                                                    <p>Back End Processing</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon5}
                                                        alt="Desktop_Support"
                                                    />
                                                    <p>Desktop Support</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl={12}>
                                        <Row className={styles.iconRow}>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon6}
                                                        alt="Server_Support"
                                                    />
                                                    <p>Server Support</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon7}
                                                        alt="Contact_Center"
                                                    />
                                                    <p>Contact Center</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon8}
                                                        alt="Data_Center"
                                                    />
                                                    <p>DR / Data Center</p>
                                                </div>
                                            </Col>
                                            <Col xl={2}>
                                                <div>
                                                    <Image
                                                        src={icon9}
                                                        alt="Network_Deployment"
                                                    />
                                                    <p>Network Deployment & Management</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ManagedITServics