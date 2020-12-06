showMadal = () => {

    $('#modal_date').modal('show')
}

hangelSubmit = () => {

    $('#modal_date').modal('hide');
    let dateStart = document.getElementById('dateStart').value;
    let dateEnd = document.getElementById('dateEnd').value;
    let text = document.getElementById('text').value
    console.log("start date " + " " + moment(dateStart).format('DD-MM-YYYY'));
    console.log("end date" + " " + moment(dateEnd).add(5,'days').format('DD-MM-YYYY'));
    console.log(text);


}

