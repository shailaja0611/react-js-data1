import React, { useState } from 'react';
import TicketForm from './TicketForm';

const App = () => {
  const [tickets, setTickets] = useState([]);

  const addTicket = (ticket) => {
    setTickets((prev) => [...prev, { ...ticket, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Support Ticket System</h1>
      <TicketForm addTicket={addTicket} />
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <h3>{ticket.subject}</h3>
            <p>{ticket.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
