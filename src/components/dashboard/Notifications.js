import React from "react";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-2 orange darken-1">
        <div className="card-content">
          <span className="card-title white-text">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="black-text">{item.user} </span>
                    <span className="white-text"> {item.content} </span>
                    <div className="note-date">
                      {" "}
                      {item.time
                        .toDate()
                        .toString()
                        .slice(0, 25)}{" "}
                    </div>
                    <br />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
