# Practical Assignment

An angular 2 application to showcase the ability to use Yeoman, BootStrap and Web Servcices. Project should inlcude these functionalities: Login and some C.R.U.D features.

To run this project

1. Install Angular 2
    ```
    npm install
    ```
2. Transpile Typescript files.

    ```
    npm run tsc
    ```
    
    If you get an error, do not worry the issue is that Typescript tries to transpile the ts in node_modules, which it is not suppose to. The ts files in src folder will be transpiled correctly though.

3. Build project with gulp and run it.

    ```
    npm run build && npm run start
    ```