```javascript
// bug.js
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i, title: `Item ${i}` })); //Using index as key

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
```
```javascript
// bugSolution.js
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i, title: `Item ${i}` })); 

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id.toString()}// Correct key extraction using unique ID
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
```