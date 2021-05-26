# FLA-POSTQSL
Práctica 1 Seguridad en el Desarrollo de Aplicaciones

En esta práctica se utilizaron 3 frameworks distintos, asi como una base de datos creada en PostgreSQL.

############### ADONIS ###############

- Para poder hacer funcionar a Adonis lo primero que hay que hacer es crear un nuevo archivo .env en la raíz del proyecto.
- Despues se copia el ejemplo del .env.example y configura tu aplicación (en este caso solo el tipo de conexión que usarás y los datos de la base de datos).
- La conexión será 'pg' dentro de la variable 'env.DB_CONNECTION' y un ejemplo de las configuraciones viene en el archivo /config/databases en la conexión a PostgreSQL.
- Después debes ejecutar el comando "adonis key:generate" para que la applicación tenga su llave personal.
- A continuación se ejecuta el comando "npm install".
- Después instalar la libreria para gestionar PostgreSQL con el comando "npm i pg"
- Para iniciar el servidor se inicia el siguiente comando "adonis serve --dev".

 Para correr una migración el comando es "adonis migration:run" y si deseas crear una migración nueva el comando es "adonis make:migration nombre_tabla_plural".
 
 
EJEMPLO DE UNA CONFIGURACION A LA BD:

DB_CONNECTION=pg

DB_HOST=127.0.0.1

DB_PORT=5432

DB_USER=postgres

DB_PASSWORD=Anioah123

DB_DATABASE=tarea1
 
 ############### LARAVEL ###############
 
- Para poder hacer funcionar a Adonis lo primero que hay que hacer es crear un nuevo archivo .env en la raíz del proyecto.
- Despues se copia el ejemplo del .env.example y configura tu aplicación (en este caso solo el tipo de conexión que usarás y los datos de la base de datos).
- La conexión será 'pgsql' dentro de la variable 'env.DB_CONNECTION' y un ejemplo de las configuraciones viene en el archivo /config/databases en la conexión a PostgreSQL.
- Antes de instalar la libreria de la base de datos debemos instalar el Vendor con el comando "composer install".
- Para iniciar el servidor se corre el siguiente comando "php artisan serve"

 Para correr una migración el comando es "php artisan migrate" y si deseas crear una migración nueva el comando es "php artisan make:migration nombre_tabla_plural".
 
 
EJEMPLO DE UNA CONFIGURACION A LA BD:

DB_CONNECTION=pgsql

DB_HOST=127.0.0.1

DB_PORT=5432

DB_DATABASE=tarea1

DB_USERNAME=postgres

DB_PASSWORD=Anioah123
 
 ############### FLASK ###############
 
 - En este caso la aplicación ya se encuentra totalmente configurada para conectarse a la bd con las dependencias necesarias. solo se debe hacer lo siguiente:
 - En consola a nivel raiz del proyecto escribir "FLASK_APP=nombre_archivo_a_iniciar" ejemplo: "FLASK_APP=app"
 - Después se selecciona el entorno en que se habilitará la aplicación, en este caso puede ser en "development". Se utiliza el siguiente comando:
 - "FLASK_ENV=development"
 - Para finalizar, se activa el servidor con el comando "flask run"

EJEMPLO DE UNA CONFIGURACION A LA BD:

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Anioah123@localhost/tarea1'
