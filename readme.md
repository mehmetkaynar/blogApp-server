# BLOG API

<!-- ILk once package.json olusturmak icin asagidaki kodu terminalden yaziyoruz. -->

## npm init -y

<!-- daha sonra asagidaki kullanacagimiz toollari package.jsona ekliyoruz -->

## npm i express dotenv express-async-errors mongoose cors

### Folder/File Structure:

```
    .env
    .gitignore
    blog app.png
    index.js
    package.json
    readme.md
    src/
        config/
            dbConnection.js
        controllers/
            auth.js
            blog.js
            category.js
            comment.js
            like.js
            user.js
        helpers/
            passwordEncrypt.js
        middlewares/
            authentication.js
            errorHandler.js
            findSearchSortPage.js
            logger.js
            permissions.js
        models/
            blog.js
            category.js
            comment.js
            like.js
            token.js
            user.js
            view.js
        routes/
            catComBlogLik.js
            index.js
            user.js




```
