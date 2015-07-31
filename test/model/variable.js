"use strict";

describe('Entry.Variable', function() {
    it('exist', function(){
        assert.isFunction(Entry.Variable);
    });

    var datum = new Entry.Variable();

    it('instanceof', function(){
        assert.isTrue(datum instanceof Entry.Variable);
    });

    it('schema data change', function(){
        var schema = datum.schema;
        var flag = true;
        for (var key in schema) {
            var randomString = Test.randomString();
            datum[key] = randomString;
            if (datum[key] != randomString) {
                flag = false;
                break;
            }
        }
        assert.isTrue(flag, 'data should be changed by schema keys');
    });

    it('non-schema data change', function(){
        var key = Test.randomString();
        var value = Test.randomString();
        var func = function() {
            datum[key] = value;
        };
        assert.throws(func, Error, 'Attempted to assign to readonly property.');
    });
});
