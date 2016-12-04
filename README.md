Integrando Django Webpack e Reactjs
--------------------------------------

Falta:

1- configurar Produção

2- configurar estilos

3- configurar azk

4- ...


Baixe o projeto:

```
git clone
```

Instala as coisinhas javascript, Pontos de Ajustes:
===================================================


```
npm install react --save
npm install react-dom --save

npm install jsx-loader --save-dev
npm install webpack --save-dev
npm install webpack-dev-server --save-dev
npm install webpack-dev-server -g  #isso aqui parece so funcionar globalmente
npm install babel-preset-react --save-dev
npm install --save-dev babel-core babel-loader babel-preset-es2015
npm install --save-dev webpack-bundle-tracker

```

**No terminal 1**

```
cd frontend
node server.js
```

**No terminal 2**

```
cd project
python manage.py collectstatic
python manage.py runserver
```
