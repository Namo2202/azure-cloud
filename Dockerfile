FROM node:14

RUN apt-get update && apt-get install -y default-mysql-client

WORKDIR /app

COPY MyNetWork/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "mysql -h azureh3.mysql.database.azure.com -u namo -p Nafise2202 -D azureH3 < ./MyNetWork-db/init.sql && npm start"]