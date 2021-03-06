<h2 align="center">
  API Backend ChallengeJS Alkemy
</h2>

---

# Tabla de Contenido - Index

1. [¿Qué es esto?](#what)
2. [Obtener API](#create)
3. [Scripts Disponibles](#scripts)
4. [Tecnologías Utilizadas](#tech)
5. [Licencia](#license)

---

### ¿Qué es esto? <a name="what"></a>

En el marco de el desafío <b>"Challenge JS"</b> sobre Javascript propuesto por <b>Alkemy</b>.
En está parte del repositorio se encuentra la parte relacionada al <b>Backend</b>.

---

## Obtener API <a name="create"></a>

##### Debemos tener la base de este GIT clonado:

1. En tu consola favorita:

`git clone https://github.com/PeterDamianG/challengejs-alkemy.git`

`cd challengejs-alkemy/backend`

`npm install`

Y listo, el siguiente comando es para correr la <b>API</b> en modo de desarrollo:

`npm run dev`

---

## Scripts Disponibles <a name="scripts"></a>

### npm run start o npm start

Inicia la <b>API</b> en modo de producción. El rendimiento será mayor, pero la consola no tendrá habilitada el modo verboso. Se usara la base de datos principal, <b>¡Cuidado!</b>

### npm run dev

Inicia la <b>API</b> en modo de desarrollo. Se utiliza para el desarrollo de la <b>API</b>, utiliza la base de datos de desarrollo. Recomendada usar está.

### npm run lint-fix

Se le pasa la herramienta <b>ESLint</b> a los ficheros del proyecto y se corregiran errores. Generalmente para uso interno. No es necesario llamarlo manualmente.

### npm run prettier

Se le pasa la herramienta <b>Prettier</b> a los ficheros del proyecto y se corregiran errores. Generalmente para uso interno. No es necesario llamarlo manualmente.

### npm run linters

Se llama a los linters conjuntamente para hacer un barrido completo en los archivos. De uso común y necesario. Se usa internamente con <b>Husky</b>.

### npm run test

Se correrán los test con la herramienta <b>JEST</b> y sus pluggins y dependencias. Es el comando para el usuario normal.

### npm run test-watch

Se correrán los test con la herramienta <b>JEST</b> y sus pluggins y dependencias. La diferencia con el anterior, es que usa la bandera <b>--watch</b>. La cual permitira mantener observado los ficheros mientras se realizan cambios a los mismos.

### npm run test-for-husky

Herramienta interna para correr los test, con la herramienta de <b>Husky</b>. No debe ser llamado por el usuario.

### npm run test-coverage

Se genera un carpeta de covertura porcentual con los test realizados, usando la herramienta de <b>JEST</b>. La carpeta por defecto generada será llamada <b>"coverage"</b>, dentro de "lcov-report" un fichero estático "index.js" será generado para abrir con su navegador favorito.

### npm run see-coverage

Comando atajo, para acceder al <b>index.html</b> generado para observar el coverage de los testing en <b>Jest</b>.

### npm run docs

Se genera un carpeta de documentación, usando la herramienta de <b>JSDOC</b>. La carpeta por defecto generada será llamada "docs", dentro habrá fichero estático "index.js" será generado para abrir con su navegador favorito.

### npm run see-docs

Comando atajo, para acceder al index.html generado para observar la documentacion por la herramienta <b>JSDOC</b>.

### npm run prisma

Comando que se encarga de generar los archivos necesarios para el <b>ORM Prisma</b>. No es necesario su uso manual, debería llamarse desde el contenedor/workspace.

---

###### Tecnologías utilizadas <a name="tech"></a>

![Prisma](https://img.shields.io/badge/Prisma-2.19.0-blue)
![Bcrypt](https://img.shields.io/badge/Bcrypt-5.0.1-blue)
![JWT](https://img.shields.io/badge/JWT-8.5.1-blue)
![Express](https://img.shields.io/badge/Express-4.17.1-blue)
![ESLint](https://img.shields.io/badge/ESLint-7.25.0-blue)
![Prettier](https://img.shields.io/badge/Prettier-2.2.1-blue)
![Jest](https://img.shields.io/badge/Jest-26.6.3-blue)
![JSDoc](https://img.shields.io/badge/JSDoc-3.6.6-blue)
![Husky](https://img.shields.io/badge/Husky-6.0.0-blue)

---

##### Licencia <a name="license"></a>

[Licencia Github](LICENSE)
