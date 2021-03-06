<h2 align="center">
  ChallengeJS 
  <img src="https://www.alkemy.org/assets/images/logo-header.png" alt="Alkemy" width="100" />
</h2>

---

# Tabla de Contenido - Index

1. [¿Qué es esto?](#what)
2. [Instalar y Correr la Aplicación](#run)
3. [Scripts Disponibles de este contenedor](#scripts)
4. [Explicación en Profundidad](#deep)
5. [Resumen Explicativo en Video, Continuación del Desafío](#video)
6. [Imagenes del Proyecto](#img)
7. [Bugs](#bugs)
8. [Licencia](#license)

---

### ¿Qué es esto? <a name="what"></a>

En el marco de el desafío <b>"Challenge JS"</b> sobre Javascript propuesto por <b>Alkemy</b>.
Este es un contenedor/workspace para la APP, la API y pruebas e2e.

[Alkemy](https://www.alkemy.org/) - - - [Alkemy Challenges](https://www.alkemy.org/challenges)

El desafío elegido es el de <b>"Challenge JS"</b>, que puede observarse en la web de challenges o también en el siguiente archivo PDF:

[ChallengeJS - PDF](ChallengeJS.pdf)

---

## Instalar y Correr la Aplicación <a name="run"></a>

1. En tu consola favorita coloca:

`git clone https://github.com/PeterDamianG/challengejs-alkemy.git`

2. En el lugar donde lo hayas descargado, nos movemos al directorio:

`cd challengejs-alkemy`

3. El siguiente paso consiste en instalar todas las dependencias del desarrollo:

`npm run install-all`

<b>Anotación:</b> Usando el sistema de workspace, todas las dependencias serán instalas juntas. Y además se pasará una bandera <b>--legacy-peer-deps</b>, para evitar problemas conocidos con <b>NPM</b> versión 7, es necesario tener la misma o superior. También el comando iniciara automaticamente, nuestro <b>ORM Prisma</b>.

4. Ahora necesitamos configurar el entorno, tanto para el backend como el frontend. Tienes dos opciones:

4.1 - Manualmente ir a la carpeta de <b>"frontend"</b> y la de <b>"backend"</b>. En ambas observaras un archivo <b>.env.example</b>. Tienes que borrar la extensión <b>.example</b> y que el archivo quede como <b>.env</b> con ese bastaría.

4.2 - Automaticamente con el siguiente comando, podría no funcionar en todos los sistemas operativos. (No funcionara en una <b>Mac - Apple</b>):

`npm run fix-env`

<b>Nota:</b> Es recomendable entender para que sirven los archivos de entorno <b>.env</b>

5. El siguiente paso consiste en construir la aplicación de <b>React</b>, que servira de <b>frontend</b>. Con el siguiente comando:

`npm run build-app`

6. El último paso es levantar nuestra API, en modo de desarrollo:

`npm run start-dev`

La aplicación comenzara a funcionar en [LocalHost](http://localhost:3001/).

---

## Scripts Disponibles de este contenedor <a name="scripts"></a>

### npm run prisma

Se encarga de inicializar el <b>ORM Prisma</b> Es para uso interno, no debería ser necesario su llamado individual.

### npm run install-all

Se encarga de instalar todas las dependencias de la <b>APP (FronEnd), API (BackEnd) y Cypress</b> de este contenedor. Es el comando que engloba todas las llamadas de instalación con el flag --legacy-peer-deps e inicialización del <b>ORM Prisma</b>, es el que se debería usar normalmente.

### npm run fix-env-api

Se encarga de reemplazar el nombre del archivo de entorno en la <b>API</b>. Es para uso interno, no debería ser necesario su llamado individual.

### npm run fix-env-app

Se encarga de reemplazar el nombre del archivo de entorno en la <b>APP</b>. Es para uso interno, no debería ser necesario su llamado individual.

### npm run fix-env

Se encarga de llamar los comandos que reemplazan los archivos de entorno. Es el comando que se debería usar normalmente.

### npm run build-app

Se encarga de construir la aplicación en <b>React</b>, sí vas a iniciar la aplicación desde el paquete workspace de este proyecto. Deberías usar este comando para construirla, pero no difiere de usar el comando original que se encuentra en el desarrollo del <b>FrontEnd.</b>

### npm run start o npm start

Se levantara la <b>API</b>, que servira los estáticos generados con <b>React</b>. Usará el modo de producción de <b>Node</b>, <b>Prisma</b> y la base de datos <b>SQLite</b> también será la de producción. Estando en este modo, todo estara optimizado, pero el mal manejo de la base de datos puede generar grandes daños.

### npm run start-dev

Se levantara la <b>API</b>, que servira los estáticos generados con <b>React</b>. Usará el modo de desarrollo de <b>Node</b>, <b>Prisma</b> y la base de datos <b>SQLite</b> también será la de desarrollo. Básicamente usalo para el desarrollo.

### npm run start-test

Se levantara la <b>API</b>, que servira los estáticos generados con <b>React</b>. Usará el modo de pruebas de <b>Node</b>, <b>Prisma</b> y la base de datos <b>SQLite</b> también será la de pruebas. El uso recomendado es con <b>Cypress.</b> También se utiliza para las pruebas en el <b>BackEnd</b> (Las usará el por sí mismo, no necesitaras levatar este comando).

### npm run cypress

Levantara el <b>test-runner</b> de <b>Cypress</b> en modo con cabecera. Es necesario que algunos de los <b>"start"</b>, estén actualmente corriendo. En caso de no ser la base de datos de pruebas, puede haber errores.

---

<b>Aclaración:</b> Los comandos mencionados previamente, sólo se constituyen a este parte del proyecto. El <b>BackEnd</b> y <b>FrontEnd</b>, respectivamente tienen sus propios comandos para funciones internas y externas. Como linters, pruebas, generar documentación y levantarse.

---

#### Explicación en Profundidad <a name="deep"></a>

Este proyecto está constituido por dos partes principales y su contenedor.

El <b>FrontEnd</b>, construido con <b>React.</b> Que puede funcionar independientemente haciendo llamadas a una <b>API</b>. Puedes observar todo su desarrollo independiente en el folder <b>"frontend".</b>

El <b>BackEnd</b>, construido en <b>Express.</b> Que puede funcionar independiente proveyendo una <b>API</b> para que clientes usen, con un estilo similar a una <b>API REST</b>. Puedes observar todo su desarrollo independiente en el folder <b>"backend".</b>

Y por último este paquete contenedor, que se encargara de funcionar como un <b>WorkSpace.</b> Aprovechando su condición de empaquetador/contenedor/workspace, también se utiliza para realizar las pruebas <b>end to end.</b>

---

#### Resumen Explicativo en Video, Continuación del Desafío <a name="video"></a>

[Link To Video](https://www.youtube.com/watch?v=iWzPz-VCxcc "Challenge JS FullStack Alkemy")

[![Image Video](http://img.youtube.com/vi/iWzPz-VCxcc/0.jpg)](http://www.youtube.com/watch?v=iWzPz-VCxcc "Video Title")

---

#### Imagenes del Proyecto <a name="img"></a>

![Home Logout](img/home-logout.jpg)
![Login](img/login.jpg)
![Home Logged](img/home-logged.jpg)
![Menu Drawer](img/menu-drawer.jpg)
![List Record](img/list-record.jpg)
![Create Record](img/create-record.jpg)
![Edit/Remove Record](img/edit-remove-record.jpg)

---

#### Bugs - Errores y Problemas <a name="bugs"></a>

Los <b>Workspaces</b>, son una tecnología relativamente nueva a la fecha. Se ha optado por usar está, para este proyecto y no los <b>"submodules".</b> En consecuencia, pueden ocurrir problemas de dependencias cruzadas y rutas relacionadas.

En algunos casos, quedan resueltos con la instalación pasandole el flag <b>--legacy-peer-deps</b> en otros el <b>--force</b>, aunque acarrean problemas internos de compleja resolución. Más que nada porque corresponden a la versión <b>7 de NPM</b> y escapa a nuestras capacidades.

---

#### Aclaración pertinente

No se pretende, realizar un proyecto listo para producción en optima condición, donde haya un <b>coverage de testing de alto porcentaje.</b> Un uso extensivo y profundo de carácteristicas de <b>React</b> como <b>useMemo, useCallback y React.Memo,</b> más que lo mínimo necesario. Y tampoco el uso de la <b>API Profiler.</b>

El objectivo es generar un <b>MVP, un Producto Mínimo Viable</b> que sirva como demostración.

---

##### Licencia <a name="license"></a>

[Licencia Github](LICENSE)
