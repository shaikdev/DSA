class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const isExist = this.table[index];
    if (!isExist) {
      this.table[index] = [[key, value]];
    } else {
      const isUpdate = isExist.find((item) => item[0] === key);
      if (isUpdate) {
        isUpdate[1] = value;
      } else {
        isExist.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const isExist = this.table[index];
    if (isExist) {
      const findByKey = isExist.find((item) => item[0] === key);
      if (findByKey) {
        return findByKey[1];
      }
    } else return null;
  }

  remove(key) {
    const index = this.hash(key);
    const isExist = this.table[index];
    if (isExist) {
      const findByKey = isExist.find((item) => item[0] === key);
      if (findByKey) {
        const findIndex = isExist.indexOf(findByKey);
        isExist.splice(findIndex, 1);
      }
    } else return null;
  }

  display() {
    console.log(this.table);
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i])
        console.log(`The index ${i} has the value ${this.table[i]}`);
    }
  }
}

const table = new HashTable(20);

table.set("name", "shaik");
table.set("age", 25);

table.set("mane", "rahuman");

table.display();

table.remove("mane");

table.display();
