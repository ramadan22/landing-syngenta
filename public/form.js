async function contact() {
    $.ajax({
        url:'https://api.apispreadsheets.com/data/7640/',
        type:'post',
        data:$('form[name="form-contact"]').serializeArray(),
        success: function(){
            $('form[name="form-contact"]').trigger('reset')
            alert("Kamu Berhasil Mengirim Pesan :)")
        },
        error: function(){
            alert("Coba Lagi, Terjadi Error :(")
        }
    });
}
