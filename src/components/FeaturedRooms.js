import React, { Component } from "react";
import { RoomContext } from "../Context";
import { Room } from "./Room";
import { Loading } from "./Loading";
import { Title } from "./Title";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRoom: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-room">
        <Title title="fetaured room" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
