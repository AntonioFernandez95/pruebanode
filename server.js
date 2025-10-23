//corazón de express

// Importar el módulo de Express
import express from "express";
//import cors from "cors";

// Configurar CORS para permitir solicitudes desde cualquier origen
// Crear una instancia de la aplicación Express
const app = express();
// Middleware para poder procesar datos en formato JSON
app.use(express.json());
//app.use(cors());
// Definir una ruta básica (endpoint) de prueba
app.get("/", (req, res) => {
res.send("Servidor Express funciona calidad. Todo perfecto");
});
/*app.get('/usuario', (req, res) => {
const usuario = { id: 1, nombre: 'Carlos', rol: 'admin' };
res.json(usuario);
});*/

app.get('/usuario/', (req, res) => {
    //const id=req.params.id;;
const usuario = { id: 1, nombre: 'Carlos', rol: 'admin' };
res.json(usuario);
});
//http://localhost:3000/buscar?nombre=Antonio&edad=30
app.get('/buscar', (req, res) => {
const nombre = req.query.nombre;
const edad = req.query.edad;
res.send(`Buscando usuario: ${nombre}, edad: ${edad}`);
});

// Ruta POST
app.post('/nuevo', (req, res) => {
res.send('Has hecho una petición POST');
});
// Ruta PUT
app.put('/actualizar', (req, res) => {
res.send('Has hecho una petición PUT');
});
// Ruta DELETE
app.delete('/borrar', (req, res) => {
res.send('Has hecho una petición DELETE');
});

app.get("/hola", (req, res) => {
res.send("hola que tal");
});
// Definir el puerto donde escuchará el servidor
const PORT = 3000;
// Iniciar el servidor y escuchar peticiones en el puerto definido
app.listen(PORT, () => {
console.log(`✅ Servidor en ejecución: http://localhost:${PORT}`);
});