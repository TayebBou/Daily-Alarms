# Star Wars Films

Star wars films is a web app to consult star wars films.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test in cypress.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Healthera Front End React Test

Build a single page React app that allows you to view a series of alarms and their related information
in a daily view that you can page through by day

## Instructions:
1. Please fork the repository to your own Github account
2. Develope the codes on your own branches
3. Submit your PR from your repository with relevant information.
4. Inform relevant team once you have done that.

## Requirements:

1. Daily alarms view that allows me to see what alarms are set for a given day(displayed from the provided alarms.json file)
2. You must display the alarm name and time on this view for each alarm on that day
3. Each alarm should have a way to action confirm or skip for each alarm on this view
4. When an alarm is skipped it should show in a greyed out state and update status to skip, no further actions allowed
5. When an alarm is confirmed it should show in a completed state of your design and no further actions should be allowed
6. Detail view for alarms showing more detailed data for the alarm and available actions to confirm and skip
7. Detail view should be accessible from the daily view by an action

## Aditional Information

Data file: alarms.json
```
  {
    _id GUID
    alarm_time UNIX Timetstamp of when the alarm is set
    name Display name of the alarm
    description Detailed description of the alarm and it's details
    status Text status skip|cofirm|active - the current status of the alarm
  }
```

* You may use TypeScript or Javascript
* You may use any libraries or tools that you prefer for the task
* You may use your own prefrence of architecture and project structure
* Create a branch from the master with your name and when you have completed you will submit this branch for us to review



