import React, { useState, useEffect } from 'react'
import { Button, Rate, ButtonToolbar, Drawer, Progress, TagGroup, Tag, Notification } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import Cards from './Cards'
import { Image } from 'react-bootstrap';
import { GiBodyHeight, GiWeight } from "react-icons/gi";

const Details = (props) => {
    const [show, setShow] = useState(() => false)
    const [theme, setTheme] = useState(() => "rgb(26, 28, 34)")
    const { Line } = Progress;

    useEffect(() => {
        document.body.style.backgroundColor == "rgb(26, 28, 34)" ? setTheme((prev) => prev = "white") : console.log("fffff");
        console.log("99999999999999999999");
    }, [document.body.style.backgroundColor])

    function open(funcName) {
        Notification[funcName]({
            title: funcName == "success" ? "Hero 😇" : "Villain 😈",
            description: <h1 style={{ width: 320 }} rows={3} />
        });
    }

    const close = () => {
        Notification.closeAll();
        setShow(prevShow => prevShow = false)
    }

    const toggleDrawer = () => {
        setShow(prevShow => prevShow = true)
        props.all.alignment == "good" ? open('success') : open('error')

    }

    const textStyle = {
        verticalAlign: 'top',
        lineHeight: '42px',
        display: 'inline-block'
    };
    const rate = (r) => {
        if (r < 50) return "red"
        if (r < 80) return "yellow"
        return "green"
    }
    return (
        <div>
            <ButtonToolbar>
                <Cards
                    all={props.all}
                    toggleDrawer={() => toggleDrawer}
                ></Cards>
            </ButtonToolbar>
            <Drawer

                show={show}
                onHide={close}
            >
                <div id='drawer' style={{ backgroundColor: document.body.style.backgroundColor, color: theme }}>
                    <Drawer.Header style={{ display: "inline-block" }}>
                        <Image style={{ float: "left" }} width="100px" src={props.all.image} thumbnail />
                        <Drawer.Title>{props.all.fullName}<br /><br /> <TagGroup>
                            <Tag color={props.all.gender == 'Male' ? "green" : "red"}>{props.all.gender}</Tag>
                        </TagGroup>
                        </Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body style={{ height: "50%" }}>
                        Intelligence: <Line percent={props.all.intelligence} strokeColor={rate(props.all.intelligence)} />
                    Strength: <Line percent={props.all.strength} strokeColor={rate(props.all.strength)} />
                    Speed: <Line percent={props.all.speed} strokeColor={rate(props.all.speed)} />
                    Power: <Line percent={props.all.power} strokeColor={rate(props.all.power)} />
                    Combat: <Line percent={props.all.combat} strokeColor={rate(props.all.combat)} />
                        <div id="hw">
                            <GiBodyHeight />
                            {props.all.height}
                            <GiWeight style={{ marginLeft: "300px" }} />
                            {props.all.weight}
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button onClick={close} appearance="primary">Confirm</Button>
                        <Button onClick={close} appearance="subtle">Cancel</Button>
                    </Drawer.Footer>
                </div>
            </Drawer>
        </div >

    );
}

export default Details;