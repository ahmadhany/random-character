module.exports = {
    randomChar: function (length) {
        var dic = "abcdefghijklmnopqrstuvwxyz0123456789";
        var i = 0;
        var str = '';
        while (i < length) {
            str += dic.charAt(Math.floor(Math.random() * dic.length));
            i++;
        }
        return str;
    }
}