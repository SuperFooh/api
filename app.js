// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const errors = require('http-errors')
const logger = require('morgan');
const glob = require('glob')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//manejando CORS --> ver como implementar el middleware instalado como dependencia
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization');
    if (res.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET, PATCH');
        return res.status(200).json({})
    }
    next();
})
// app.use(cookieParser());
app.use('./login' , express.static(path.join(__dirname, 'public')));

//manejo de enrutamiento primario
const rootRouter = glob.sync('**/*.js', { cwd: `${__dirname}/routes` })
    .map(filename => ({ instance : require(`./routes/${filename}`), base : filename.slice(0,filename.indexOf('.') - 5)})) //traemos todas las rutas del directorio routes
    .filter(item => Object.getPrototypeOf(item.instance) === express.Router) //nos fijamos que todas las rutas esten exportando una instancia de express.Router()
    .reduce((rootRouter, router) => (rootRouter.use(`/${router.base}`, router.instance)), express.Router())
app.use(rootRouter)


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
});

module.exports = app;
