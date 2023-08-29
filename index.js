import $ from 'jquery';

var M_SCOPE = {
  ORG: {},
  ArabicNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  FootNoteSymbols: ['*', '†', '‡', '§', '‖', '¶', '#'],
  FootNoteSymbol_II: ['*', '†', '‡', '‖', '$', '¶'],
  // ? *,†,‡,**,††,‡‡ ==> INTTEC - 07_JULY_23_YA
  FootNoteSymbols_III: ['*', '†', '‡', '**', '††', '‡‡'],
  z_symbols: ['*', '†', '‡', '§', '¶', '‖'],
  // ? Order: *,†,‡,||,$,¶,**,††,‡‡,||||,$$,¶¶ - YA JVCULT- 21_JUNNE-2023
  z_symbols_II: ['*', '†', '‡', '‖', '§', '¶'],
  z_FNChar: ['*', '$', '†', '‡', '§', '¶', '‖'],
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
      n = 25;
      for (let Count = 0; Count < n; Count++) {
        for (const [name, valuesArr] of Object.entries(M_SCOPE.ORG)) {
          if (name == 'FootNoteSymbol_II') {
            //console.log(name.match(/symbol/gi))
            console.log(typeof valuesArr == 'object');
          }
          if (name.match(/symbol/gi) && typeof valuesArr == 'object') {
            //console.log(name);
            let newValue = this.label_Symbol(valuesArr, Count);
            //console.log(newValue);
            if (M_SCOPE[name].indexOf(newValue) == -1) {
              M_SCOPE[name].push(newValue);
            }
          }
        }
      }
      console.log(M_SCOPE.FootNoteSymbols);
    } catch (err) {
      console.warn(err.message);
    }
  },
};

//console.log(Object.entries(M_SCOPE))
M_SCOPE.label_Generator();
