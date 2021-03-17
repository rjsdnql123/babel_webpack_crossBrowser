import React from "react";
const App = () => {
    const a = [1,2,3]
    let b= a.map((x) => <div>x</div>)
return (
    <div>Hello, Webpack!
    {b}
    </div>
    )
};
export default App;
