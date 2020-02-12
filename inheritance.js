let Job = function() {
    this.pays = true;
};

Job.prototype.print = function() {
    console.log(this.pays ? 'Job please' : 'No Thanks');
};

let TechJob = function(title, pays) {
    Job.call(this);

    this.title = title;
    this.pays = pays;
};

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

let softwareJob = new TechJob('JS Developer', true);
let softwareJob2 = new TechJob('Java Developer', false);

console.log(softwareJob.print());
console.log(softwareJob2.print());