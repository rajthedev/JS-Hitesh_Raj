console.log(this);

var user = {
    fn: "raj",
    ln: "kumar",
    getCourseCount: function(){
        console.log("LINE 7", this);
    },
};

user.getCourseCount();