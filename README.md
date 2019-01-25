# micro-frontend-prototype

## Description

This is an early prototype in researching micro-frontends and is straight exploratory & discovery programming. 

## High Level Design

There are 2 web applications
1. Parent
2. Child

The Parent site loads, then reaches out to the Child site to load content (JavaScript file).
Child content is embedded into the Parent's DOM via a <script> tag and a component is rendered from the Child JavaScript file.

## Webpack

Both applications are built using Webpack. 
One of the investigation items was to determine how to expose components from the Child, allowing the Parent to see the components.
Another investigation item was determining how to have one copy of a npm package in the Parent's DOM (i.e. React).

### Exposing a Child Component

Since Webpack bundles are all-inclusive (which is a good thing!) we exposed the Child's high-order component by exposing the component to the window/root object.
While not ideal, it is a prototype (read that as Quick & Dirty). We also wrote a Webpack loader to add the code which exposed the component.

### One copy of a npm Package

To ensure only one copy of npm (React in this example) was loaded:
- the Parent's Webpack build used the expose-loader to expose its React instance to the root
- the Child's Webpack build used the externals feature to keep Webpack from bundling React

_See both applications webpack.config.js file for details._

## Tech Stack

* [React](reactjs.org)
* [Webpack](webpackjs.org)
* [node](nodejs.org)
* [node-static](npmjs.com/package/node-static)

## Building

### To build the Parent app

```sh
> cd parent
parent> npm install
parent> npm run dev
```

### To run the Parent app

```sh
parent> node server.js
```

You should see the following message:
> node-static is listening on http://127.0.0.1:8080

You can browse to localhost:8080. Since the Child app is down, you will see **...loading** where the Child content should appear.

### To build the Child app

```sh
> cd child
child> npm install
child> npm run dev
```

### To run the Child app

```sh
child> node server.js
```

You should see the following message:
> node-static is listening on http://127.0.0.1:8081

At this point if you refresh your browser, you should see content from the child.

## Why did we care?
We are investigating/questioning the follow:
1. Can we make this idea work?
2. Investigate the exposure items listed above.
3. Would this allow different dev groups to operate in a somewhat autonomous fashion? (still being debated :)
4. Can we change code & deploy one app without affecting the other?
5. What other issues will occur that will need mitigating if we follow this approach.
