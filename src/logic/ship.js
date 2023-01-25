const shipFactory = (length) => {
  const _length = length;
  let _numHits = 0;

  const getNumHit = () => { return _numHits; }

  const hit = () => { _numHits++; }

  const isSunk = () => {
    if (_length === _numHits) return true;
    return false;
  }

  return {
    getNumHit,
    hit,
    isSunk,
  }
}

export { shipFactory };