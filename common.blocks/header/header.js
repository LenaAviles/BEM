modules.define('header', ['i-bem-dom'], function(provide, BEMDOM) {

    provide(BEMDOM.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('inited');

                    this.domElem.on('click', () => {
                        this.toggleMod('visible');
                    });
                }
            },
            visible: {
                true: function() {
                    console.log('I\'m visible');
                },
                '': function() {
                    console.log(':(');
                }
            }
        }
    }));

});
