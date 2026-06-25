var n = 5;
var pattern = "";

// Upper Half
for(var i = 1; i <= n; i++) {
    for(varj = i; j < n; j++) {
        pattern += " ";
    }
    for(var k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    pattern += "\n";
}

// Lower Half
for(var i = n - 1; i >= 1; i--) {
    for(var j = n; j > i; j--) {
        pattern += " ";
    }
    for(var k = 1; k <= (2 * i - 1); k++) {
        pattern += "*";
    }
    pattern += "\n";
}
