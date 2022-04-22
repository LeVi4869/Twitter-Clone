const displayContent = (req, res) =>    {
    const url = req.url;
    const method = req.method;
    if(url == '/profile')   {
        res.setHeader('content-type', 'text/html');
        res.write("<p>profile page</p>");
        return res.end();
    }
    else if(url == "/") {
        res.setHeader('content-type', 'text/html');
        res.write("<p>Something to see?</p>");
        return res.end();
    }
    else if(url == "/settings" && method == "POST") {
        res.setHeader('content-type', 'text/html');
        res.write("<h1>Form was submitted</h1>");
        return res.end();
    }
    else if(url == "/settings") {
        res.setHeader('content-type', 'text/html');
        res.write("<h1>Settings</h1>");
        res.write('<form action="/settings" method="POST"><input type="text"><button type="submit">Casual button</button></form>');
        return res.end();
    }
    res.setHeader('content-type', 'text/html');
    res.write("<p>Unknown page</p>");
    res.end();
}
module.exports = displayContent