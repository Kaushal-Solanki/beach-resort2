import React from "react";
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";
import { WithRoomConsumer } from "../Context";
import { Loading } from "./Loading";

const RoomsContainer = ({ context }) => {
  const { loading, sortedRoom, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRoom} />
    </>
  );
};

export default WithRoomConsumer(RoomsContainer);
