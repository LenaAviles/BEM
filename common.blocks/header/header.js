console.log('111');

modules.define('header', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function() {
                    console.log('inited');
                    this.bindTo('click', function() {
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