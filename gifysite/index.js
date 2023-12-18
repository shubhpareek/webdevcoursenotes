import express from "express";
import path from 'path';
import bodyParser from "body-parser";
import axios from "axios";
const app = express();
const port = 3000;
const __dirname = path.resolve();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Require static assets from public folder
app.use(express.static(path.join(__dirname, 'public')));
class Blog {
  constructor(title, date, data) {
    this.title = title;
    this.date = date;
    this.data = data;
  }

}

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// set the view engine to ejs
app.set('view engine', 'ejs');

const params={
    tag: 'cats',
    rating: 'g'

};
const key ='Tl69cEYdgniEHjcgzT537k40nqvIpzib' ;
app.get('/',async (req,res)=>{
    const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key='+key,{params})
    console.log(response);
    console.log("this is the response");
    const LinkGif = response.data.data.embed_url;
    console.log(LinkGif);
    res.render('mainPage',{LinkGif});
})
app.post('/',async (req,res)=>{
    const response = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=Tl69cEYdgniEHjcgzT537k40nqvIpzib',{params})
    console.log(response);
    console.log("this is the response");
    const LinkGif = response.data.data.embed_url;
    console.log(LinkGif);
    res.render('mainPage',{LinkGif});
})


app.listen(3000 ,() => {
  console.log(`Server is running on port 3000`);
});