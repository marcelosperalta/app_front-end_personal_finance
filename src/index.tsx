import React from 'react';
import ReactDOM from 'react-dom';

import { createServer, Model } from "miragejs";

import { App } from './App';

createServer({

  models: {
    transaction: Model,

  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          description: "Job as Freelancer",
          type: "deposit",
          category: "Development",
          amount: 2000,
          createdAt: new Date('2021-10-10 09:00:00'),
        },
        {
          id: 2,
          description: "Rent",
          type: "withdraw",
          category: "Home",
          amount: 1000,
          createdAt: new Date('2021-10-15 09:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);