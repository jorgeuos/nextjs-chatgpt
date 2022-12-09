# Try out ChatGPT for fun.

Like everybody else, I'm curious about this chat robot.
Let's take it for a spin...

## Want to know what all fuzz is about

Try my nextjs-chatgpt demo app.

Clone down this repository:
```sh
git clone git@github.com:jorgeuos/nextjs-chatgpt.git
cd nextjs-chatgpt
```

Install node packages, but first! Make sure you have node running locally and using the right version:
```sh
nvm use
yarn install
```

Start the local server:
```
yarn run dev
```
To exit, just the exit command `ctrl+c`.


## Now the implementation

What isn't better than to ask the ChatGPT how to write the code? Now let's see.

My question:
> How do I write this integration in nextjs?

ChatGPT replies:

> To write an integration in Next.js, you can use the getInitialProps lifecycle method. This method is called on the server-side and allows you to perform asynchronous actions before rendering the page. Here is an example:

> Copy code
```js
import React from 'react';

class MyPage extends React.Component {
  static async getInitialProps({ query }) {
    // Perform some asynchronous actions, such as fetching data from an API

    // Return the data to be used in the page
    return {
      data: response.data
    }
  }

  render() {
    // Use the data passed in from getInitialProps
    const { data } = this.props;

    return (
      <div>
        {/* Use the data to render the page */}
      </div>
    )
  }
}
```
> This is just one way to integrate external data or functionality in a Next.js page. There are other ways to do this, such as using the useEffect hook in a functional component, or using the getServerSideProps lifecycle method for server-side rendering.

### Summary

Can it be easier than that? I think not. But I still tweaked some and ended up with this result.

Check it out:
```sh
./pages/index.js
./pages/api/generate.js
```
