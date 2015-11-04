
var blocks = {};

var registerExtend = function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this)); // for older versions of handlebars, use block.push(context(this));
}

var registerBlock =  function(name) {
    var val = (blocks[name] || []).join('\n');
    // clear the block
    blocks[name] = [];
    return val;
}


module.exports = {
	registerExtend : registerExtend ,
	registerBlock : registerBlock
}
