import { Component, useEffect, useState } from 'react';

import logo from './logo.svg';
import CardList from './component/card-list/card-list.component'
import SearchBox from './component/search-box/search-box.component'
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('') // [value, setValue], string variabel
  const [monsters, setMonsters] = useState([]); // array variable

  console.log('render');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeHolder='search monsters'
        onChangeHandler={onSearchChange}
      ></SearchBox>
      {/* <CardList monsters={filteredMonsters}></CardList> */}
    </div>
  )
};

// class App extends Component { //sadasdasdadwssa
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     console.log('constructor');
//   }

// componentDidMount() { // when react renders first time this will occuer. this happens only onces.
//   console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(
//         () => {
//           return { monsters: users };
//         }
//       )
//     );
// }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     })
//     console.log(event);
//   }

//   render() {
//     console.log('render');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         {/* <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} /> */}
//         {/* {filteredMonsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <h1>{monster.name}</h1>
//             </div>
//           );
//         })} */}

//         {/* Move to component */}
//         <SearchBox
//           className='monsters-search-box'
//           placeHolder='search monsters'
//           onChangeHandler={onSearchChange}
//         ></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }

export default App;
