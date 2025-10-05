import express from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 3040;
const __dirname = path.resolve();


app.use(express.static('public'));




const posts = [


    {

        id: '1',
        new_post: "This is my first post.",
        important: "true",

    },

    {

        id: "2",
        new_post: "This is my second post",
        important: "true",


    },

    {

        id: "3",
        new_post: "This is my third post.",
        important: "true",
    }


];







app.get('/', (request, response) => {

    

  response.sendFile(path.join(__dirname, 'public', 'Home.html') );

});


app.get('/About', (request, response) => {

response.sendFile(path.join(__dirname, 'public', 'Users', 'sign-up.html'));

});


app.get('/users/posts', (request, response) => {

    response.json(posts);

});


app.listen(port,'0.0.0.0', () => {

    console.log(`Server is running on port ${port}.`);

});