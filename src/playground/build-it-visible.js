
let isVisible = false;
const toggleVisibility= () => {
    isVisible = !isVisible
    render()
}
const appRoot = document.getElementById('app')

function render() {
  let template = (
  <div>
    <h1>Visibility Toggle</h1>
  {  isVisible ? <button onClick={toggleVisibility} >Show Details</button> : <button onClick={toggleVisibility}>Hide Details</button>}
  {isVisible && <p> Peek a boo!</p> }
  </div>
  
  );
  ReactDOM.render(template,appRoot);
}
render();