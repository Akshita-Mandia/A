import React from 'react';
import axios from 'axios';
const Home = () => {
  return(
    <div>
      <div className='container center'>
        <h4>Home Page</h4>
        <p> This my home page. </p>
        <h3>React:</h3>
        <p>React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces.
        It is maintained by Facebook and a community of individual developers and companies.
        React can be used as a base in the development of single-page or mobile applications.
        Complex React applications usually require the use of additional libraries for state management, routing, and interaction with an API.</p>
        <h3>Virtual DOM:</h3>
        <p>
        Another notable feature is the use of a "virtual Document Object Model", or "virtual DOM".
        React creates an in-memory data-structure cache, computes the resulting differences, and then updates the browser's displayed DOM
         efficiently.This allows the programmer to write code as if the entire page is rendered on each change, while the React libraries
         only render subcomponents that actually change.</p>
         <h3>Lifecycle methods:</h3>
         <p>Lifecycle methods are hooks which allow execution of code at set points during the component's lifetime.</p>
         <p>1.shouldComponentUpdate: allows the developer to prevent unnecessary re-rendering of a component by returning false if a render is not
          required.</p>
          <p>2.componentDidMount: is called once the component has 'mounted' (the component has been created in the user interface, often by associating
            it with a DOM node). This is commonly used to trigger data loading from a remote source via an API.</p>
          <p>  3.componentWillUnmount: is called immediately before the component is tore down or 'unmounted'. This is commonly used to clear resource
            demanding dependencies to the component that will not simply be removed with the unmounting of the component
            (e.g. removing any 'setInterval()' instances that are related to the component, or an 'eventListener' set on the 'document'
            because of the presence of the component)</p>
          <p>  4.render: is the most important lifecycle method and the only required one in any component.
            It is usually called every time the component's state is updated, reflecting changes in the user interface.</p>
      </div>
    </div>
  )
}

export default Home;
