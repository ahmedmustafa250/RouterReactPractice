import { useRouteMatch ,Link,Switch,Route, useParams, useHistory} from "react-router-dom"

export default function Services() {
  let match=useRouteMatch()
  let history=useHistory()
function goback(){
  history.push("/")
}

  function Web(){
    return <h3>Web and Application</h3>
  }
  function Ml(){
    return <h3>Machine learning</h3>
  }
  function AI(){
    return <h3>Artifical intelligence</h3>
  }



  function Mapping(){
    let {slug}=useParams()
      return <h3>This is {slug}</h3>
  }




  return (
    <div>
      <h1>Services</h1>
      <button onClick={goback}>Go back</button>
        <ul>
            <li><Link to={`${match.url}/web`}>Web</Link></li>
            <li><Link to={`${match.url}/Ml`}>Machine learning</Link></li>
            <li><Link to={`${match.url}/AI`}>Artifical intelligence</Link></li>
        </ul>
        <Switch>
            <Route path={`${match.path}/:slug`}>
                <Mapping/>
            </Route>
            <Route path={`${match.path}`}>
                <h3>Choose any one </h3>
            </Route>
        </Switch>
    
    </div>
  )
  }