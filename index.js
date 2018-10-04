const Koa = require('koa');
const koaRouter = require('koa-router')
const path = require('path');
const render = require('koa-ejs');
const serve = require('koa-static');

// Init App
const app = new Koa();
const router = new koaRouter();

app.use(serve(path.join(__dirname, 'public')));

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false
})

// Index
router.get('/', async ctx => {
    await ctx.render('index');
})

app.use(router.routes()).use(router.allowedMethods());

// Start Server
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
