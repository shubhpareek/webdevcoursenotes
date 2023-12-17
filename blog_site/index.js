import express from "express";
import path from 'path';
import bodyParser from "body-parser";
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
var blogList = [new Blog("demo","nothing","data ")]

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('frontPage',{blogList});
})
app.post('/',(req,res)=>{
    console.log(req.body);
    const {title , data }  = req.body ;
    console.log(data);
    if(data!=undefined )
    {
    // Create a new Date object
    const currentDate = new Date();

    // Get various components of the current date
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
   let date = '' ;
   date = year+" "+month+" "+day ;
    blogList.push(new Blog(title,date,data));
        }
        else
        {
            let index = -1;
            for(let i=0;i<blogList.length;i++)
            {
                if(blogList[i].title == title)
                {
                    index = i;
                    break;
                }
                index = -1;
            }

        // Remove the element at the found index
        if (index !== -1) {
        blogList.splice(index, 1);
        }

        }

    res.render('frontPage',{blogList});
})

app.get('/create',(req,res)=>{
    res.render('createPage');
})
app.get('/remove',(req,res)=>{
    res.render('removePage');
})

app.listen(3000 ,() => {
  console.log(`Server is running on port 3000`);
});