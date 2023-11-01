class HashTable {
    constructor(size=4){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      return index;
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
     get(key){
    //   let index = this._hash(key);
    //   if(this.keyMap[index]){
    //     for(let i = 0; i < this.keyMap[index].length; i++){
    //       if(this.keyMap[index][i][0] === key) {
    //         return this.keyMap[index][i][1]
    //       }
    //     }
    //   }
    //   return undefined;
     }
  }
  
  let ht = new HashTable();
  console.log(ht.set("hellow world","goodbye!!"))
  console.log(ht.set("dogs","are cool"))
  console.log(ht.set("cats","are fine"))
  console.log(ht.set("i love","pizza"))
//   ht.set("yellow","#FFFF00")
//   ht.set("olive","#808000")
//   ht.set("salmon","#FA8072")
//   ht.set("lightcoral","#F08080")
//   ht.set("mediumvioletred","#C71585")
//   ht.set("plum","#DDA0DD")
console.log(ht)  