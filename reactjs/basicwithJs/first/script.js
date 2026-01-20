const h1=React.createElement('h1',{id:'hero'},'hello from geralt');
const h2=React.createElement('h2',{class:'random'},'hello from yuki');
const div = React.createElement('div',{id:'parent',class:'elem'},[h1,h2])

let root = ReactDOM.createRoot(document.querySelector('#container'));


root.render(div);