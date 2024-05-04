## ¿Qué es React?
React es una biblioteca para construir interfaces de usuario. React no es un framework ni siquiera se limita a la web. Se utiliza con otras bibliotecas para renderizar en ciertos entornos. Por ejemplo, React Native puede usarse para desarrollar aplicaciones móviles; React 360 permite crear aplicaciones de realidad virtual; además de otras posibilidades.

El objetivo principal de React es minimizar los errores que ocurren cuando los desarrolladores construyen interfaces de usuario. Esto lo hace mediante el uso de componentes piezas de código lógicas y auto-contenidas que describen una parte de la interfaz del usuario. Estos componentes se pueden juntar para crear una interfaz de usuario completa permitiéndote enfocarte en el diseño de la interfaz. Desde aquí, podes acceder a la [documentación oficial](https://es.legacy.reactjs.org/docs/getting-started.html) de React.

### Componentes de React JS
En React existen dos tipos principales de componentes:
- **Componentes Funcionales**: Son funciones de JavaScript que reciben props (propiedades) como argumentos y devuelven elementos de React que describen cómo debería verse la interfaz de usuario.
- **Componentes de Clase**: Son clases de JavaScript que extienden la clase React.Component. Estos componentes tienen un estado interno y pueden tener los métodos del ciclo de vida de React.

*Fuente: https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started*

### ¿Por qué JSX?
React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización. En lugar de separar artificialmente tecnologías poniendo el maquetado y la lógica en archivos separados, React separa intereses con unidades ligeramente acopladas llamadas “componentes” que contienen ambas.

Dado que JSX es más cercano a JavaScript que a HTML, React DOM usa la convención de nomenclatura camelCase en vez de nombres de atributos HTML.

*Fuente: https://es.legacy.reactjs.org/docs/introducing-jsx.html*

### ¿Qué es Babel?
Es un "transpilador" para JavaScript. Básicamente, permite transformar código escrito con las últimas y novedosas características de JavaScript y convertilo en un código que sea comprendido por los navegadores más antiguos.


## ¿Qué es Vite?
Es una herramienta para Frontend, creada por Evan You, mismo creador de Vuejs, esta herramienta nos permitirá crear aplicaciones de Javascript usando algún framework o libreria como ReactJs, Vuejs, Angular ya sea con algún framework especifico o ya sea Vanillajs.

#### Algunas Características
- Inicio Instantáneo del Server: Nos brinda los archivos que necesitamos en el momento que necesitamos, atraves de módulos de javascript nativos (EcmaScript Module), con lo cual no tendremos que lidiar con el building.
- Rápido HMR: Sin importar el tamaño de la aplicación, podremos ver reflejados los cambios en nuestro codebase de manera instantanea.
- Build Optimizado: De manera interna ya trae pre-configurado Rollup con soporte a multiples páginas y soporte para librerías.
- Plugins Universales: Al hacer uso de Rollup de manera interna, este provee una interfaz compartida entre desarrollo y build.

*Fuente: https://dev.to/billiramirez/que-es-vitejs-que-bueno-tiene-para-ofrecer-nap*


## NPM
Es el gestor de dependencias oficial de NodeJS y sirve para mantener el software del que dependen las aplicaciones que se desarrollan con Javascript o Node. La palabra npm es la sigla de "Node Package Manager" y básicamente consiste en una herramienta de línea de comandos que se usa para instalar y actualizar dependencias en proyectos Javascript o NodeJS, así como publicar packages que se podrán usar en otros proyectos.

*Fuente: https://desarrolloweb.com/home/npm*


## ¿Que es un linter?
Un linter o también conocido como analizador de código estático, es una herramienta de software que verifica y analiza el código fuente de un programa en busca de posibles errores, problemas de estilo y violaciones de las convenciones de codificación.

### ESLint
ESLint es una popular herramienta de linting para el lenguaje de programación JavaScript. Proporciona análisis estático de código para identificar y corregir errores, así como para aplicar reglas y convenciones de codificación en proyectos de desarrollo de JavaScript.

#### Principales características de ESLint
- Análisis estático de código
- Reglas configurables
- Integración flexible
- Mensajes de error y advertencias descriptivos
- Configuración basada en archivos
- Compatibilidad con plugins y extensiones

#### Archivo de configuración de reglas ESLint
ESLint utiliza el archivo **.eslintrc.cjs** para la configuración principal. Este es un archivo de texto que especifica las reglas y las configuraciones personalizadas que se deben aplicar al analizar el código.

*Fuente: https://medium.com/@diego.coder/configurando-eslint-en-visual-studio-code-845f1e24a5d1*
