# Acx-VirtualizedList-Exercise
Authenticx exercise for UI candidates


1) implement ApiService to retrieve 100 rows of data from the provided api endpoint in ApiService.ts
2) project the returned json to the given interface <Works>
3) load 100 <Works> items into the VirtualizedListStore using one of the provided setters
4) implement a virtualized list using the getter inside VirtualizedListStore
   1) you may add other methods and fields to this store
   2) we have provided you with examples of how to virtualize a list
5) the acceptance criteria for this exercise is a list component that does not render all the items in the array at once and only renders when you scroll
6) you will be asked to modify your code during the in-person review to extend the functionality in some way


Here is example virtualized list component. Use these examples to understand the problem and
work your solution into the framework we have provided.


```javascript
const VirtualizedList = props => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.floor((scrollTop + windowHeight) / itemHeight)
  );

  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: "absolute",
          top: `${i * itemHeight}px`,
          width: "100%"
        }
      })
    );
  }

  const onScroll = e => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
      <div
        className="inner"
        style={{ position: "relative", height: `${innerHeight}px` }}
      >
        {items}
      </div>
    </div>
  );
};
```

example of how to call the above component

```javascript
<VirtualizedListTest
        numItems={items.length}
        itemHeight={40}
        windowHeight={400}
        renderItem={({ index, style }: any) => {
        const i = items[index];
        return (
        <div key={i.title} className="item" style={style}>
        <label>{i.title}</label>
        </div>
        );
    }}/>
```