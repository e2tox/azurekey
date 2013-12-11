
var base62 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    , base = base62.length
    , last, ns = 0;

module.exports = exports = {

    generate: function() {

        var seed = 354385332494196 - (new Date().getTime() * 100)
            , decimal = seed
            , conversion = '';

        if (last == seed) {
            ns++;
            decimal = seed - ns;
        }
        else {
            ns = 0;
            last = seed;
        }

        while (decimal >= 1) {
            conversion = base62[(decimal - (base * Math.floor(decimal / base)))] + conversion;
            decimal = Math.floor(decimal / base);
        }

        // generate a number instead of string
        return (base < 11) ? parseInt(conversion) : conversion;

    }

};
