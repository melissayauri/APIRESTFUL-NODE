let route = 'https://api.github.com/users/melissayauri/repos',
options={}
fetch(route, options)
.then(res =>res.json())
.then(res => console.log(res))
.catch(err => console.log(err))
/*METODOS */
//get-lectura
//post- inserción
//put- actualización
//delete

let route = 'https://api.github.com/users/melissayauri/repos',
options={
    method:'POST'
    
}
fetch(route, options)
.then(res =>res.json())
.then(res => console.log(res))
.catch(err => console.log(err))
//{message: "Not Found", documentation_url: "https://developer.github.com/v3"}


//
let route = 'https://api.github.com/user/repos',
options={
    method:'POST'
    
}
fetch(route, options)
.then(res =>res.json())
.then(res => console.log(res))
.catch(err => console.log(err))


/*CABECERAS */
let route = 'https://api.github.com/users/melissayauri/repos',
data={repo:'nuevo-repo',}
options={
    method:'GET',
    headers:{
        'Content-Type':'application/json'
    },
    //convierte a cadanea
    body:JSON.stringify(data)
    
}
fetch(route, options)
.then(res =>res.json())
.then(res => console.log(res))
.catch(err => console.log(err))