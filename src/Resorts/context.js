import React, { Component } from 'react'
import items from "./data";

const RoomContext = React.createContext();
// RoomContext.Provider value={}

export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        //
        type: "all",
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
      }; 
   // getData
  componentDidMount() {
      let rooms = this.formatData(items)
     
  }
  formatData(items){
    let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        console.log(images);
        let room = { ...item.fields, images, id };
        return room;
      });
      return tempItems;
  }
    render() {
        return  <RoomContext.Provider value={{...this.state}}>
            {this.props.children}
        </RoomContext.Provider>
    }
}

const RoomConsumer = RoomContext.Consumer;

export {RoomProvider,RoomConsumer,RoomContext};