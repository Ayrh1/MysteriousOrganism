// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  
  let pAequor = {
    
    _specimenNum: specimenNum,
    _dna: dna,
    mutate() {
      let baseIndex = Math.floor(Math.random() * this._dna.length);
      let replacementBase = ''; 

      do{
        replacementBase = returnRandBase();
      }while(replacementBase === this._dna[baseIndex]);

     this._dna[baseIndex] = replacementBase; 
     return this._dna; 
    },
    compareDNA(specimen) {
      const { _specimenNum, _dna } = specimen;
      let comparedDNA = [];
      
      for(let i = 0; i < this._dna.length; i++){
        if(this._dna[i] === _dna[i]) {
         comparedDNA.push(this._dna[i]);
        }
      }

      //number of identical bases in both arrays
      let identicalBases = comparedDNA.length
      console.log(`identicalBases variable: ${identicalBases}`); 
      //percentage of shared DNA
      let percentageOfCommonDNa = Math.round((identicalBases/_dna.length) * 100); 
      
      console.log(`Specimen ${this._specimenNum} and Specimen ${_specimenNum} have ${percentageOfCommonDNa}% DNA in common.`)

    },
    willLikelySurvive() {
      let CandGinstances = this._dna.filter(base => base === 'C' || base === 'G');
      let percentageOfInstances =  Math.round((CandGinstances.length/this._dna.length) * 100); 
      
      let results = percentageOfInstances >= 60;

      return results; 
    },
    complementStrand() {
      
      let complementStrand = this._dna.map(base => {
        if(base === 'A'){
          return 'T';
        }else if(base === 'T'){
          return 'A';
        }else if(base === 'C'){
          return 'G';
        } else {
          return 'C'; 
        }
      });

      return complementStrand; 

    },
  };
  
  return pAequor; 
};

const multipAequorGenerator = (num) => {

  let arr = [];

  for(let i = 0; i < num; i++){
    arr.push(pAequorFactory(i,mockUpStrand()))
  };
  return arr

};

/*
let createInstances =  multipAequorGenerator(30);
console.log(createInstances);
*/

let mutantOne = pAequorFactory(12, mockUpStrand())
console.log(mutantOne); 
console.log(mutantOne.complementStrand()); 

/*

better versions of the functions 

mutate() {
  const bases = ['A', 'T', 'C', 'G'];
  const index = Math.floor(Math.random() * this._dna.length);
  const current = this._dna[index];

  // Remove current base and pick a random one from the remaining
  const newBase = bases.filter(base => base !== current)[
    Math.floor(Math.random() * 3)
  ];

  this._dna[index] = newBase;
  return this._dna;
}

*/
