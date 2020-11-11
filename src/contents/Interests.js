import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "react-elastic-carousel";


import Item from './item';

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
]


export default class Interests extends Component {
    constructor(props){
        super (props);
        this.state={
            images: ["bg-1.jpg",
                    "bg-2.jpg",
                    "bg-3.jpg", 
                    "bg-4.png",
                    "profile.jpg"
                    ],
            hanging: [
                "hsn.JPG",
                "pondi.JPG",
                "pongal.JPG",
                "anisha.jpg",
                "children.jpg",
                "hsn_2.JPEG",
                "amelie.jpg",
                "Kolar.jpg"
            ],
            pet: [
                "orange.jpg"
            ],

            read: [
                "collec.JPG",
                "johngreen.JPG",
                "nook1.JPG",
                "me2.jpg",
                "stack1.JPG",
                "history.JPG",
                "kindle.JPG"
            ],
            drawing: [
                "journal.JPG",
                "canvas.jpg"
            ]

        };
    }
    render() {
        return (<div>
            <h3> Reading </h3>
            <Carousel breakPoints={breakPoints}>
                {this.state.read.map(item => (
                    <Item><img class="hanging-out" src={require(`../img/books/${item}`)}/></Item>
                ))}
            </Carousel>
            <h3> Drawing </h3>
            <Carousel breakPoints={breakPoints}>
                {this.state.drawing.map(item => (
                    <Item><img class="hanging-out" src={require(`../img/drawing/${item}`)}/></Item>
                ))}
            </Carousel>
            <h3>Hanging out (?)</h3>
            <Carousel breakPoints={breakPoints}>
                {this.state.hanging.map(item => (
                    <Item><img class="hanging-out" src={require(`../img/hanging_out/${item}`)}/></Item>
                ))}
            </Carousel>
            <h3> Playing with my hamsters </h3>
            <Carousel breakPoints={breakPoints}>
                {this.state.pet.map(item => (
                    <Item><img class="hanging-out" src={require(`../img/hamster/${item}`)}/></Item>
                ))}
            </Carousel>

        </div>)
    }
}
