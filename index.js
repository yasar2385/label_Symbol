import $ from 'jquery';
function getSymbolIndicator(Arr, n) {
  try {
    //code goes here
    let x = 0,
      y = 0,
      z = null,
      len = Arr.length;
    if (n >= len) {
      while (n >= y) {
        x++;
        $.each(Arr, function (ind, sym) {
          if (n == y) {
            z = sym;
            return false;
          } else {
            y++;
          }
        });
        if (y == 500 || (n == y && z != null)) {
          break;
        }
      }
      let out = Array(x + 1).join(z);
      return out;
    } else {
      return Arr[n];
    }
  } catch (err) {
    console.warn(err.message);
  }
}

var M_SCOPE = {
  ArabicNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  FootNoteSymbols: ['*', '†', '‡', '§', '‖', '¶', '#'],
  FootNoteSymbol_II: [
    '†',
    '‡',
    '‖',
    '$',
    '¶',
    '**',
    '††',
    '‡‡',
    '‖‖',
    '§§',
    '¶¶',
  ],
  // ? *,†,‡,**,††,‡‡ ==> INTTEC - 07_JULY_23_YA
  FootNoteSymbols_III: ['*', '†', '‡', '**', '††', '‡‡'],
  z_symbols: ['*', '†', '‡', '§', '¶', '‖'],
  // ? Order: *,†,‡,||,$,¶,**,††,‡‡,||||,$$,¶¶ - YA JVCULT- 21_JUNNE-2023
  z_symbols_II: ['*', '†', '‡', '‖', '§', '¶'],
  z_FNChar: ['*', '$', '†', '‡', '§', '¶', '‖', '**', '††', '‡‡', '§§'],
  IsAftercomma: false,
  label_Symbol: function (Arr, n, _ = {}) {
    try {
      let x = 0,
        y = 0,
        z = null,
        len = Arr.length;
      if (n >= len) {
        while (n >= y) {
          x++;
          $.each(Arr, function (ind, sym) {
            if (n == y) {
              z = sym;
              return false;
            } else y++;
          });
          if (y == 500 || (n == y && z != null)) break;
        }
        let out = Array(x + 1).join(z);
        return out;
      } else return Arr[n];
    } catch (err) {
      console.warn(err.message);
    }
  },
  label_Generator: function (n, _ = {}) {
    try {
      n = 35;
      for (let Count = 0; Count < n; Count++) {
        for (const [name, valuesArr] of Object.entries(M_SCOPE)) {
          if (name.match(/symbol/gi) && typeof valuesArr == 'object') {            
            let newValue = this.label_Symbol(valuesArr, Count);
            if (valuesArr.indexOf(newValue) == -1) {
              valuesArr.push(newValue);
            }
          }
        }
      }
      console.log(M_SCOPE);
    } catch (err) {
      console.warn(err.message);
    }
  },
};

//console.log(Object.entries(M_SCOPE))
M_SCOPE.label_Generator();
