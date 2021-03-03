const { render } = require("ejs");

module.exports = (server) =>{

    server.get('/', (req, res)=>{
        res.render('index');
    });

    server.get('/login', (req, res)=>{
        res.render('login');
    });

    server.get('/signup', (req, res)=>{
        res.render('signup');
    });

    server.get('/buykit', (req, res)=>{
        res.render('shop');
    });

    server.get('/buykit/:dnakit', (req, res)=>{
        res.render('item');
    });

    server.get('/dashboard/kits', (req, res)=>{
        res.render('app/dashboard');
    });

    server.get('/admin/dashboard/', (req, res)=>{
        res.render('app/admin/orders');
    });

    server.get('/admin/dashboard/kits', (req, res)=>{
        res.render('app/admin/kits');
    });

    server.get('/admin/dashboard/results', (req, res)=>{
        res.render('app/admin/results');
    });

    server.get('/admin/dashboard/lab', (req, res)=>{
        res.render('app/admin/lab');
    });

    server.get('/dashboard', (req, res)=>{
        res.render('app/user/kits');
    });

    server.get('/dashboard/records', (req, res)=>{
        res.render('app/user/records');
    });

    server.get('/dashboard/notifications', (req, res)=>{
        res.render('app/user/notifications');
    });



}