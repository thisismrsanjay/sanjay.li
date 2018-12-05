# sanjay.li - A Full Stack URL Shortner

* [x] Create Server Folder
    * [x] Init npm
    * [x] start script and dev script
* [x] Create public Folder 
    * [x] Use ejs 
    * [x] Add bootstrap 
    * [x] Homepage
    * [x] Serve static file
* [] Create new url from client
    * [] Submit form -fetch POST to server
        * [] Show any errors
        * [] Show create link on page

* [] Create DB
    *[x] Create db folder 
    *[x] Create db connection
    * [] Create route to add url to db `/api/url`
        * [] validate url with joi
            * url
            * name alphanum, min 5 chars, max 100 chars
    * [] Make sure name is not in use
        * [] insert url into db
        * [] respond with inserted message

* [] Create route to redirect a url
    * [] Search by name - if found,redirecr to url
    * [] if not ,show 404
* [] Deploy!
* [] Alias domain


## What ?
* [] log links to a click
    * [] Date/Time
* [] View link page to see number of click