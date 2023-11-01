// class HashTable {
//     constructor(size=53){
//       this.keyMap = new Array(size);
      
//     }
  
//     _hash(key) {
//       let total = 0;
//       let WEIRD_PRIME = 31;
//       for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//       }
//       return total;
//     }
//     set(key,value){
//       let index = this._hash(key);
//       if(!this.keyMap[index]){
//         this.keyMap[index] = [];
//       }
//       this.keyMap[index].push([key, value]);
      
//     }
//     get(key){
//       let index = this._hash(key);
//       if(this.keyMap[index]){
//         for(let i = 0; i < this.keyMap[index].length; i++){
//           if(this.keyMap[index][i][0] === key) {
//             return this.keyMap[index][i][1]
//           }
//         }
//       }
//       return undefined;
//     }
//     keys(){
//       let keysArr = [];
//       for(let i = 0; i < this.keyMap.length; i++){
//         if(this.keyMap[i]){
//           for(let j = 0; j < this.keyMap[i].length; j++){
//             if(!keysArr.includes(this.keyMap[i][j][0])){
//               keysArr.push(this.keyMap[i][j][0])
//             }
//           }
//         }
//       }
//       return keysArr;
//     }
//     values(){
//       let valuesArr = [];
//       for(let i = 0; i < this.keyMap.length; i++){
//         if(this.keyMap[i]){
//           for(let j = 0; j < this.keyMap[i].length; j++){
//             if(!valuesArr.includes(this.keyMap[i][j][1])){
//               valuesArr.push(this.keyMap[i][j][1])
//             }
//           }
//         }
//       }
//       return valuesArr;
//     }

     

//   }
  
//   let ht = new HashTable(17);
//   ht.set("maroon","#800000")
//   ht.set("yellow","#FFFF00")
//   ht.set("olive","#808000")
//   ht.set("salmon","#FA8072")
//   ht.set("lightcoral","#F08080")
//   ht.set("mediumvioletred","#C71585")
//   ht.set("plum","#DDA0DD")
//   ht.set("purple","#DDA0DD")
//   ht.set("violet","#DDA0DD")
  
//   //console.log("ht", ht)
//   ht.keys().forEach(function(key){
//     console.log(ht.get(key));
//   })
//   console.log("values",ht.values())
//   console.log("keys", ht.keys())
//   console.log("ht", ht)

// class HashTable {
//     constructor(size = 53) {
//       this.keyMap = new Array(size);
//     }
  
//     _hash(key) {
//       let total = 0;
//       let WEIRD_PRIME = 31;
//       for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//       }
//       return total;
//     }
  
//     set(key, value) {
//       let index = this._hash(key);
//       if (!this.keyMap[index]) {
//         this.keyMap[index] = [];
//       }
//       this.keyMap[index].push([key, value]);
//     }
  
//     get(key) {
//       let index = this._hash(key);
//       if (this.keyMap[index]) {
//         for (let i = 0; i < this.keyMap[index].length; i++) {
//           if (this.keyMap[index][i][0] === key) {
//             return this.keyMap[index][i][1];
//           }
//         }
//       }
//       return undefined;
//     }
  
//     keys() {
//       let keysArr = [];
//       for (let i = 0; i < this.keyMap.length; i++) {
//         if (this.keyMap[i]) {
//           for (let j = 0; j < this.keyMap[i].length; j++) {
//             if (!keysArr.includes(this.keyMap[i][j][0])) {
//               keysArr.push(this.keyMap[i][j][0]);
//             }
//           }
//         }
//       }
//       return keysArr;
//     }
  
//     values() {
//       let valuesArr = [];
//       for (let i = 0; i < this.keyMap.length; i++) {
//         if (this.keyMap[i]) {
//           for (let j = 0; j < this.keyMap[i].length; j++) {
//             if (!valuesArr.includes(this.keyMap[i][j][1])) {
//               valuesArr.push(this.keyMap[i][j][1]);
//             }
//           }
//         }
//       }
//       return valuesArr;
//     }
  
//     toString() {
//       const formattedData = [];
//       for (const entry of this.keyMap) {
//         if (entry) {
//           const entries = entry.map(([key, value]) => `${key}: ${value}`);
//           formattedData.push(`[${entries.join(', ')}]`);
//         } else {
//           formattedData.push(null);
//         }
//       }
//       return `[${formattedData.join(', ')}]`;
//     }
//   }
  
