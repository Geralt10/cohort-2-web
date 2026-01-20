import hello from "./app.js";
import box from "./test.js";
let parent = React.createElement('div',{id:'parent',style:{display:"flex",gap:"20px"}},[hello(),box()])
let root = ReactDOM.createRoot(document.querySelector('#container'));

root.render(parent)