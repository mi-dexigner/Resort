import React, { Component } from 'react'
import Title from "./Title";
import { RoomContext } from "../context";


export default class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        let {value} = this.context;
        return (
        <section className="featured-rooms">
        <Title title="featured rooms" />
           
      </section>
        )
    }
}
