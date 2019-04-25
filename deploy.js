var copydir = require("copy-dir");
var fs = require("fs");

finalStep()

function finalStep() {
    //把图片移除隐藏文件夹
    if (fs.existsSync("./.gitbook")) {
        copydir.sync("./.gitbook", "./gitbook");
    }

}