import React from "react";

const Profile = ({ user, userBookings }) => {
  return (
    <div>
      <h1>{user.name}</h1>

      <h1>My Bookings:</h1>
      {userBookings.map((booking) => (
        <h2>
          Booked on {booking.date} at {booking.time}.
        </h2>
      ))}
      <p>
        Please ensure you have received a confirmation message from Joe prior to
        the session time and communicated to arrange destination if required.
      </p>
    </div>
  );
};

export default Profile;
