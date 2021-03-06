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
                "orange.jpg",
                "plants.jpg",
                "sleepy.jpg",
                "babies.jpg",               
                "cozy.JPG",
                "mewithhim.JPG",
                "meagain.JPG",
                "mcd.jpg"
                
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
                "cat_pizza.JPG",
                "fallen_angel.JPG",
                "broken_wings.JPG",
                "eternal_state.JPG",
                "her.JPG",
                "she_wolf.JPG",
                "scraf_dude.JPG",
                "cute.JPG",
                "cry_river.JPG"
            ],
            gaming: [
                "wii.JPG",
                "cds.JPG",
                "psp.JPG",
                "tombraider.jpg",
                "shadow.jpg",
                "ghostofsparta.jpg",
                "godofwar.jpg",
                "locoroco.jpg"

            ]

        };
    }
    render() {
        return (<div>
            <center><h1>INTERESTS</h1></center>
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
            <h3>Gaming</h3>
            <Carousel breakPoints={breakPoints}>
                
                {this.state.gaming.map(item => (
                    <Item><img class="hanging-out" src={require(`../img/gaming/${item}`)}/></Item>
                ))}
            </Carousel>
            <h3>Spending time with friends</h3>
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
