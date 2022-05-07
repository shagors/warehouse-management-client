import React from 'react';

const Blog = () => {
    return (
        <div className='mx-40'>
            <h2 className='text-center text-4xl my-5 text-cyan-900'>Question & Answer</h2>
            <div className=''>
                <h2 className='text-center text-2xl my-5 text-green-700'>Difference between javaScript and nodejs</h2>
                <p>
                    JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task.
                </p>
            </div>
            <div className=''>
                <h2 className='text-center text-2xl my-5 text-green-700'>When should you use nodejs and when should you use mongodb</h2>
                <p>
                    <span className='text-lime-800 text-xl'>Nodejs </span>
                    is an open source, a server-side script which runs on the top of Google’s open-source scripting engine V8. Node.js is fast, lightweight and efficient. It uses the asynchronous mode of operation, event-driven Input/Output rather than using the traditional threads or separate threads for each process. 
                </p>
                <p>
                    <span className='text-lime-800 text-xl'>mongodb </span>
                    Using MongoDB can provide many benefits to a software development team. Its flexible schema makes it easy to evolve and store data in a way that is easy for programmers to work with. MongoDB is also built to scale up quickly and supports all the main features of modern databases such as transactions.
                </p>
            </div>
            <div className=''>
                <h2 className='text-center text-2xl my-5 text-green-700'>Difference between sql and nosql database</h2>
                <p>
                    1. SQL databases are relational, NoSQL databases are non-relational. <br />
                    2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                </p>
            </div>
            <div className=''>
                <h2 className='text-center text-2xl my-5 text-green-700'>Difference between sql and nosql database</h2>
                <p>
                    JSON Web Token (JWT), is an open standard used to share security information between two parties — a client and a server.Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. text-
                </p>
            </div>
        </div>
    );
};

export default Blog;