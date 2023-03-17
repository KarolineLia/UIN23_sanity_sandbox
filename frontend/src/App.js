import './App.css';

function App() {
  let PROJECT_ID = '9t88nywe';
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "products"]');

  // Compose the URL for your project's endpoint and add the query
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  fetch(URL)
  .then((results) => results.json())
  .then(({result}) => {console.log(result)})

  return (
    <h1>Innhold fra Sanity</h1>
  );
}

export default App;
