<h2 align="center">
  APP FrontEnd ChallengeJS Alkemy
</h2>

---

# Tabla de Contenido - Index

1. [¿Qué es esto?](#what)
2. [Obtener APP](#create)
3. [Scripts Disponibles](#scripts)
4. [Tecnologías Utilizadas](#tech)
5. [Licencia](#license)

---

### ¿Qué es esto? <a name="what"></a>

En el marco de el desafío <b>"Challenge JS"</b> sobre Javascript propuesto por <b>Alkemy</b>.
En está parte del repositorio se encuentra la parte relacionada al <b>Frontend</b>.

---

## Obtener API <a name="create"></a>

##### Debemos tener la base de este GIT clonado:

1. En tu consola favorita:

`git clone https://github.com/PeterDamianG/challengejs-alkemy.git`

`cd challengejs-alkemy/frontend`

`npm install`

Y listo, el siguiente comando es para correr la APP en modo de desarrollo:

`npm start`

---

## Scripts Disponibles <a name="scripts"></a>

### npm run start or npm start

Inicia la APP en modo de desarrollo. Se utiliza para el desarrollo de la APP, utiliza la base de datos de desarrollo.

### npm run build

Construye los ficheros estaticos para ser utilizados posteriormente, el resultado se encontrara en la carpeta /build.

### npm run eject

Comando heredado de React, para expulsar las configuraciones para poder controlarlas de forma manual. NO RECOMENDADO. NO USARLA A MENOS QUE SE ENTIENDA CORRECTAMENTE LO QUE SE ESPERA.

### npm run eslint

Se le pasa la herramienta ESLint a los ficheros del proyecto. Se puede usar para observar los errores marcados por el linter. Generalmente para uso interno. No es necesario llamarlo manualmente.

### npm run eslint-fix

Se le pasa la herramienta ESLint a los ficheros del proyecto y se corregiran errores. Corregira sólo los errores que pueda. Generalmente para uso interno. No es necesario llamarlo manualmente.

### npm run prettier

Se le pasa la herramienta Prettier a los ficheros del proyecto y se corregiran errores. Generalmente para uso interno. No es necesario llamarlo manualmente.

### npm run test

Se correrán los test con la herramienta JEST, sus pluggins y dependencias. Tiene desactivado el modo watch.

### npm run test-coverage

Se genera un carpeta de covertura porcentual con los test realizados, usando la herramienta de JEST. La carpeta por defecto generada será llamada "coverage", dentro de "lcov-report" un fichero estático "index.js" será generado para abrir con su navegador favorito.

### npm run see-coverage

Comando atajo, para acceder al index.html generado para observar el coverage de los testing en Jest.

### npm run docs

Se genera un carpeta de documentación, usando la herramienta de JSDOC. La carpeta por defecto generada será llamada "docs", dentro habrá fichero estático "index.js" será generado para abrir con su navegador favorito.

### npm run see-docs

Comando atajo, para acceder al index.html generado para observar la documentacion por la herramienta JSDOC.

---

###### Tecnologías utilizadas <a name="tech"></a>

![React](https://img.shields.io/badge/React-17.0.2-blue)
![Chakra](https://img.shields.io/badge/Chakra-1.4.2-blue)
![Wouter](https://img.shields.io/badge/Wouter-2.7.4-blue)
![ESLint](https://img.shields.io/badge/ESLint-7.25.0-blue)
![Prettier](https://img.shields.io/badge/Prettier-2.2.1-blue)
![Jest](https://img.shields.io/badge/Jest-26.6.3-blue)
![JSDoc](https://img.shields.io/badge/JSDoc-3.6.6-blue)
![Husky](https://img.shields.io/badge/Husky-6.0.0-blue)

---

##### Licencia <a name="license"></a>

[Licencia Github](LICENSE)
