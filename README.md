<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Web weather
</h1>

## 🚀 Quick start

1.  **Project setup**

    Clone git repository in the terminal window by entering:

    ```shell
    git clone https://github.com/GintasBazys/web-weather.git
    ```

2.  **Project start.**

    Open project folder using any IDE. Using terminal, go to root folder directory and type:

    ```shell
    npm install
    npm run develop
    ```

    Open new terminal window (root folder directory) and type:

    ```shell
    cd src/server
    node server.js
    ```

    <b>Website will be accessible on localhost: 8000; Express server uses port 3000;</b>

## Without running server, data will not be received.

3.  Technologies used: <b>React, Gatsby, Typescript, Express, Node.js, Styled Components, Prettier, Git VCS, Rest API (Axios)</b>

4.  **Project structure.**

    Two sections: header and main content components.

    Main content component has initial calendar component.

    Calendar component renders search card and suggestions component. When search is initiated two additional components are rendered: weekly forecast card + detailed weather info on specific time. Forecast card component renders seperate Weather card (block) components.

5.  **TODO**

    1. More responsive web design: mobile, autocomplete field, more breakpoints.
    2. Fix Typescript errors.
    3. Refactor ForecastCard component (API data, current weather handling).
    4. UTC to local Lithuania time (+3 hours).
