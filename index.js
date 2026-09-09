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
        price
    };

    events.push(event);

    res.status(201).json(event);
});

app.get("/events", (req, res) => { 
    res.status(200).json({events}); 
});





app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});