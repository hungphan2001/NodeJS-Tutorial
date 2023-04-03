const test = (req,res)=>{
    // res.send(`
    // <form method=post>
    //    <input type=text name=email />
    //    </br>
    //    <input type=text name=password />
    //    </br>
    //    <input type=submit name=submit value=Send />
    // </form>`);
    const data2 = 'NodeJS';
    // res.render('admin/test',{data2});
    res.redirect('/admin/dashboard');

    // const f = ({a})=>a;
    // const obj = {
    //     a: 'JavaScript',
    //     b: 'PHP',
    //     c: 'ReactJS',
    // }
    // console.log(f(obj));
}

const test2 = (req,res)=>{
    res.send(req.boby.email);
}

module.exports = {
    test,
    test2,
}