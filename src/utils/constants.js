export const DEFAULT_BOARD = [
  [ { type: 'upgrade', upgrade: 'sloth'}, { type: 'default' }, { type: 'default' }, { type: 'default' }, { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'upgrade', upgrade: 'frog' }  ],
  [ { type: 'block'}, { type: 'block' }, { type: 'block' }, { type: 'block' }, { type: 'block'}, { type: 'block' }, { type: 'block' }, { type: 'block' }  ],
  [ { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'default' }, { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'default' }  ],
  [ { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'default' }, { type: 'block'}, { type: 'default' }, { type: 'default' }, { type: 'default' }  ],
  [ { type: 'default'}, { type: 'block' }, { type: 'block' }, { type: 'block' }, { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'default' }  ],
  [ { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'block' }, { type: 'block'}, { type: 'default' }, { type: 'block' }, { type: 'default' }  ],
  [ { type: 'default'}, { type: 'default' }, { type: 'default' }, { type: 'block' }, { type: 'default'}, { type: 'block' }, { type: 'default' }, { type: 'block' }  ],
  [ { type: 'upgrade', upgrade: 'horse'}, { type: 'default' }, { type: 'default' }, { type: 'default' },{ type: 'default' }, { type: 'upgrade', upgrade: 'monkey' }, { type: 'block' }, { type: 'winner'} ]
]


export const ALLOWED_MOVES = {
  // [top(-) / bottom(+), left(-), right(+)]
  'sloth': [
    [1,0],
    [1,1],
    [1,-1],
    [-1,0],
    [-1,1],
    [-1,-1],
    [0,1],
    [0,-1]
  ],
  'frog': [
    [2,1],
    [2,-1],
    [-2,1],
    [-2,-1],
    [1,2],
    [1,-2],
    [-1,2],
    [-1,-2]
  ],
  'horse': [
    [1,0],
    [0,1],
    [-1,0],
    [0,-1]
  ],
  'monkey': [
    [1,1],
    [1,-1],
    [-1,1],
    [-1,-1]
  ],
}
