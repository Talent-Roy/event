import React from "react";
import { BiCalendarAlt } from "react-icons/bi";

const EventDates = () => {
  return (
    <section class="mt-5 event_dates">
      <div class="container">
        <div class="table-responsive">
          <table class="event_calender table">
            <thead class="event_title">
              <tr>
                <th>
                  <BiCalendarAlt className="icon" size={30} />
                  <span className="p-3 text-capitalize fs-5">
                    next events calendar
                  </span>
                </th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img src={require("./assets/imgs/hero.jpg")} alt="event" />
                </td>
                <td class="event_date">
                  14
                  <span>February</span>
                </td>
                <td>
                  <div class="event_place">
                    <h5>Conference in Port harcourt</h5>
                    <h6>08 AM - 04 PM</h6>
                    <p>Speaker: Daniel Hill</p>
                  </div>
                </td>
                <td>
                  <a href="#" class="table_btn btn-rounded">
                    Read More
                  </a>
                </td>
                <td class="buy_link">
                  <a href="#">buy now</a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src={require("./assets/imgs/countdown.jpg")}
                    alt="event"
                  />
                </td>
                <td class="event_date">
                  18
                  <span>February</span>
                </td>
                <td>
                  <div class="event_place">
                    <h5>Conference in Lagos</h5>
                    <h6>08 AM - 04 PM</h6>
                    <p>Speaker: Daniel Hill</p>
                  </div>
                </td>
                <td>
                  <a href="#" class=" table_btn btn-rounded">
                    Read More
                  </a>
                </td>
                <td class="buy_link">
                  <a href="#">buy now</a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={require("./assets/imgs/insta.jpg")} alt="event" />
                </td>
                <td class="event_date">
                  22
                  <span>February</span>
                </td>
                <td>
                  <div class="event_place">
                    <h5>Conference in Abuja</h5>
                    <h6>08 AM - 04 PM</h6>
                    <p>Speaker: Daniel Hill</p>
                  </div>
                </td>
                <td>
                  <a href="#" class=" table_btn btn-rounded">
                    Read More
                  </a>
                </td>
                <td class="buy_link">
                  <a href="#">buy now</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EventDates;
