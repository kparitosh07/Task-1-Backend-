const express = require('express');
const app = express();
const PORT = 3000;


let events = [];
let eventId = 1;


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
      title: "Event Ticket platform",
      message: "Use postman to test the API"
    });
});

app.post("/events",(req,res)=>{
    const {title,venue,date,noOfTickets,price} = req.body;

    const event = {
        id: eventId++,
        title,
        venue,
        date,
        noOfTickets,
        availableTkt: noOfTickets,
        price
    };

    events.push(event);

    res.status(201).json(event);
});

app.get("/events", (req, res) => { 
    res.status(200).json({events}); 
});


app.put("/events/:id",(req,res)=>{
    const id = Number(req.params.id);

    const event = events.find(e => e.id === id);

    if(!event){
      return res.status(404).json({
        alert: "event not found"
      });
    }

    const {title,venue,date,noOfTickets,availableTkt} = req.body;

    const bookedTicket = event.noOfTickets - event.availableTkt;

    if (noOfTickets <= 0) {
      return res.status(404).json({ message: "Total ticket must be greater than 0" });
    }

    if (noOfTickets < bookedTicket) {
       return res.status(400).json({ message: `Total tickets cannot be less than ${bookedTicket}` }); 
    }

    event.title = title;
    event.venue = venue;
    event.date = date;
    event.noOfTickets = noOfTickets;
    event.availableTkt = noOfTickets - bookedTicket;

    res.status(200).json({
      message: "event updated successfully",
      event
    });
});

app.get("/events/:id", (req, res) => {
    const id = Number(req.params.id);
    const event = events.find(e => e.id === id);
    res.status(200).json(event); 
});


app.delete('/events/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  const initialLength = events.length;
  events = events.filter(exp => exp.id !== id);
  
  if (events.length === initialLength) {
    return res.status(404).json({ message: "event not found" });
  }
  
  res.status(200).json({ message: `Event ${id} deleted` });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});