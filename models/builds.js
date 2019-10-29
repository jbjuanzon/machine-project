const db = require('../util/database');

module.exports = class Builds {
    constructor(id, name, cpu, mobo, gpu, memory) {
        this.id = id;
        this.name = name;
        this.cpu = cpu;
        this.mobo = mobo;
        this.gpu = gpu;
        this.memory = memory;
    }

    save() {
        return db.execute(
            'INSERT INTO builds (name, cpuID, moboID, gpuID, memoryID) VALUES (?, ?, ?, ?, ?)',
            [this.name, this.cpu, this.mobo, this.gpu, this.memory]
        );
    }

    static fetchBuilds() {
        return db.execute('SELECT buildID, name, cpuName, moboName, gpuName, memoryName FROM buildView');
    }

    static fetchParts() {
        return db.execute('SELECT * from parts');
    }

    update() {
        return db.execute('UPDATE builds SET name = ?, cpuID =  ?, moboName = ?, gpuName = ?, memoryName = ? WHERE ID = ?',
          [this.name, this.cpu, this.mobo, this.gpu, this.memory, this.id, ]);
      }

      static deleteById(id) {
        return db.execute(
          'DELETE from builds WHERE buildID = ?',
          [id]
        );
      }

    static findBuildsById(id) {
        return db.execute('SELECT * FROM builds WHERE buildID = ?', [id]);
    }
}