<p align="center">
  <a href="#" target="blank"><img src="public/assets/f0dc00c78ee7f84de43205dcd80c424e-removebg-preview(1).png" width="200" alt="Metabee" /></a>
</p>

## Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener Nes CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```
5. Clonar archivo __.env.template__ y renombrar la copia ```.env```

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicación en dev
```
npm run start:dev
```

## Stack usado
* MongoDB
* Nest
