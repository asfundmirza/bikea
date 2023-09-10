//sk_test_51NodJrAdcivc1ys1DF5snuMJKFeGJIjx7qaymbknOI4QRS9Y6lpm0bKPXonOQR3p1bjkSFcWiPr52ZEs2XchF7ut002PORE8kR
//Aero:price_1NodRWAdcivc1ys1jTk6jgp4
//Aero  X:price_1NodSsAdcivc1ys14H7I0ajE

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NodJrAdcivc1ys1DF5snuMJKFeGJIjx7qaymbknOI4QRS9Y6lpm0bKPXonOQR3p1bjkSFcWiPr52ZEs2XchF7ut002PORE8kR"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("listening on port 4000!"));
