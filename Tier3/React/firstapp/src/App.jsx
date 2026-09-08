// import Button from "./Button";

import Card from "./Card";

const App = ()=>{
  return (
    <div className="App" style={{display:"flex",justifyContent:"space-between"}}>
        {/* <Button value = "click"/>
        <Button value = "Login"/>
        <Button value = "Logout"/>
        <Button value = "Save"/>
        <Button value = "Delete"/> */}
        <Card plan = "BasicPlan" price="$10" ben1 ="Access to all Basic futers" ben2 = "Basic reporting and analtics" btncolor ="steelblue" text="white"/>
        <Card plan = "BusinessPlan" price="$20" ben1 ="200+ integrations" ben2 = "Advance reporting and analtics" btncolor ="steelblue" text="white"/>
        <Card plan = "EnterpricePlan" price="$40" ben1 ="Advance custom feilds" ben2 = "Audit log data history" btncolor ="steelblue" text="white"/>
    </div>
  )
}

export default App;