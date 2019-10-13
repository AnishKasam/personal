// Typing Effect

var app = {
    text: "anish kasam",
    index: 0,
    chars: 0,
    speed: 200,
    container: 'type',
    init: function() {
        this.chars = this.text.length - 1;
        return this.write();
    },
    write: function() {
        document.getElementsByClassName(this.container)[0].innerHTML += this.text[this.index];
        if (this.index < this.chars) {
            this.index++;
            return setTimeout(function() {
                return app.write();
            }, this.speed);
        }
    }
};
app.init();
