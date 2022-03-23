import React, {useEffect} from 'react';
import './App.css';
import {observer, useLocalObservable} from "mobx-react";
import {VirtualListStore} from "./virtualizedList/store/VirtualListStore";
import {ApiService} from "./services/ApiService";

const App = observer(() => {
  const store = useLocalObservable(() => new VirtualListStore());


  useEffect(() => {
      const apiService = new ApiService();

      // retrieve data here and populate virtualizedListStore so that the list can be rendered with data from API
  })

  return (
      <div className="App">
        {/*  render your virtualized list here using data held in the mobx store VirtualizedListStore*/}

      {/* you must build the virtualization using the provided VirtualizedListStore and its methods  */}
      </div>
  );
});

export default App;
