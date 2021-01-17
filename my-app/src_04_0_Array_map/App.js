import Contact from '/component/Contact';

class App extends Component{
  render(){
    const persons = [
      //this 키워드로 접근
      { name: "홍길동", age: 20 },
      { name: "이순신", age: 30 },
      { name: "유관순", age: 40 },
      { name: "강감찬", age: 50 },
    ];
    const personTag = persons.map(function(row,idx){
      return (
        <div>
          {row.name} : {row.age}
          </div>
      );
    });

    // const personTag = persons.map((row) => {
    //   return (
    //     <div>
    //       {row.name} : {row.age}
    //       </div>
    //   );
    // });

    return (
      <div>
        <Contact xxx="홍길동"/>
        {personTag}
      </div>
    )
  }
}

export default App;
