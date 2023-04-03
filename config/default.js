module.exports = {
    app: {
        port:3000,
        public_folder:`${__dirname}/../src/public/`,
        router:`${__dirname}/../src/routes/web`,
        view_folder: `${__dirname}/../src/apps/views`,
        view_engine:'ejs',
    }
}
