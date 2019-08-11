const c = console.log,
app= require('./app')
db= require('./models/db')

app.listen(
    app.get('port'),
    ()=>c(`iniciando api restful en el puerto ${app.get('port')}`)
)

//console.log(process.env)

c(
    '*********variables de entorno****\n',
    process.env.NODE_ENV,
    '\n',
    process.env.URL_BD,
    '\n',
    process.env.PORT,
    '\n*****variables de entorno****'
)