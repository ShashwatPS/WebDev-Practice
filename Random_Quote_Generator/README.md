# React Landing Page with Axios, Material-UI, and Recoil
This is a code snippet for a React application that implements a landing page displaying random quotes using various technologies such as Axios for making API requests, Material-UI (MUI) for styling components, and Recoil for state management.


## Features
1. **Quote Display**: The landing page displays a random quote along with the author's name in a stylized Card component from Material-UI.
2. **Create Quote Button**: Clicking the "Create Quote" button fetches a new random quote from the Quotable API and updates the displayed quote.
3. **Recoil State Management**: The application uses Recoil for state management, with the quoteState, quoteDetails, and authorDetails being managed through Recoil atoms and selectors.
4. **Axios for API Requests**: Axios is used to make HTTP requests to the Quotable API. The axios.get() method fetches a random quote when the component mounts or when the "Create Quote" button is clicked.
5. **Material-UI Styling**: The Button and Card components from Material-UI are used for a visually appealing and consistent UI design.
## Code Explanation
1. **Imports**: The code starts by importing necessary modules and components including useRecoilState, useRecoilValue from Recoil, various components from Material-UI, useEffect from React, and Axios for making API requests.

2. **Component Function**: The LandingPage component function is defined. It uses hooks to manage state and perform side effects.

3. **Recoil State Management**: useRecoilState and useRecoilValue hooks are used to access the state managed by Recoil atoms and selectors (quoteState, quoteDetails, and authorDetails).

4. **Initial Data Fetch**: The useEffect hook is used with an empty dependency array to perform a data fetch when the component mounts. The fetched quote data is set using the setData function from the useRecoilState(quoteState) hook.

5. **handleCreateQuote Function**: This function is used to fetch a new random quote from the Quotable API when the "Create Quote" button is clicked. The fetched data is then set using the setData function.

6. **Material-UI Styling**: The "Create Quote" button is styled using the sx prop to customize its appearance with specific color and background color.

## Usage
1. Make sure to have the required packages installed, including `react`, `@mui/material`, `axios`, and `recoil`.

2. Create a new React component or modify an existing one to include the provided code.

3. Ensure that the necessary imports and dependencies are set up properly.

4. Run your React application and navigate to the landing page. You should see a random quote displayed along with the "Create Quote" button.

## Note
Make sure to customize and integrate this code snippet into your larger React application according to your requirements. Additionally, keep in mind that technology versions and APIs might change, so ensure that your dependencies and API endpoints are up to date