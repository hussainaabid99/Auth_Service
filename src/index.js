const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const db = require('./models/index');


// const UserService = require('./services/user-service');

const prepareAndStartServer = () => {

          app.use(bodyParser.json());
          app.use(bodyParser.urlencoded({ extended: true }));

          app.use('/api', apiRoutes);

          app.listen(PORT, async () => {
                    console.log(`Server Started on Port: ${PORT}`);
                    if (process.env.DB_SYNC) {
                              db.sequelize.sync({ alter: true });
                    }


                    // const service = new UserService();
                    // // const newToken = service.createToken({ email: 'sanket@admin.com', id: 1 });
                    // // console.log('New token is', newToken);
                    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbmtldEBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNjkzMTI3MzM4LCJleHAiOjE2OTMxMjczNjh9.hDyOC1cj5Oj8DFIyODe1mulJEPDm4kd3srg5hAFj5gw';
                    // const response = service.verifyToken(token);
                    // console.log(response);
          });
}

prepareAndStartServer();