//   let ht = new HashTable(17);
//   ht.set("maroon", "#800000");
//   ht.set("yellow", "#FFFF00");
//   ht.set("olive", "#808000");
//   ht.set("salmon", "#FA8072");
//   ht.set("lightcoral", "#F08080");
//   ht.set("mediumvioletred", "#C71585");
//   ht.set("plum", "#DDA0DD");
//   ht.set("purple", "#DDA0DD");
//   ht.set("violet", "#DDA0DD");
  
//   console.log("ht:", ht.toString());
//   console.log("values:", ht.values());
//   console.log("keys:", ht.keys());


// class HashTable {
//     constructor(size = 53) {
//       this.keyMap = new Array(size);
//     }
  
//     _hash(key) {
//       let total = 0;
//       let WEIRD_PRIME = 31;
//       for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//       }
//       return total;
//     }
  
//     set(key, value) {
//       let index = this._hash(key);
//       if (!this.keyMap[index]) {
//         this.keyMap[index] = [];
//       }
//       this.keyMap[index].push([key, value]);
//     }
  
//     get(key) {
//       let index = this._hash(key);
//       if (this.keyMap[index]) {
//         for (let i = 0; i < this.keyMap[index].length; i++) {
//           if (this.keyMap[index][i][0] === key) {
//             return this.keyMap[index][i][1];
//           }
//         }
//       }
//       return undefined;
//     }
  
//     keys() {
//       let keysArr = [];
//       for (let i = 0; i < this.keyMap.length; i++) {
//         if (this.keyMap[i]) {
//           for (let j = 0; j < this.keyMap[i].length; j++) {
//             if (!keysArr.includes(this.keyMap[i][j][0])) {
//               keysArr.push(this.keyMap[i][j][0]);
//             }
//           }
//         }
//       }
//       return keysArr;
//     }
  
//     values() {
//       let valuesArr = [];
//       for (let i = 0; i < this.keyMap.length; i++) {
//         if (this.keyMap[i]) {
//           for (let j = 0; j < this.keyMap[i].length; j++) {
//             if (!valuesArr.includes(this.keyMap[i][j][1])) {
//               valuesArr.push(this.keyMap[i][j][1]);
//             }
//           }
//         }
//       }
//       return valuesArr;
//     }
  
//     toString() {
//       const formattedData = [];
//       for (const entry of this.keyMap) {
//         if (entry) {
//           const entries = entry.map(([key, value]) => `${key}: ${value}`);
//           formattedData.push(entries);
//         } else {
//           formattedData.push(null);
//         }
//       }
//       return JSON.stringify(formattedData, null, 2);
//     }
//   }
  
//   let ht = new HashTable(17);
//   ht.set("maroon", "#800000");
//   ht.set("yellow", "#FFFF00");
//   ht.set("olive", "#808000");
//   ht.set("salmon", "#FA8072");
//   ht.set("lightcoral", "#F08080");
//   ht.set("mediumvioletred", "#C71585");
//   ht.set("plum", "#DDA0DD");
//   ht.set("purple", "#DDA0DD");
//   ht.set("violet", "#DDA0DD");
  
//   console.log("ht:", ht.toString());
//   console.log("values:", ht.values());
//   console.log("keys:", ht.keys());

class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
  
    set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
  
    get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    keys() {
      let keysArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keysArr.includes(this.keyMap[i][j][0])) {
              keysArr.push(this.keyMap[i][j][0]);
            }
          }
        }
      }
      return keysArr;
    }
  
    values() {
      let valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!valuesArr.includes(this.keyMap[i][j][1])) {
              valuesArr.push(this.keyMap[i][j][1]);
            }
          }
        }
      }
      return valuesArr;
    }
  
    toString() {
      const formattedData = this.keyMap.map((entry, index) => {
        if (entry) {
          const entries = entry.map(([key, value]) => `${key}: ${value}`);
          return `${index}: [${entries.join(', ')}]`;
        } else {
          return `${index}: null`;
        }
      });
      return `[${formattedData.join(', ')}]`;
    }
  }
  
  let ht = new HashTable(17);
  ht.set("maroon", "#800000");
  ht.set("yellow", "#FFFF00");
  ht.set("olive", "#808000");
  ht.set("salmon", "#FA8072");
  ht.set("salmon", "#FA8072");
  ht.set("lightcoral", "#F08080");
  ht.set("mediumvioletred", "#C71585");
  ht.set("plum", "#DDA0DD");
  ht.set("purple", "#DDA0DD");
  ht.set("violet", "#DDA0DD");
  ht.set("shakil","#7EUEUW&")
  
  console.log("ht:", ht.toString());
  console.log("values:", ht.values());
  console.log("keys:", ht.keys());
  console.log(ht.get("plum"))
  console.log(ht.get("shakil"))
  
  
  