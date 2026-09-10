# 🎟️ Event Ticketing Platform API

A RESTful **API** for an **Event Ticketing Platform** built using **Node.js** and **Express.js**.

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman

## ⚙️ Setup

```bash npm install node index.js ```

Server runs at:

```text [http://localhost:**3000**](http://localhost:**3000**) ```

## 📌 API Endpoints

### 1. Check API

**GET** `/`

**Status:** `**200** OK`

```json
{
    *title*: *Event Ticket platform*,
    *message*: *Use postman to test the **API***
}
```

### 2. Create Event

**POST** `/events`

**Status:** `**201** Created`

**Body:**

```json
{
    *title*: *Tech Fest **2026***,
    *venue*: *College Auditorium*,
    *date*: ***2026**-10-15*,
    *noOfTickets*: **500**,
    *price*: **299**
}
```

**Response:**

```json
{
    *id*: 1,
    *title*: *Tech Fest **2026***,
    *venue*: *College Auditorium*,
    *date*: ***2026**-10-15*,
    *noOfTickets*: **500**,
    *price*: **299**
}
```

### 3. Get All Events

**GET** `/events`

**Status:** `**200** OK`

Returns all currently created events.

## 📊 Progress

| Method | Endpoint      | Status    |
| ------ | ------------- | --------- |
| GET    | `/`           | ✅ Done    |
| POST   | `/events`     | ✅ Done    |
| GET    | `/events`     | ✅ Done    |
| GET    | `/events/:id` | ✅ Done    |
| PUT    | `/events/:id` | ✅ Done    |
| DELETE | `/events/:id` | ✅ Done    |