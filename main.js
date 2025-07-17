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

      console.log(`Original base ${this._dna[baseIndex]}`);
      do{
        replacementBase = returnRandBase();
      }while(replacementBase === this._dna[baseIndex]);
      console.log(replacementBase); 

     this._dna[baseIndex] = replacementBase; 
     console.log(`Replaced base ${this._dna[baseIndex]}`); 
     return this._dna; 
    },

  };
  
  return pAequor; 
}

const monsterOne = pAequorFactory(125, mockUpStrand()); 
console.log(monsterOne);
monsterOne.mutate(); 
console.log(monsterOne)

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
