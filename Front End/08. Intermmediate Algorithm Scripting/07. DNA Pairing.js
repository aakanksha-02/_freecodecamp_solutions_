function getPair(gen) {
  switch (gen) {
    case 'G': return 'C';
    case 'C': return 'G';
    case 'A': return 'T';
    case 'T': return 'A';
  }
}

function pairElement(str) {
  var DNAStrand = [];

  str = str.split('');
  DNAStrand = str.map(function(val) {
    return [val, getPair(val)];
  });

 return DNAStrand;
}

pairElement("GCG");

