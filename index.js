const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));

app.get('/', async(req, res) => {
    res.render('home');
})

app.post('/compute', (req, res) => {
    let objectList = [
        'boy',
        'kid',
        'child',
        'man',
        'woman',
        'girl'
    ]
    let indexOfObject = -1;
    let caption = req.body.caption.split(" ");

    for(let idx in caption) {
        if(objectList.includes(caption[idx])) {
            indexOfObject = idx;
            break;
        }
    }

    if(indexOfObject == -1) {
        return res.send(req.body.caption)
    } else {
        let leftPart = caption.slice(0, indexOfObject).join(' ')
        let rightPart = caption.slice(indexOfObject).join(' ')
        let finalCaption = `${leftPart} ${req.body.emotion} ${rightPart}`
        return res.send(finalCaption)
    }
})

app.listen(5000, () => console.log('server started'));