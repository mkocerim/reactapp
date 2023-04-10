import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  //ilk olarak return calısır sonra useEffect calısır

  //sabit degiskenler varsa
  // stateler
  //lifecycle  methodlar : 1)mounting 2)update  3)unmounting
  //2 cesit component var 1)class based 2)function based
  //hooks yardımıyla function basedları class based dönüsütürülüyor
  /*Lifecycle metodları:
  Mounting Methods
      1)constructor:Bir component ilk olusurken ilk calısacak method /class based otomatik calsır ---->mounting de calısan methodlar
      statelerin tanımlandıgı yer. const
      2)constructor sonra render method calısır.Bir componentte render olmadan olmaz.Class baed da render,Function based return render yerine gelir
      return kısmı render kısmıdır
      3)componentDidMount ---->mounting methods
  
  Update Methods
     1)componentDidUpdate:--->ordan render
  
  Unmounting Methods
      1)componentWillUnmount

  Hooks: useEffect            useState
   */
  //render
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState(null);
  const [count, setCount] = useState(0);
  const [someState, setSomeState] = useState(false);
  // useEffect(()=>{},[]) useEffect iki paremetre alır birincisi fonksiyon, ikincisi dizidir.
  //fonk simule eder useEffect(()=>{  1)componentDidMount 2)componentDidUpdate 3)componentWillUnmount }, [componentDidMount veya componentDidUpdate])
  //[ boş bırakılırsa ] useEffect tek sefer calısır ve componentDidMount olarak calısır. Hicbirsey yazılmazsa her render da return gibi çalısır

  /* useEffect(()=>{
            
          componentDidMount  bu haliyle 1kez calısır

  },[ ])
   */

  /* useEffect(()=>{
    return()=>{
      componentWillUnmount
    }
  } */
  //axios--fetch api aynı işlevi görür
  useEffect(() => {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users", { method: "get" }) // Method:get (veri cağırmada, post(veri gödermede), put,patch(güncellemede),delete )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(() => {
          setUsers(data);
        }, 3000);
      })
      .catch((err) => console.log(err));
  }, [users]);

  useEffect(() => {
    console.log("useEffect İçi Count");
  }, [count]);

  useEffect(() => {
    console.log("useEffect İçi someState");
  }, [someState]);

  //render
  if (users === null) {
    return <h1>Loading......</h1>;
  }
  return (
    <div>
      <Button type="primary" buttonText="Button 1" tkla={() => alert("")} />
      <Button
        type="secondary"
        buttonText="Button 2"
        tkla={() => alert("ben 2. butonum")}
      />
      <Button
        type="danger"
        buttonText="Button 3"
        tkla={() => alert("ben 3. butonum")}
      />
      <Button
        type="success"
        buttonText="Button 4"
        tkla={() => document.write("Ben 4 Butonuyum ?")}
      />

      <Header username={username} />
      {users.map(
        (
          user //{return }   yazılmalı....    ( )seklınde yazılırsa return yapar}
        ) => (
          <div>
            <h1>{user.name}</h1>
            <p>{user.username}</p>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Arttır</button>
            <button onClick={() => setSomeState(!someState)}>
              Change SomeState
            </button>
          </div>
        )
      )}
      <Form setUsername={setUsername} />
    </div>
  );
}

export default App;
