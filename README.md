# Course Fullstack open
## Deep Dive Into Modern Web Development

This course is held at the Department of Computer Science at the University of Helsinki.

Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.

Full Stack open: [fullstackopen.com](https://fullstackopen.com/en/)

<details>

<summary>Part 0 - Fundamentals of Web apps</summary>

Example [App](dies.cs.helsinki.fi/exampleapp) and the  [source code](https://github.com/mluukkai/example_app/)

### Building diagrams for client-server interaction

 - Sequence Diagrams - Unified Modeling Language (UML): https://www.geeksforgeeks.org/unified-modeling-language-uml-sequence-diagrams/

 - GitHub Docs, Creating diagrams: https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams#about-creating-diagrams


### Version of Mermaid:

```mermaid
  info
```

</details>

<details>

--- 

<summary>Part 3 - Node.js and Express</summary>

### Node.js and Express
 
 - http.createServer((request, response) => {}) = simple web server
 - Express - seerver that simplify "content-type", response and other things works automatically
 - nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application. (needed only during the development of the application)


 - Off doc: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

 - Free course: https://training.linuxfoundation.org/training/introduction-to-nodejs-lfw111/


 - Postman
 
 - The Visual Studio Code REST client
 - The WebStorm HTTP Client: https://www.jetbrains.com/help/webstorm/http-client-in-product-code-editor.html

### REST:


notes	    GET	fetches all resources in the collection
notes	    POST	creates a new resource based on the request data
notes/10	DELETE	removes the identified resource (status code = 204, "no content")
notes/10	PUT	replaces the entire identified resource with the request data
notes/10	PATCH	replaces a part of the identified resource with the request data

| URL | verb | functionality |
|-----|--------|-------|
| notes/10 |    GET |      fetches a single resource |
|notes	|    GET|	fetches all resources in the collection|
|notes	   | POST	|creates a new resource based on the request data|
|notes/10	|DELETE	|removes the identified resource (status code = 204, "no content")|
|notes/10|	PUT	|replaces the entire identified resource with the request data|
|notes/10	|PATCH	|replaces a part of the identified resource with the request data|

</details>