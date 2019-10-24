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
        return db.execute('SELECT * FROM buildView');
    }

    static findBuildsById(id) {
        return db.execute('SELECT * FROM builds WHERE buildID = ?', [id]);
    }

    static fetchCPU() {
        return db.execute('SELECT cpuName FROM cpu');
    }

    static findCPUById(id) {
        return db.execute('SELECT cpuName FROM cpu WHERE cpuID = ?', [id]);
    }
}