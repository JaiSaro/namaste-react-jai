import React from "react";
import ReactDOM from "react-dom/client";

const headingJSX = <h1 id="h1" className="h1">Welcome to episode 3</h1>;

const TitleComponent = () => <h1>Welcome to episode 3!</h1>;

const HeadingComponent = () => {
    return (
        <>
            {headingJSX}
            <TitleComponent />
            <h1>Welcome to function component!</h1>
        </>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingJSX);
root.render(<HeadingComponent />);

