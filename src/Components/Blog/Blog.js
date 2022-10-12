import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-blue-500 font-bold'>Question and Answer</h1>
            <div className='border bg-blue-200 rounded-xl w-1/2 mx-auto my-10
            '>
                <h1>What is the purpose of React Router?</h1>
                <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='border bg-blue-200 rounded-xl w-1/2 mx-auto my-10
            '>
                <h1>How context api works?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

                    Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page

                </p>
            </div>
            <div className='border bg-blue-200 rounded-xl w-1/2 mx-auto my-10
            '>
                <h1>What is useRef() hook?</h1>
                <p>The useRef Hook allows you to persist values between renders.

                    It can be used to store a mutable value that does not cause a re-render when updated.

                    It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;