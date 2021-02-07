async function contact() {
    if ($('input[name="full_name"]').val() === ""){
        alert('Nama Lengkap Tidak Boleh Kosong!')
        return false
    }

    if ($('input[name="phone_number"]').val() === "") {
        alert('Nomer Telepon Tidak Boleh Kosong!')
        return false
    }

    if ($('select[name="province"]').val() === "") {
        alert('Provinsi Harus Dipilih!!')
        return false
    }

    $.ajax({
        url:'https://api.apispreadsheets.com/data/7848/',
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
