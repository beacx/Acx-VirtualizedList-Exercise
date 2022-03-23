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

      {/*  you may use this guide to understand how to implement a simple virtualized list.
      https://medium.com/ingeniouslysimple/building-a-virtualized-list-from-scratch-9225e8bec120
      you must build the virtualization using the provided VirtualizedListStore and its methods  */}
      </div>
  );
});

export default App;
