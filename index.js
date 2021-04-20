function ResponseForm(name,email,message){
    this.name = name;
    this.email = email;
    this.message = message;
}

$(".btn").click(function(){
    var n = $('#name')[0].value;
    var e = $('#email')[0].value;
    var m = $('#message')[0].value;

    var response = new ResponseForm(n,e,m);
    console.log(response)

    $('form')[0].reset();
})